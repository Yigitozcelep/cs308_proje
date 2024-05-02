document.addEventListener('DOMContentLoaded', function () {
    var myArray = [
        { 'BookingNo': 'BK001', 'FlightNo': 'FN001', 'DepartureDate': '2024-05-01', 'DeparturePlace': 'New York', 'ArrivalDate': '2024-05-01', 'ArrivalPlace': 'Los Angeles', 'SeatType': 'First Class', 'SeatNumber': '1A' },
        { 'BookingNo': 'BK002', 'FlightNo': 'FN002', 'DepartureDate': '2024-05-02', 'DeparturePlace': 'Los Angeles', 'ArrivalDate': '2024-05-02', 'ArrivalPlace': 'Chicago', 'SeatType': 'Business Class', 'SeatNumber': '3B' },
        { 'BookingNo': 'BK003', 'FlightNo': 'FN003', 'DepartureDate': '2024-05-03', 'DeparturePlace': 'Chicago', 'ArrivalDate': '2024-05-03', 'ArrivalPlace': 'Miami', 'SeatType': 'Economy Class', 'SeatNumber': '15C' },
        { 'BookingNo': 'BK004', 'FlightNo': 'FN004', 'DepartureDate': '2024-05-04', 'DeparturePlace': 'Miami', 'ArrivalDate': '2024-05-04', 'ArrivalPlace': 'Dallas', 'SeatType': 'First Class', 'SeatNumber': '2A' },
        { 'BookingNo': 'BK005', 'FlightNo': 'FN005', 'DepartureDate': '2024-05-05', 'DeparturePlace': 'Dallas', 'ArrivalDate': '2024-05-05', 'ArrivalPlace': 'Seattle', 'SeatType': 'Business Class', 'SeatNumber': '4B' },
        { 'BookingNo': 'BK006', 'FlightNo': 'FN006', 'DepartureDate': '2024-05-06', 'DeparturePlace': 'Seattle', 'ArrivalDate': '2024-05-06', 'ArrivalPlace': 'New York', 'SeatType': 'Economy Class', 'SeatNumber': '16C' },
        { 'BookingNo': 'BK007', 'FlightNo': 'FN007', 'DepartureDate': '2024-05-07', 'DeparturePlace': 'New York', 'ArrivalDate': '2024-05-07', 'ArrivalPlace': 'London', 'SeatType': 'First Class', 'SeatNumber': '1A' },
        { 'BookingNo': 'BK008', 'FlightNo': 'FN008', 'DepartureDate': '2024-05-08', 'DeparturePlace': 'London', 'ArrivalDate': '2024-05-08', 'ArrivalPlace': 'Paris', 'SeatType': 'Business Class', 'SeatNumber': '3B' },
        { 'BookingNo': 'BK009', 'FlightNo': 'FN009', 'DepartureDate': '2024-05-09', 'DeparturePlace': 'Paris', 'ArrivalDate': '2024-05-09', 'ArrivalPlace': 'Rome', 'SeatType': 'Economy Class', 'SeatNumber': '15C' },
        { 'BookingNo': 'BK010', 'FlightNo': 'FN010', 'DepartureDate': '2024-05-10', 'DeparturePlace': 'Rome', 'ArrivalDate': '2024-05-10', 'ArrivalPlace': 'Athens', 'SeatType': 'First Class', 'SeatNumber': '2A' },
        { 'BookingNo': 'BK011', 'FlightNo': 'FN011', 'DepartureDate': '2024-05-11', 'DeparturePlace': 'Athens', 'ArrivalDate': '2024-05-11', 'ArrivalPlace': 'Tokyo', 'SeatType': 'Business Class', 'SeatNumber': '4B' },
        { 'BookingNo': 'BK012', 'FlightNo': 'FN012', 'DepartureDate': '2024-05-12', 'DeparturePlace': 'Tokyo', 'ArrivalDate': '2024-05-12', 'ArrivalPlace': 'Sydney', 'SeatType': 'Economy Class', 'SeatNumber': '16C' },
        { 'BookingNo': 'BK013', 'FlightNo': 'FN013', 'DepartureDate': '2024-05-13', 'DeparturePlace': 'Sydney', 'ArrivalDate': '2024-05-13', 'ArrivalPlace': 'Hong Kong', 'SeatType': 'First Class', 'SeatNumber': '1A' },
        { 'BookingNo': 'BK014', 'FlightNo': 'FN014', 'DepartureDate': '2024-05-14', 'DeparturePlace': 'Hong Kong', 'ArrivalDate': '2024-05-14', 'ArrivalPlace': 'Dubai', 'SeatType': 'Business Class', 'SeatNumber': '3B' },
        { 'BookingNo': 'BK015', 'FlightNo': 'FN015', 'DepartureDate': '2024-05-15', 'DeparturePlace': 'Dubai', 'ArrivalDate': '2024-05-15', 'ArrivalPlace': 'Mumbai', 'SeatType': 'Economy Class', 'SeatNumber': '15C' },
        { 'BookingNo': 'BK016', 'FlightNo': 'FN016', 'DepartureDate': '2024-05-16', 'DeparturePlace': 'Mumbai', 'ArrivalDate': '2024-05-16', 'ArrivalPlace': 'Singapore', 'SeatType': 'First Class', 'SeatNumber': '2A' },
        { 'BookingNo': 'BK017', 'FlightNo': 'FN017', 'DepartureDate': '2024-05-17', 'DeparturePlace': 'Singapore', 'ArrivalDate': '2024-05-17', 'ArrivalPlace': 'Bangkok', 'SeatType': 'Business Class', 'SeatNumber': '4B' },
        { 'BookingNo': 'BK018', 'FlightNo': 'FN018', 'DepartureDate': '2024-05-18', 'DeparturePlace': 'Bangkok', 'ArrivalDate': '2024-05-18', 'ArrivalPlace': 'Seoul', 'SeatType': 'Economy Class', 'SeatNumber': '16C' },
        { 'BookingNo': 'BK019', 'FlightNo': 'FN019', 'DepartureDate': '2024-05-19', 'DeparturePlace': 'Seoul', 'ArrivalDate': '2024-05-19', 'ArrivalPlace': 'Beijing', 'SeatType': 'First Class', 'SeatNumber': '1A' },
        { 'BookingNo': 'BK020', 'FlightNo': 'FN020', 'DepartureDate': '2024-05-20', 'DeparturePlace': 'Beijing', 'ArrivalDate': '2024-05-20', 'ArrivalPlace': 'Shanghai', 'SeatType': 'Business Class', 'SeatNumber': '3B' },
        { 'BookingNo': 'BK021', 'FlightNo': 'FN021', 'DepartureDate': '2024-05-21', 'DeparturePlace': 'Shanghai', 'ArrivalDate': '2024-05-21', 'ArrivalPlace': 'Hong Kong', 'SeatType': 'Economy Class', 'SeatNumber': '15C' },
        { 'BookingNo': 'BK022', 'FlightNo': 'FN022', 'DepartureDate': '2024-05-22', 'DeparturePlace': 'Hong Kong', 'ArrivalDate': '2024-05-22', 'ArrivalPlace': 'Tokyo', 'SeatType': 'First Class', 'SeatNumber': '2A' },
        { 'BookingNo': 'BK023', 'FlightNo': 'FN023', 'DepartureDate': '2024-05-23', 'DeparturePlace': 'Tokyo', 'ArrivalDate': '2024-05-23', 'ArrivalPlace': 'Sydney', 'SeatType': 'Business Class', 'SeatNumber': '4B' },
        { 'BookingNo': 'BK024', 'FlightNo': 'FN024', 'DepartureDate': '2024-05-24', 'DeparturePlace': 'Sydney', 'ArrivalDate': '2024-05-24', 'ArrivalPlace': 'Hong Kong', 'SeatType': 'Economy Class', 'SeatNumber': '16C' },
        { 'BookingNo': 'BK025', 'FlightNo': 'FN025', 'DepartureDate': '2024-05-25', 'DeparturePlace': 'Hong Kong', 'ArrivalDate': '2024-05-25', 'ArrivalPlace': 'Singapore', 'SeatType': 'First Class', 'SeatNumber': '1A' },
        { 'BookingNo': 'BK026', 'FlightNo': 'FN026', 'DepartureDate': '2024-05-26', 'DeparturePlace': 'Singapore', 'ArrivalDate': '2024-05-26', 'ArrivalPlace': 'Bangkok', 'SeatType': 'Business Class', 'SeatNumber': '3B' },
        { 'BookingNo': 'BK027', 'FlightNo': 'FN027', 'DepartureDate': '2024-05-27', 'DeparturePlace': 'Bangkok', 'ArrivalDate': '2024-05-27', 'ArrivalPlace': 'Seoul', 'SeatType': 'Economy Class', 'SeatNumber': '15C' },
        { 'BookingNo': 'BK028', 'FlightNo': 'FN028', 'DepartureDate': '2024-05-28', 'DeparturePlace': 'Seoul', 'ArrivalDate': '2024-05-28', 'ArrivalPlace': 'Beijing', 'SeatType': 'First Class', 'SeatNumber': '2A' },
        { 'BookingNo': 'BK029', 'FlightNo': 'FN029', 'DepartureDate': '2024-05-29', 'DeparturePlace': 'Beijing', 'ArrivalDate': '2024-05-29', 'ArrivalPlace': 'Shanghai', 'SeatType': 'Business Class', 'SeatNumber': '4B' },
        { 'BookingNo': 'BK030', 'FlightNo': 'FN030', 'DepartureDate': '2024-05-30', 'DeparturePlace': 'Shanghai', 'ArrivalDate': '2024-05-30', 'ArrivalPlace': 'Hong Kong', 'SeatType': 'Economy Class', 'SeatNumber': '16C' }
    
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
    function deleteRow(index) {
        myArray.splice(index, 1);
    }
    function buildTable() {
        var data = pagination(state.querySet, state.page, state.rows);
        var tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';  

        data.querySet.forEach(function(item) {
            var row = `<tr>
                <td>${item.BookingNo}</td>
                <td>${item.FlightNo}</td>
                <td>${item.DepartureDate}</td>
                <td>${item.DeparturePlace}</td>
                <td>${item.ArrivalDate}</td>
                <td>${item.ArrivalPlace}</td>
                <td>${item.SeatType}</td>
                <td>${item.SeatNumber}</td>
                <td><button class="delete-row">Delete</button></td>
            </tr>`;
            tableBody.innerHTML += row;
        });

        pageButtons(data.pages);

        document.querySelectorAll('.delete-row').forEach((button, index) => {
            button.addEventListener('click', function() {
                var row = this.closest('tr');
                var rowIndex = Array.from(row.parentNode.children).indexOf(row);
                deleteRow(rowIndex); // Pass rowIndex to the deleteRow function
                row.remove();
            });
        }); 
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
            return (!filters.BookingNo || item.BookingNo.toLowerCase().includes(filters.BookingNo.toLowerCase())) &&
                (!filters.FlightNo || item.FlightNo.toLowerCase().includes(filters.FlightNo.toLowerCase())) &&
                (!filters.DepartureDate|| item.DepartureDate.toLowerCase().includes(filters.DepartureDate.toLowerCase())) &&
                (!filters.DeparturePlace || item.DeparturePlace.toString() === filters.DeparturePlace) &&
                (!filters.ArrivalDate || item.ArrivalDate.toLowerCase() === filters.ArrivalDate.toLowerCase()) &&
                (!filters.ArrivalPlace || item.ArrivalPlace.toLowerCase().includes(filters.ArrivalPlace.toLowerCase())) &&
                (!filters.SeatType || item.SeatType.toLowerCase().includes(filters.SeatType.toLowerCase())) &&
                (!filters.SeatNumber || item.SeatNumber.toLowerCase().includes(filters.SeatNumber.toLowerCase()));
        });
    }


    function applyFilters() {
        var filters = {
            BookingNo: document.getElementById('bookingNo-search').value,
            FlightNo: document.getElementById('flightNo-search').value,
            DepartureDate: document.getElementById('departureDate-search').value,
            DeparturePlace: document.getElementById('departurePlace-search').value,
            ArrivalDate: document.getElementById('arrivalDate-search').value,
            ArrivalPlace: document.getElementById('arrivalPlace-search').value,
            SeatType: document.getElementById('seatType-search').value,
            SeatNumber: document.getElementById('seatNumber-search').value,
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
