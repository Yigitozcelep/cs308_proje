import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";
import { dummyFlights, dummyUsers } from "../backend_communication/dummy_data.js";
import { UserData } from "../backend_communication/users/users.js";
import { UserTypes } from "../backend_communication/users/users.js";
import { getText } from "../dictionary.js";
import { FlightData } from "../backend_communication/flights/flights.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";

let userList = []; // List to store user data

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    const logo = document.getElementById('logo');
    const apply = document.getElementById('apply');
    const signOutLink = document.getElementById('signOutLink');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const age = document.getElementById('age');
    const gender = document.getElementById('gender');
    const id = document.getElementById('id');
    const nationality = document.getElementById('nationality');
    const email = document.getElementById('email');
    const seniority = document.getElementById('seniority');
    const seatNum = document.getElementById('seatNum');

    document.querySelectorAll('.column-name').forEach(el => el.innerHTML = getText("name"));
    document.querySelectorAll('.column-surname').forEach(el => el.innerHTML = getText("surname"));
    document.querySelectorAll('.column-nationality').forEach(el => el.innerHTML = getText("nationality"));
    document.querySelectorAll('.column-id').forEach(el => el.innerHTML = getText("id"));
    document.querySelectorAll('.column-age').forEach(el => el.innerHTML = getText("age"));
    document.querySelectorAll('.column-gender').forEach(el => el.innerHTML = getText("gender"));
    document.querySelectorAll('.column-email').forEach(el => el.innerHTML = getText("email"));
    document.querySelectorAll('.column-seniority').forEach(el => el.innerHTML = getText("seniority"));
    document.querySelectorAll('.column-seatNum').forEach(el => el.innerHTML = getText("seatNum"));

    apply.innerHTML = getText("apply");
    logo.innerHTML = getText("AIR308 Airlines");
    signOutLink.innerHTML = getText("signOutLink");
    name.innerHTML = getText("name");
    surname.innerHTML = getText("surname");
    age.innerHTML = getText("age");
    gender.innerHTML = getText("gender");
    id.innerHTML = getText("id");
    nationality.innerHTML = getText("nationality");
    email.innerHTML = getText("email");
    seniority.innerHTML = getText("seniority");
    seatNum.innerHTML = getText("seatNum");

    name_search.setAttribute('placeholder', getText("Name"));
    surname_search.setAttribute('placeholder', getText("surname_search"));
    id_search.setAttribute('placeholder', getText("id_search"));
    age_search.setAttribute('placeholder', getText("age_search"));
    nationality_search.setAttribute('placeholder', getText("nationality_search"));
    seniority_search.setAttribute('placeholder', getText("seniority_search"));
    seat_search.setAttribute('placeholder', getText("seat_search"));
    email_search.setAttribute('placeholder', getText("email_search"));

    document.getElementById('surname').innerHTML = getText('surname');
    document.getElementById('id').innerHTML = getText('id');
    document.getElementById('email').innerHTML = getText('email');
    document.getElementById('seatnum').innerHTML = getText('seatnum');
}

document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

