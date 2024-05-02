document.addEventListener('DOMContentLoaded', function () {
    var myArray = [
        { "FlightNo": "FN001", "PlaneId": "B777-001", "DepartureDate": "2024-05-01", "DeparturePlace": "New York Airport", "ArrivalDate": "2024-05-01", "ArrivalPlace": "Los Angeles Airport", "VehicleType": "Boeing 777" },
        { "FlightNo": "FN002", "PlaneId": "B737-002", "DepartureDate": "2024-05-02", "DeparturePlace": "Los Angeles Airport", "ArrivalDate": "2024-05-02", "ArrivalPlace": "Chicago Airport", "VehicleType": "Boeing 737" },
        { "FlightNo": "FN003", "PlaneId": "A330-003", "DepartureDate": "2024-05-03", "DeparturePlace": "Chicago Airport", "ArrivalDate": "2024-05-03", "ArrivalPlace": "Miami Airport", "VehicleType": "Airbus A330" },
        { "FlightNo": "FN004", "PlaneId": "C919-004", "DepartureDate": "2024-05-04", "DeparturePlace": "Miami Airport", "ArrivalDate": "2024-05-04", "ArrivalPlace": "Dallas Airport", "VehicleType": "Comac C919" },
        { "FlightNo": "FN005", "PlaneId": "A220-005", "DepartureDate": "2024-05-05", "DeparturePlace": "Dallas Airport", "ArrivalDate": "2024-05-05", "ArrivalPlace": "Seattle Airport", "VehicleType": "Airbus A220" },
        { "FlightNo": "FN006", "PlaneId": "B777-006", "DepartureDate": "2024-05-06", "DeparturePlace": "Seattle Airport", "ArrivalDate": "2024-05-06", "ArrivalPlace": "New York Airport", "VehicleType": "Boeing 777" },
        { "FlightNo": "FN007", "PlaneId": "B737-007", "DepartureDate": "2024-05-07", "DeparturePlace": "New York Airport", "ArrivalDate": "2024-05-07", "ArrivalPlace": "London Airport", "VehicleType": "Boeing 737" },
        { "FlightNo": "FN008", "PlaneId": "A330-008", "DepartureDate": "2024-05-08", "DeparturePlace": "London Airport", "ArrivalDate": "2024-05-08", "ArrivalPlace": "Paris Airport", "VehicleType": "Airbus A330" },
        { "FlightNo": "FN009", "PlaneId": "C919-009", "DepartureDate": "2024-05-09", "DeparturePlace": "Paris Airport", "ArrivalDate": "2024-05-09", "ArrivalPlace": "Rome Airport", "VehicleType": "Comac C919" },
        { "FlightNo": "FN010", "PlaneId": "A220-010", "DepartureDate": "2024-05-10", "DeparturePlace": "Rome Airport", "ArrivalDate": "2024-05-10", "ArrivalPlace": "Athens Airport", "VehicleType": "Airbus A220" },
        { "FlightNo": "FN011", "PlaneId": "B777-011", "DepartureDate": "2024-05-11", "DeparturePlace": "Athens Airport", "ArrivalDate": "2024-05-11", "ArrivalPlace": "Tokyo Airport", "VehicleType": "Boeing 777" },
        { "FlightNo": "FN012", "PlaneId": "B737-012", "DepartureDate": "2024-05-12", "DeparturePlace": "Tokyo Airport", "ArrivalDate": "2024-05-12", "ArrivalPlace": "Sydney Airport", "VehicleType": "Boeing 737" },
        { "FlightNo": "FN013", "PlaneId": "A330-013", "DepartureDate": "2024-05-13", "DeparturePlace": "Sydney Airport", "ArrivalDate": "2024-05-13", "ArrivalPlace": "Hong Kong Airport", "VehicleType": "Airbus A330" },
        { "FlightNo": "FN014", "PlaneId": "C919-014", "DepartureDate": "2024-05-14", "DeparturePlace": "Hong Kong Airport", "ArrivalDate": "2024-05-14", "ArrivalPlace": "Dubai Airport", "VehicleType": "Comac C919" },
        { "FlightNo": "FN015", "PlaneId": "A220-015", "DepartureDate": "2024-05-15", "DeparturePlace": "Dubai Airport", "ArrivalDate": "2024-05-15", "ArrivalPlace": "Mumbai Airport", "VehicleType": "Airbus A220" },
        { "FlightNo": "FN016", "PlaneId": "B777-016", "DepartureDate": "2024-05-16", "DeparturePlace": "Mumbai Airport", "ArrivalDate": "2024-05-16", "ArrivalPlace": "Singapore Airport", "VehicleType": "Boeing 777" },
        { "FlightNo": "FN017", "PlaneId": "B737-017", "DepartureDate": "2024-05-17", "DeparturePlace": "Singapore Airport", "ArrivalDate": "2024-05-17", "ArrivalPlace": "Bangkok Airport", "VehicleType": "Boeing 737" },
        { "FlightNo": "FN018", "PlaneId": "A330-018", "DepartureDate": "2024-05-18", "DeparturePlace": "Bangkok Airport", "ArrivalDate": "2024-05-18", "ArrivalPlace": "Seoul Airport", "VehicleType": "Airbus A330" },
        { "FlightNo": "FN019", "PlaneId": "C919-019", "DepartureDate": "2024-05-19", "DeparturePlace": "Seoul Airport", "ArrivalDate": "2024-05-19", "ArrivalPlace": "Beijing Airport", "VehicleType": "Comac C919" },
        { "FlightNo": "FN020", "PlaneId": "A220-020", "DepartureDate": "2024-05-20", "DeparturePlace": "Beijing Airport", "ArrivalDate": "2024-05-20", "ArrivalPlace": "Shanghai Airport", "VehicleType": "Airbus A220" },
        { "FlightNo": "FN021", "PlaneId": "B777-021", "DepartureDate": "2024-05-21", "DeparturePlace": "Shanghai Airport", "ArrivalDate": "2024-05-21", "ArrivalPlace": "Hong Kong Airport", "VehicleType": "Boeing 777" },
        { "FlightNo": "FN022", "PlaneId": "B737-022", "DepartureDate": "2024-05-22", "DeparturePlace": "Hong Kong Airport", "ArrivalDate": "2024-05-22", "ArrivalPlace": "Tokyo Airport", "VehicleType": "Boeing 737" },
        { "FlightNo": "FN023", "PlaneId": "A330-023", "DepartureDate": "2024-05-23", "DeparturePlace": "Tokyo Airport", "ArrivalDate": "2024-05-23", "ArrivalPlace": "Sydney Airport", "VehicleType": "Airbus A330" },
        { "FlightNo": "FN024", "PlaneId": "C919-024", "DepartureDate": "2024-05-24", "DeparturePlace": "Sydney Airport", "ArrivalDate": "2024-05-24", "ArrivalPlace": "Hong Kong Airport", "VehicleType": "Comac C919" },
        { "FlightNo": "FN025", "PlaneId": "A220-025", "DepartureDate": "2024-05-25", "DeparturePlace": "Hong Kong Airport", "ArrivalDate": "2024-05-25", "ArrivalPlace": "Singapore Airport", "VehicleType": "Airbus A220" },
        { "FlightNo": "FN026", "PlaneId": "B777-026", "DepartureDate": "2024-05-26", "DeparturePlace": "Singapore Airport", "ArrivalDate": "2024-05-26", "ArrivalPlace": "Bangkok Airport", "VehicleType": "Boeing 777" },
        { "FlightNo": "FN027", "PlaneId": "B737-027", "DepartureDate": "2024-05-27", "DeparturePlace": "Bangkok Airport", "ArrivalDate": "2024-05-27", "ArrivalPlace": "Seoul Airport", "VehicleType": "Boeing 737" },
        { "FlightNo": "FN028", "PlaneId": "A330-028", "DepartureDate": "2024-05-28", "DeparturePlace": "Seoul Airport", "ArrivalDate": "2024-05-28", "ArrivalPlace": "Beijing Airport", "VehicleType": "Airbus A330" },
        { "FlightNo": "FN029", "PlaneId": "C919-029", "DepartureDate": "2024-05-29", "DeparturePlace": "Beijing Airport", "ArrivalDate": "2024-05-29", "ArrivalPlace": "Shanghai Airport", "VehicleType": "Comac C919" },
        { "FlightNo": "FN030", "PlaneId": "A220-030", "DepartureDate": "2024-05-30", "DeparturePlace": "Shanghai Airport", "ArrivalDate": "2024-05-30", "ArrivalPlace": "Hong Kong Airport", "VehicleType": "Airbus A220" }
    
    ];

    var state = {

        'querySet': myArray,

        'page': 1,
        'rows':10,

    }
    function deleteRow(bookingNo) {
        // Remove the corresponding data from myArray
        myArray = myArray.filter(flight => flight.BookingNo !== bookingNo);
        
        // Update localStorage to reflect the changes
        localStorage.setItem('myArray', JSON.stringify(myArray));

        // Update state.querySet to reflect the changes
        state.querySet = myArray.slice((state.page - 1) * state.rows, state.page * state.rows);
    }

    buildTable()

    function pagination(querySet, page, rows){
        var trimStart=(page-1) * rows
        var trimEnd = trimStart + rows

        var trimmedData = querySet.slice(trimStart, trimEnd)

        var pages= Math.ceil(querySet.length/rows)

        return{
            'querySet': trimmedData,
            'pages': pages
        }
    }

    function pageButtons(pages) {
        var wrapper = document.getElementById('page-wrapper');
        wrapper.innerHTML = '';  

        for (var page = 1; page <= pages; page++) {
            var button = document.createElement('button');
            button.value = page;
            button.textContent = page;
            button.className = 'page-btn';
            button.addEventListener('click', function() {
                document.getElementById('table-body').innerHTML = '';  
                state.page = Number(this.value);  
                buildTable();  
            });
            wrapper.appendChild(button);
        }
    }
    
    function buildTable() {
        var data = pagination(state.querySet, state.page, state.rows);
        var tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';  

        data.querySet.forEach(function(item) {
            var row = `<tr>
                <td>${item.FlightNo}</td>    
                <td>${item.PlaneId}</td>
                <td>${item.DepartureDate}</td>
                <td>${item.DeparturePlace}</td>
                <td>${item.ArrivalDate}</td>
                <td>${item.ArrivalPlace}</td>
                <td>${item.VehicleType}</td>
                <td><button class="book-row">Book</button></td>
            </tr>`;
            tableBody.innerHTML += row;
        });

        pageButtons(data.pages);

        
    }
    
    function redirectToBookingPage(flightNo) {
        // Replace 'https://example.com/booking/' with the URL of your booking page
        var bookingUrl = 'https://example.com/booking/' + flightNo;
        window.location.href = bookingUrl;
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


    function searchTable(filters) {
        return myArray.filter(item => {
            return (!filters.PlaneId || item.PlaneId.toLowerCase().includes(filters.PlaneId.toLowerCase())) &&
                (!filters.FlightNo || item.FlightNo.toLowerCase().includes(filters.FlightNo.toLowerCase())) &&
                (!filters.DepartureDate|| item.DepartureDate.toLowerCase().includes(filters.DepartureDate.toLowerCase())) &&
                (!filters.DeparturePlace || item.DeparturePlace.toString() === filters.DeparturePlace) &&
                (!filters.ArrivalDate || item.ArrivalDate.toLowerCase() === filters.ArrivalDate.toLowerCase()) &&
                (!filters.ArrivalPlace || item.ArrivalPlace.toLowerCase().includes(filters.ArrivalPlace.toLowerCase())) &&
                (!filters.VehicleType || item.VehicleType.toLowerCase().includes(filters.VehicleType.toLowerCase()));
        });
    }


    function applyFilters() {
        var filters = {
            FlightNo: document.getElementById('flightNo-search').value,
            PlaneId: document.getElementById('planeId-search').value,  
            DepartureDate: document.getElementById('departureDate-search').value,
            DeparturePlace: document.getElementById('departurePlace-search').value,
            ArrivalDate: document.getElementById('arrivalDate-search').value,
            ArrivalPlace: document.getElementById('arrivalPlace-search').value,
            VehicleType: document.getElementById('vehicleType-search').value,

        };
        var filteredData = searchTable(filters);
        state.querySet = filteredData;  
        state.page = 1;  
        buildTable();  
    }

    document.getElementById('apply').addEventListener('click', applyFilters);
    
    

});

document.addEventListener('DOMContentLoaded', (event) => {
    var helpButton = document.getElementById('helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closeSpan = document.getElementsByClassName('close')[0];

    // When the help button is clicked, show the pop-up
    helpButton.onclick = function() {
        helpPopup.style.display = "flex";
    }

    // When the close button (x) inside the pop-up is clicked, hide the pop-up
    closeSpan.onclick = function() {
        helpPopup.style.display = "none";
    }

    // When the user clicks anywhere outside of the pop-up, close it
    window.onclick = function(event) {
        if (event.target == helpPopup) {
            helpPopup.style.display = "none";
        }
    }
});
