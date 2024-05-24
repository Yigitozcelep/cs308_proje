import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js"
import { dummyFlights, dummyUsers } from "../backend_communication/dummy_data.js";
import { UserData } from "../backend_communication/users/users.js";
import {UserTypes} from "../backend_communication/users/users.js"
import { getText } from "../dictionary.js";
import { FlightData } from "../backend_communication/flights/flights.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

      
    const logo = document.getElementById('logo');
    const apply = document.getElementById('apply');

    apply.innerHTML = getText("apply");
    logo.innerHTML=getText("AIR308 Airlines")

    name_search.setAttribute('placeholder', getText("name_search"));
    surname_search.setAttribute('placeholder', getText("surname_search"));
    id_search.setAttribute('placeholder', getText("id_search"));
    age_search.setAttribute('placeholder', getText("age_search"));
    nationality_search.setAttribute('placeholder', getText("nationality_search"));
    seniority_search.setAttribute('placeholder', getText("seniority_search"));
    seat_search.setAttribute('placeholder', getText("seat_search"));
    email_search.setAttribute('placeholder', getText("email_search"));

}

document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);


console.log(localStorage.getItem("flightIdView"));
document.addEventListener('DOMContentLoaded', async function () {



    let FlightData = await FlightsCommunication.getFlightByFlightId(localStorage.getItem("flightIdView"));
    const currentState = document.getElementById("table-type").innerHTML;
    let currentData;
    if (currentState === "Pilot Crew") currentData = await FlightsCommunication.getPilotData(FlightData);
    else if (currentState === "Passenger") currentData = await FlightsCommunication.getPassangerData(FlightData);
    else if (currentState === "Cabin Crew") currentData = await FlightsCommunication.getFlightCrew(FlightData);


    var state = {
        'querySet': currentData,
        'page': 1,
        'rows': 20,
        'currentTable': currentState
        };

    function buildTable() {
        var data = pagination(state.querySet, state.page, state.rows);
        var tableBody = document.querySelector(`#${state.currentTable.toLowerCase().replace(' ', '-')}-table tbody`);
        tableBody.innerHTML = '';

        data.querySet.forEach(function (item) {
            let seatNo = '';
            if (item.flights && item.flights.length > 0) {
                for (let item1 of item.flights) {
                    const flightData = item1.flightData;
                   // console.log('Flight ID:', flightData.getFlightId());
                    if (flightData.getFlightId() == localStorage.getItem("flightIdView")) {
                        seatNo = item1.userSeat.getSeatPosition();
                        console.log('Seat Position:', seatNo);
                        console.log(user);
                        break;
                    }
                }
            }
            
            var row = `<tr>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.Id}</td>
                <td>${item.age}</td>
                <td>${item.gender}</td>
                <td>${item.nationality}</td>
                <td>${item.email}</td>
                <td>${item.seniority}</td>
                <td>${seatNo ? seatNo : 'N/A'}</td>

                <td>
                    <button id="update-user" class="update-user" data-user-id="${item.Id}">Update</button>
                    <button id="delete-user" class="delete-user" delete-user-id="${item.Id}">Delete</button>
                </td>

            </tr>`;
            tableBody.innerHTML += row;
          
        });

        pageButtons(data.pages);
    }
    document.getElementById('table-body-cabin-crew').addEventListener('click', async function(event) {
        if (event.target.classList.contains('delete-user')) {
            const userId = event.target.getAttribute('data-user-id');
            console.log(`Deleting user with ID: ${userId}`);  
            const user = await UserCommunication.getUserById(userId);
            console.log(`User data for deletion: `, user);  
            await UserCommunication.deleteUser(user);
            event.target.closest('tr').remove();
        } else if (event.target.classList.contains('update-user')) {
            const userId = event.target.getAttribute('data-user-id');
            console.log(`Updating user with ID: ${userId}`);  
            const user = await UserCommunication.getUserById(userId);
            console.log(`User data for update: `, user);  
            showUpdateForm(user);
        }
    });

    function showUpdateForm(user) {
        const updateForm = document.createElement('div');
        updateForm.classList.add('update-form');
        updateForm.style.position = 'fixed';
        updateForm.style.top = '50%';
        updateForm.style.left = '50%';
        updateForm.style.transform = 'translate(-50%, -50%)';
        updateForm.style.backgroundColor = 'white';
        updateForm.style.padding = '20px';
        updateForm.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        updateForm.style.zIndex = '1000';

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
                <label>Seat:</label>
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
           // seatNo = document.getElementById('update-seatno').value;

            console.log(`Updated user data to save: `, user);  // Debugging line
            
            await UserCommunication.updateUser(user);
            document.body.removeChild(updateForm);
            buildTable(); // Refresh the table
        });

        document.getElementById('cancel-update').addEventListener('click', function() {
            document.body.removeChild(updateForm);
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
            const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
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
            return (!filters.name || item.Name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (!filters.surname || item.Surname.toLowerCase().includes(filters.surname.toLowerCase())) &&
                (!filters.id || item.CrewID.toLowerCase().includes(filters.id.toLowerCase())) &&
                (!filters.age || item.Age.toString() === filters.age) &&
                (!filters.gender || item.Gender.toLowerCase() === filters.gender.toLowerCase()) &&
                (!filters.nationality || item.Nationality.toLowerCase().includes(filters.nationality.toLowerCase())) &&
                (!filters.email || item.Email.toLowerCase().includes(filters.email.toLowerCase())) &&
                (!filters.seniority || item.Seniority.toLowerCase().includes(filters.seniority.toLowerCase())) &&
                (!filters.seatNum || item.SeatNum.toLowerCase().includes(filters.seatNum.toLowerCase()));
        });
    }

    function applyFilters() {
        var filters = {
            name: document.getElementById('name-search').value,
            surname: document.getElementById('surname-search').value,
            id: document.getElementById('id-search').value,
            age: document.getElementById('age-search').value,
            gender: document.getElementById('gender-search').value,
            nationality: document.getElementById('nationality-search').value,
            email: document.getElementById('email-search').value,
            seniority: document.getElementById('seniority-search').value,
            seatNum: document.getElementById('seat-search').value
        };
        var filteredData = searchTable(filters, currentData);
        state.querySet = filteredData;
        state.page = 1;
        buildTable();
        
    }

    document.getElementById('apply').addEventListener('click', applyFilters);

    
    // Table navigation
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const tableType = document.getElementById('table-type');

    const tableOrder = ['Pilot Crew', 'Cabin Crew', 'Passenger'];

    function showTable(tableName) {
        document.getElementById('cabin-crew-table').style.display = 'none';
        document.getElementById('passenger-table').style.display = 'none';
        document.getElementById('pilot-crew-table').style.display = 'none';

        if (tableName === 'Cabin Crew') {
            document.getElementById('cabin-crew-table').style.display = 'block';
        } else if (tableName === 'Passenger') {
            document.getElementById('passenger-table').style.display = 'block';
        } else if (tableName === 'Pilot Crew') {
            document.getElementById('pilot-crew-table').style.display = 'block';
        }

        state.currentTable = tableName;
        tableType.textContent = tableName;
        buildTable();
        updateButtons(tableName);
    }
    function updateButtons(currentTable) {
        const currentIndex = tableOrder.indexOf(currentTable);
        const prevIndex = (currentIndex - 1 + tableOrder.length) % tableOrder.length;
        const nextIndex = (currentIndex + 1) % tableOrder.length;

        prevButton.textContent = `< ${tableOrder[prevIndex]}`;
        nextButton.textContent = `${tableOrder[nextIndex]} >`;
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

    showTable('Cabin Crew');

    /*Popup functionality
    var openPopupBtn = document.getElementById("open-popup-btn");
    var popup = document.getElementById("popup");
    var closeBtn = popup.querySelector(".close");

    openPopupBtn.addEventListener("click", function () {
        const mainDiv = document.getElementById("myMainDiv");
        const myDiv = document.createElement("div");
        myDiv.style.width = "100vw";
        myDiv.classList.add("randomDiv")
        myDiv.style.height = "100vh";
        myDiv.style.position = "absolute";
        myDiv.style.zIndex = 100;
        mainDiv.appendChild(myDiv);

        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
        for (const el of document.getElementsByClassName("randomDiv")) el.parentNode.removeChild(el)
    });

    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });*/
    
})


