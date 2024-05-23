import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js"
import { dummyFlights, dummyUsers } from "../backend_communication/dummy_data.js";
import { UserData } from "../backend_communication/users/users.js";
import { getText } from "../dictionary.js";
import { FlightData } from "../backend_communication/flights/flights.js";


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

function hideUpdatePopup() {
    document.getElementById('popup').style.display = 'none';
}

console.log(localStorage.getItem("flightIdView"));
document.addEventListener('DOMContentLoaded', async function () {

    hideUpdatePopup();

    const currentState = document.getElementById("table-type").innerHTML;
        let UserData;
        if (currentState === "Pilot Crew") currentData = await FlightsCommunication.getPilotData(FlightData);
        else if (currentState === "Passenger") currentData = await FlightsCommunication.getPassangerData(FlightData);
        else if (currentState === "Cabin Crew") currentData = await FlightsCommunication.getFlightCrew(FlightData);
        console.log(currentData);


    var state = {
        'querySet': UserData,
        'page': 1,
        'rows': 20,
        'currentTable': 'Cabin Crew'
    };

    function buildTable() {
        var data = pagination(state.querySet, state.page, state.rows);
        var tableBody = document.querySelector(`#${state.currentTable.toLowerCase().replace(' ', '-')}-table tbody`);
        tableBody.innerHTML = '';

        data.querySet.forEach(function (item) {
            var row = `<tr>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.id}</td>
                <td>${item.age}</ td>
                <td>${item.gender}</td>
                <td>${item.nationality}</td>
                <td>${item.email}</td>
                <td>${item.seniority}</td>
                <td>${item.seatNum}</td>
                <td>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
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

    // Popup functionality
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
    });
})