document.addEventListener('DOMContentLoaded', async function () {
    const flightId = localStorage.getItem("flightIdView");
    console.log(flightId);

    const flightData = await FlightsCommunication.getFlightByFlightId(flightId);
    const currentState = document.getElementById("table-type").innerHTML.replace(' ', '');
    let userData;

    if (currentState === "PilotCrew") {
        console.log("Pilot Crew data loaded");
        userData = await FlightsCommunication.getPilotData(flightData);
    } else if (currentState === "Passenger") {
        userData = await FlightsCommunication.getPassengerData(flightData);
    } else if (currentState === "CabinCrew") {
        console.log("Cabin Crew data loaded");
        userData = await FlightsCommunication.getFlightCrew(flightData);
    }

    // Populate userList
    userList = userData;

    console.log(flightData);

    var state = {
        'querySet': userData,
        'page': 1,
        'rows': 20,
        'currentTable': currentState
    };

    function filterByUserType(userType, userData) {
        return userData.filter(user => user.userType === userType);
    }

    function buildTable() {
        var data = pagination(state.querySet, state.page, state.rows);
        var tableBody = document.getElementById(`table-body-${state.currentTable.toLowerCase().replace(' ','')}`);
        tableBody.innerHTML = '';

        data.querySet.forEach(function (item) {
            let seatNo = '';
            let seatType = '';
            if (item.flights && item.flights.length > 0) {
                for (let item1 of item.flights) {
                    const flightData = item1.flightData;
                    if (flightData.getFlightId() == flightId) {
                        seatNo = item1.userSeat.getSeatPosition();
                        seatType = item1.userSeat.getSeatType();
                        console.log('Seat Position:', seatNo);
                        break;
                    }
                }
            }

            console.log("Building table row", tableBody);

            var row = `<tr>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.Id}</td>
                <td>${item.age}</td>
                <td>${item.gender}</td>
                <td>${item.nationality}</td>
                <td>${item.email}</td>`;
            if (state.currentTable === 'Passenger') {
                row += `<td>${seatType}</td>`;
            } else {
                row += `<td>${item.seniority}</td>`;
            }
            row += `<td>${seatNo}</td>
                <td>
                    <button id="update-user" class="update-user" data-user-id="${item.Id}">Update</button>
                    <button id="delete-user" class="delete-user" data-user-id="${item.Id}">Delete</button>
                </td>
            </tr>`;
            tableBody.innerHTML += row;
        });

        pageButtons(data.pages);
        console.log("Table built successfully");
    }

    document.getElementById('add-btn').addEventListener('click', function() {
        window.location.href = '../assignCrew/assignCrew.html';
    });

    function showUpdateForm(user) {
        // Create the overlay
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.appendChild(overlay);

        // Show the overlay
        overlay.style.display = 'block';

        const updateForm = document.createElement('div');
        updateForm.classList.add('update-form');
        updateForm.innerHTML = `
            <h3>Update User</h3>
            <form id="update-user-form">
                <label>Name:</label>
                <input type="text" id="update-name" value="${user.name}">
                <label>Surname:</label>
                <input type="text" id="update-surname" value="${user.surname}">
                <label>Email:</label>
                <input type="text" id="update-email" value="${user.email}">
                <label>Age:</label>
                <input type="number" id="update-age" value="${user.age}">
                <label>Gender:</label>
                <input type="text" id="update-gender" value="${user.gender}">
                <label>Nationality:</label>
                <input type="text" id="update-nationality" value="${user.nationality}">
                <label>Seniority:</label>
                <input type="text" id="update-seniority" value="${user.seniority}">
                <button type="button" id="save-update">Save</button>
                <button type="button" id="cancel-update">Cancel</button>
            </form>
        `;
        document.body.appendChild(updateForm);

        document.getElementById('save-update').addEventListener('click', async function() {
            user.name = document.getElementById('update-name').value;
            user.surname = document.getElementById('update-surname').value;
            user.email = document.getElementById('update-email').value;
            user.age = document.getElementById('update-age').value;
            user.gender = document.getElementById('update-gender').value;
            user.nationality = document.getElementById('update-nationality').value;
            user.seniority = document.getElementById('update-seniority').value;

            await UserCommunication.updateUser(user);
            document.body.removeChild(updateForm);
            document.body.removeChild(overlay);
            buildTable(); // Refresh the table
        });

        document.getElementById('cancel-update').addEventListener('click', function() {
            document.body.removeChild(updateForm);
            document.body.removeChild(overlay); 
        });

        overlay.addEventListener('click', function() {
            document.body.removeChild(updateForm);
            document.body.removeChild(overlay);
        });
    }

    function getUserById(userId) {
        return userList.find(user => user.Id == userId);
    }

    for (const el of ["pilotcrew", "cabincrew", "passenger"]) {
        document.getElementById('table-body-' + el).addEventListener('click', async function(event) {
            if (event.target.classList.contains('delete-user')) {
                const userId = event.target.getAttribute('data-user-id');
                console.log("userId: ", userId);
                const user = getUserById(userId);
                const currentFlightData = await FlightsCommunication.getFlightByFlightId(localStorage.getItem("flightIdView"));
                await UserCommunication.removeCrewFromFlight(user, currentFlightData);
                event.target.closest('tr').remove();
            } else if (event.target.classList.contains('update-user')) {
                const userId = event.target.getAttribute('data-user-id');
                const user = getUserById(userId);
                showUpdateForm(user);
            }
        });
    }

    function pagination(querySet, page, rows) {
        var trimStart = (page - 1) * rows;
        var trimEnd = trimStart + rows;
        var trimmedData = querySet.slice(trimStart, trimEnd);
        var pages = Math.ceil(querySet.length / rows);
        return { 'querySet': trimmedData, 'pages': pages };
    }

    function pageButtons(pages) {
        var wrapper = document.getElementById('page-wrapper');
        wrapper.innerHTML = '';
        for (var page = 1; page <= pages; page++) {
            var button = document.createElement('button');
            button.value = page;
            button.textContent = page;
            button.className = 'page-btn';
            button.addEventListener('click', function () {
                state.page = Number(this.value);
                buildTable();
            });
            wrapper.appendChild(button);
        }
    }

    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            let varA;
            let varB;
            if (key === "Name") {
                varA = a.name;
                varB = b.name;
            } else if (key === "Surname") {
                varA = a.surname;
                varB = b.surname;
            } else if (key === "user-id") {
                varA = a.Id;
                varB = b.Id;
            } else if (key === "Age") {
                varA = a.age;
                varB = b.age;
            } else if (key === "Gender") {
                varA = a.gender;
                varB = b.gender;
            } else if (key === "Nationality") {
                varA = a.nationality;
                varB = b.nationality;
            } else if (key === "Email") {
                varA = a.email;
                varB = b.email;
            } else if (key === "Seniority") {
                varA = a.seniority;
                varB = b.seniority;
            } else if (key === "SeatNum") {
                varA = a.seatNum;
                varB = b.seatNum;
            }

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (order === 'desc') ? (comparison * -1) : comparison;
        };
    }

    document.querySelectorAll('th').forEach(header => {
        header.addEventListener('click', function () {
            const order = (this.dataset.order === 'desc') ? 'asc' : 'desc';
            this.dataset.order = order;
            const property = this.dataset.column;
            state.querySet.sort(compareValues(property, order));
            state.page = 1;
            buildTable();

            document.querySelectorAll('th').forEach(th => {
                th.innerHTML = th.innerHTML.replace('▼', '').replace('▲', '');
            });
            this.innerHTML += order === 'asc' ? ' ▲' : ' ▼';
        });
    });

    function searchTable(filters, data) {
        return data.filter(item => {
            let seatNo = '';
            if (item.flights && item.flights.length > 0) {
                for (let item1 of item.flights) {
                    const flightData = item1.flightData;
                    if (flightData.getFlightId() == flightId) {
                        seatNo = item1.userSeat.getSeatPosition();
                        break;
                    }
                }
            }
            return (!filters.name || item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (!filters.surname || item.surname.toLowerCase().includes(filters.surname.toLowerCase())) &&
                (!filters.id || item.Id.toString().includes(filters.id.toString())) &&
                (!filters.age || item.age.toString().includes(filters.age.toString())) &&
                (!filters.gender || item.gender.toLowerCase() === filters.gender.toLowerCase()) &&
                (!filters.nationality || item.nationality.toLowerCase().includes(filters.nationality.toLowerCase())) &&
                (!filters.email || item.email.toLowerCase().includes(filters.email.toLowerCase())) &&
                (!filters.seniority || item.seniority.toLowerCase().includes(filters.seniority.toLowerCase())) &&
                (!filters.seatNum || seatNo.toLowerCase().includes(filters.seatNum.toLowerCase()));
        });
    }

    function applyFilters() {
        var filters = {
            name: document.getElementById('name_search').value,
            surname: document.getElementById('surname_search').value,
            id: document.getElementById('id_search').value,
            age: document.getElementById('age_search').value,
            gender: document.getElementById('gender_search').value,
            nationality: document.getElementById('nationality_search').value,
            email: document.getElementById('email_search').value,
            seniority: document.getElementById('seniority_search').value,
            seatNum: document.getElementById('seat_search').value
        };
        var filteredData = searchTable(filters, userList); // Use userList here
        state.querySet = filteredData;
        state.page = 1;
        buildTable();
    }

    document.getElementById('apply').addEventListener('click', applyFilters);

    // Table navigation
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const tableType = document.getElementById('table-type');

    const tableOrder = ['PilotCrew', 'CabinCrew', 'Passenger'];

    async function showTable(tableName) {

        document.getElementById('cabincrew-table').style.display = 'none';
        document.getElementById('passenger-table').style.display = 'none';
        document.getElementById('pilotcrew-table').style.display = 'none';
        if (tableName === 'Passenger') {
          //  console.log(userData)
            state.querySet = filterByUserType("Passenger", userData);
            state.querySet = userData = await FlightsCommunication.getPassangerData(flightData);
            state.currentTable = "Passenger";
            localStorage.setItem("currentTable", state.currentTable);

        } 
        else if (tableName === 'CabinCrew') {
            state.querySet = filterByUserType("CabinCrew", userData);
            state.querySet = userData = await FlightsCommunication.getFlightCrew(flightData);
            state.currentTable = "CabinCrew";
            localStorage.setItem("currentTable", state.currentTable);


        } else if (tableName === 'PilotCrew') {
          state.querySet = filterByUserType("PilotCrew", userData);
            state.querySet = userData = await FlightsCommunication.getPilotData(flightData);
            state.currentTable = "PilotCrew";
            localStorage.setItem("currentTable", state.currentTable);
        }
        console.log(state.currentTable.toLowerCase());
        document.getElementById(`${state.currentTable.toLowerCase()}-table`).style.display = 'block';
        state.currentTable = tableName
        tableType.textContent = tableName;
        console.log(tableName);
        buildTable();
        updateButtons(tableName);
    }

    function updateButtons(currentTable) {
        const currentIndex = tableOrder.indexOf(currentTable);
        let availableTables = tableOrder;

       

        const prevIndex = (currentIndex - 1 + availableTables.length) % availableTables.length;
        const nextIndex = (currentIndex + 1) % availableTables.length;

        prevButton.textContent = `< ${availableTables[prevIndex]}`;
        nextButton.textContent =` ${availableTables[nextIndex]} >`;
    }


    prevButton.addEventListener('click', function () {
        const currentIndex = tableOrder.indexOf(state.currentTable);
        const prevIndex = (currentIndex - 1 + tableOrder.length) % tableOrder.length;
        showTable(tableOrder[prevIndex]);
    });

    nextButton.addEventListener('click', function () {
        const currentIndex = tableOrder.indexOf(state.currentTable);
        const nextIndex = (currentIndex + 1) % tableOrder.length;
        showTable(tableOrder[nextIndex]);
    });

    showTable('CabinCrew');
});
