import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";
import { dummyFlights, dummyUsers } from "../backend_communication/dummy_data.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { getText } from "../dictionary.js";
import { FlightData } from "../backend_communication/flights/flights.js";



function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    const logo = document.querySelector('.logo');
    const apply = document.getElementById('apply');
    const helpButton = document.getElementById('helpButton');
    const signOutButton = document.querySelector('.top-bar-item[href="signout.php"]');


    apply.innerHTML = getText("apply");
    logo.innerHTML = getText("AIR308 Airlines");
    helpButton.innerHTML = getText("helpButton");
    signOutButton.innerHTML = getText("signOutButton");

    document.getElementById('name_search').setAttribute('placeholder', getText("name_search"));
    document.getElementById('surname_search').setAttribute('placeholder', getText("surname_search"));
    document.getElementById('id_search').setAttribute('placeholder', getText("id_search"));
    document.getElementById('email_search').setAttribute('placeholder', getText("email_search"));
    document.getElementById('seat_search').setAttribute('placeholder', getText("seat_search"));
    document.getElementById('name-tabular').setAttribute('placeholder', getText("name-tabular"));

}

document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);


document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);
console.log(localStorage.getItem('flightIdView'));
//console.log(dummyUsers);
document.addEventListener('DOMContentLoaded', async function () {
    console.log(localStorage.getItem("flightIdView"));
    let flightData = await FlightsCommunication.getFlightByFlightId(localStorage.getItem("flightIdView"));
    console.log(flightData);
    let userData = await FlightsCommunication.getFlightCrew(flightData);
    var state = {
        'querySet': userData,
        'page': 1,
        'rows': 20,
        'currentTable': 'Cabin Crew'
    };

    async function getUserRole() {
        const userId = localStorage.getItem("userId");
        const user = await UserCommunication.getUserById(userId);
        user.userType = "admin" //datadan dolayı burası dynamically gelmeli
        console.log(user.userType);
        return user.userType;
    }


    async function showProfileIcon() {
        const userRole = await getUserRole();
        const profileIcon = document.getElementById('profileIcon');
        if (userRole === 'admin') {
            profileIcon.style.display = 'none';
        } else {
            profileIcon.style.display = 'block';
        }
    }
    
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
                            console.log('userData');
                            break;
                        }
                    }
                }
                
                var row = `<tr>
                    <td>${item.name}</td>
                    <td>${item.surname}</td>
                    <td>${item.Id}</td>
                    <td>${item.email}</td>
                    <td>${seatNo ? seatNo : 'N/A'}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });

        pageButtons(data.pages);
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
                (!filters.email || item.Email.toLowerCase().includes(filters.email.toLowerCase())) &&
                (!filters.seatNum || item.SeatNum.toLowerCase().includes(filters.seatNum.toLowerCase()));
        });
    }

    function applyFilters() {
        var filters = {
            name: document.getElementById('name-search').value,
            surname: document.getElementById('surname-search').value,
            id: document.getElementById('id-search').value,
            email: document.getElementById('email-search').value,
            seatNum: document.getElementById('seat-search').value
        };
        const currentState = document.getElementById("table-type").innerHTML;
        let currentData;
        if (currentState === "Pilot Crew") currentData = FlightsCommunication.getPilotData(currentFlight);
        else if (currentState === "Passenger") currentData = FlightsCommunication.getPassangerData(currentFlight);
        else if (currentState === "Cabin Crew") currentData = FlightsCommunication.getFlightCrew(currentFlight);
        var filteredData = searchTable(filters, currentData);
        state.querySet = filteredData;
        state.page = 1;
        buildTable();
    }

    document.getElementById('apply').addEventListener('click', applyFilters);

    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const tableType = document.getElementById('table-type');

    const tableOrder = ['Pilot Crew', 'Cabin Crew', 'Passenger'];

    async function showTable(tableName) {
        const userRole = await getUserRole();

        document.getElementById('cabin-crew-table').style.display = 'none';
        document.getElementById('passenger-table').style.display = 'none';
        document.getElementById('pilot-crew-table').style.display = 'none';

        if (userRole === 'admin') {
            document.getElementById(`${tableName.toLowerCase().replace(' ', '-')}-table`).style.display = 'block';
        } else if (userRole === 'pilot' && tableName !== 'Passenger') {
            document.getElementById(`${tableName.toLowerCase().replace(' ', '-')}-table`).style.display = 'block';
        } else if (userRole === 'cabincrew' && tableName !== 'Pilot Crew') {
            document.getElementById(`${tableName.toLowerCase().replace(' ', '-')}-table`).style.display = 'block';
        } else {
            return; 
        }

        state.currentTable = tableName;
        tableType.textContent = tableName;
        buildTable();
        updateButtons(tableName, userRole);
    }

    function updateButtons(currentTable, userRole) {
        const currentIndex = tableOrder.indexOf(currentTable);
        let availableTables = tableOrder;

        if (userRole === 'admin') {
            prevButton.style.display = 'inline-block';
            nextButton.style.display = 'inline-block';
        } else if (userRole === 'pilot') {
            prevButton.style.display = currentTable === 'Pilot Crew' ? 'none' : 'inline-block';
            nextButton.style.display = currentTable === 'Cabin Crew' ? 'none' : 'inline-block';
        } else if (userRole === 'cabincrew') {
            prevButton.style.display = currentTable === 'Cabin Crew' ? 'none' : 'inline-block';
            nextButton.style.display = currentTable === 'Passenger' ? 'none' : 'inline-block';
        }

        const prevIndex = (currentIndex - 1 + availableTables.length) % availableTables.length;
        const nextIndex = (currentIndex + 1) % availableTables.length;

        prevButton.textContent = `< ${availableTables[prevIndex]}`;
        nextButton.textContent = `${availableTables[nextIndex]} >`;
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
    showProfileIcon();


    document.getElementById('signOutLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../start_screen/index.html';
    });
});

