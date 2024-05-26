import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { FlightData } from "../backend_communication/flights/flights.js";
import { getText } from "../dictionary.js";


function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    const logo = document.querySelector('.logo');
    const apply = document.getElementById('apply');
    const helpButton = document.getElementById('helpButton');
    const signOutLink = document.getElementById('signOutLink');


    document.querySelectorAll('.column-name').forEach(el => el.innerHTML = getText("name"));
    document.querySelectorAll('.column-surname').forEach(el => el.innerHTML = getText("surname"));
    document.querySelectorAll('.column-email').forEach(el => el.innerHTML = getText("email"));
    document.querySelectorAll('.column-seatNum').forEach(el => el.innerHTML = getText("seatNum"));




    apply.innerHTML = getText("apply");
    logo.innerHTML = getText("AIR308 Airlines");
    helpButton.innerHTML = getText("helpButton");
    signOutLink.innerHTML = getText("signOutLink");

    document.getElementById('name_search').setAttribute('placeholder', getText('name_search'));
    document.getElementById('surname_search').setAttribute('placeholder', getText('surname_search'));
    document.getElementById('email_search').setAttribute('placeholder', getText('email_search'));
    document.getElementById('seat_search').setAttribute('placeholder', getText('seat_search'));
    document.getElementById('name').setAttribute('placeholder', getText('name'));
    document.getElementById('surname').setAttribute('placeholder', getText('surname'));
    document.getElementById('email').setAttribute('placeholder', getText('email'));
    document.getElementById('seatNum').setAttribute('placeholder', getText('seatNum'));



    document.getElementById('name').innerHTML = getText('name');
    document.getElementById('surname').innerHTML = getText('surname');
    document.getElementById('email').innerHTML = getText('email');
    document.getElementById('seatNum').innerHTML = getText('seatNum');




    document.querySelector('.filters-container div div').innerHTML = getText('filterBy');
    document.querySelector('.table-name').innerHTML = getText('viewing-for');
}


document.addEventListener('DOMContentLoaded', handleLanguageChange);
document.getElementById('language').addEventListener('change', handleLanguageChange);

