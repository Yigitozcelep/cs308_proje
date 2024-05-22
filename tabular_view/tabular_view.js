import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js"
import { dummyFlights, dummyUsers } from "../backend_communication/dummy_data.js";



document.addEventListener('DOMContentLoaded', function () {
   console.log(localStorage.getItem("flightIdView"));
    var state = {
        'querySet': currentData.getFl,
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
                <td>${item.Name}</td>
                <td>${item.Surname}</td>
                <td>${item.CrewID}</td>
            
                <td>${item.Email}</td>
                <td>${item.SeatNum}</td>
              
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
        if (currentState === "Pilot Crew") currentData = FlightsCommunication.getPilotData(currentFlight)
        else if (currentState === "Passenger") currentData = FlightsCommunication.getPassangerData(currentFlight)
        else if (currentState === "Cabin Crew") currentData = FlightsCommunication.getFlightCrew(currentFlight);
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



   
})