document.addEventListener('DOMContentLoaded', async function () {

    let FlightData = await FlightsCommunication.getFlightByFlightId(localStorage.getItem("flightIdView"));
    const currentState = document.getElementById("table-type").innerHTML.replace(' ', '');
    console.log(currentState);
    let userData;
    if (currentState === "PilotCrew") userData = await FlightsCommunication.getPilotData(FlightData);
    else if (currentState === "Passenger") {
        console.log("burauagir");
        userData = await FlightsCommunication.getPassangerData(FlightData);}
    else if (currentState === "CabinCrew") {
        userData = await FlightsCommunication.getFlightCrew(FlightData);
        console.log(userData);
    }
    console.log(currentState);
    //.log(currentData);
    console.log(localStorage.getItem("flightIdView"));
    //console.log(flightData);
    
    var state = {
        'querySet': userData,
        'page': 1,
        'rows': 20,
        'currentTable': currentState
    };

    console.log(userData);

    async function getUserRole() {
        return localStorage.getItem("userType");
    }

    async function showProfileIcon() {
        const userRole = await getUserRole();
        const profileIcon = document.getElementById('profileIcon');
        if (userRole === 'Admin') {
            profileIcon.style.display = 'none';
        } else {
            profileIcon.style.display = 'block';
        }
    }

    function filterByUserType(userType, userData) {
        console.log(userData);
        return userData.filter(user => user.userType === userType);
    }

    function buildTable() {
        var data = pagination(state.querySet, state.page, state.rows);
        var tableBody = document.querySelector(`#table-body-${state.currentTable.toLowerCase()}`);
        tableBody.innerHTML = '';

        data.querySet.forEach(function (item) {
            let seatNo = '';
            if (item.flights && item.flights.length > 0) {
                for (let item1 of item.flights) {
                    //console.log(item1);
                    const flightData = item1.flightData;
                    console.log("flightData: ", flightData);
                   // console.log(flightData.getFlightId());
                    if (flightData.getFlightId() == localStorage.getItem("flightIdView")) {
                        seatNo = item1.userSeat.getSeatPosition();
                        break;
                    }
                }
            }

            var row = `<tr>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.Id}</td>
                <td>${item.email}</td>
                <td>${seatNo}</td>
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
            let varA;
            let varB;
            if(key == "Name"){ 
                varA = a.name;
                varB = b.name;
                
             }
            else if(key == "Surname"){ 
                varA = a.surname;
                varB = b.surname;
                
             }
            else if(key == "Email"){ 
                varA = a.email;
                varB = b.email;
                
             }
             else if (key == "CrewID" || key == "ID") { 

                varA = parseInt(a.Id, 10);

                varB = parseInt(b.Id, 10);

            }
             //   varA = a.Id;
              //  varB = b.Id;
                
             //}
             else if (key === "seatNum") {
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
            console.log(item);
            let seatNo = '';
            if (item.flights && item.flights.length > 0) {
                for (let item1 of item.flights) {
                    console.log(item1);
                    const flightData = item1.flightData;
                    console.log(flightData);
                    console.log(flightData.getFlightId());
                    if (flightData.getFlightId() == localStorage.getItem("flightIdView")) {
                        seatNo = item1.userSeat.getSeatPosition();
                        break;
                    }
                }
            }
            return (!filters.name || item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (!filters.surname || item.surname.toLowerCase().includes(filters.surname.toLowerCase())) &&
                (!filters.id || item.Id.toString().includes(filters.id.toString())) &&
                (!filters.email || item.email.toLowerCase().includes(filters.email.toLowerCase())) &&
                (!filters.seatNum || seatNo.toLowerCase().includes(filters.seatNum.toLowerCase()));
                
        });
    }

    function applyFilters() {
        var filters = {
            name: document.getElementById('name_search').value,
            surname: document.getElementById('surname_search').value,
            id: document.getElementById('id_search').value,
            email: document.getElementById('email_search').value,
            seatNum: document.getElementById('seat_search').value
        };
    

        var filteredData = searchTable(filters, userData); //currentDataydı degistirdim
        state.querySet = filteredData;
        state.page = 1;
        buildTable();

    }

    document.getElementById('apply').addEventListener('click', applyFilters);

    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const tableType = document.getElementById('table-type');

    const tableOrder = ['PilotCrew', 'CabinCrew', 'Passenger'];

    async function showTable(tableName) {
        const userRole = await getUserRole();

        document.getElementById('cabincrew-table').style.display = 'none';
        document.getElementById('passenger-table').style.display = 'none';
        document.getElementById('pilotcrew-table').style.display = 'none';


        if (userRole === 'Admin') {
            document.getElementById(`${tableName.toLowerCase().replace(' ', '-')}-table`).style.display = 'block';
        } else if (userRole === 'PilotCrew' && tableName !== 'Passenger') {
            document.getElementById(`${tableName.toLowerCase().replace(' ', '-')}-table`).style.display = 'block';
        } else if (userRole === 'CabinCrew' && tableName !== 'Pilot Crew') {
            document.getElementById(`${tableName.toLowerCase().replace(' ', '-')}-table`).style.display = 'block';
        } else {
            return; 
        }

        if (tableName === 'Passenger') {
          //  console.log(userData)
            state.querySet = filterByUserType("Passenger", userData);
            state.querySet = userData = await FlightsCommunication.getPassangerData(FlightData);
            state.currentTable = "Passenger";

        } 
        else if (tableName === 'CabinCrew') {
            state.querySet = filterByUserType("CabinCrew", userData);
            state.querySet = userData = await FlightsCommunication.getFlightCrew(FlightData);
            state.currentTable = "CabinCrew";

        } else if (tableName === 'PilotCrew') {
          state.querySet = filterByUserType("PilotCrew", userData);
            state.querySet = userData = await FlightsCommunication.getPilotData(FlightData);
            state.currentTable = "PilotCrew";
        }
        console.log(state.currentTable.toLowerCase());
        document.getElementById(`${state.currentTable.toLowerCase()}-table`).style.display = 'block';
        state.currentTable = tableName;
        tableType.textContent = tableName;
        console.log(tableName);
        buildTable();
        updateButtons(tableName, userRole);
    }

    function updateButtons(currentTable, userRole) {
        const currentIndex = tableOrder.indexOf(currentTable);
        let availableTables = tableOrder;

        if (userRole === 'Admin') {
            prevButton.style.display = 'inline-block';
            nextButton.style.display = 'inline-block';
        } else if (userRole === 'PilotCrew') {
            prevButton.style.display = currentTable === 'PilotCrew' ? 'none' : 'inline-block';
            nextButton.style.display = currentTable === 'CabinCrew' ? 'none' : 'inline-block';
        } else if (userRole === 'CabinCrew') {
            prevButton.style.display = currentTable === 'CabinCrew' ? 'none' : 'inline-block';
            nextButton.style.display = currentTable === 'Passenger' ? 'none' : 'inline-block';
        }

        const prevIndex = (currentIndex - 1 + availableTables.length) % availableTables.length;
        const nextIndex = (currentIndex + 1) % availableTables.length;

        prevButton.textContent = `< ${availableTables[prevIndex]}`;
        nextButton.textContent = `${availableTables[nextIndex]} >`;
    }

    prevButton.addEventListener('click', function () {
        const currentIndex = tableOrder.indexOf(state.currentTable);
        let prevIndex;
        if(currentIndex === 0)
            {prevIndex = 2}
        else if (currentIndex === 1)
            {prevIndex = 0}
        else if (currentIndex === 2)
            {prevIndex = 1}
        showTable(tableOrder[prevIndex]);

    });

    nextButton.addEventListener('click', function () {
        const currentIndex = tableOrder.indexOf(state.currentTable);
        let nextIndex;
        if(currentIndex === 0)
            {nextIndex = 1}
        else if (currentIndex === 1)
            {nextIndex = 2}
        else if (currentIndex === 2)
            {nextIndex = 0}
        showTable(tableOrder[nextIndex]);
    });

    showTable('CabinCrew');
    showProfileIcon();
    console.log(currentState);

    ;
});
