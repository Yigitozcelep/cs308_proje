document.addEventListener('DOMContentLoaded', function () {
    var myArray = [
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563', 'Email': 'mryan@gmail.com', 'SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573',  'Email': 'j.adams@gmail.com', 'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563',  'Email': 'mryan@gmail.com',  'SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573', 'Email': 'j.adams@gmail.com', 'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563',  'Email': 'mryan@gmail.com', 'SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573', 'Email': 'j.adams@gmail.com',  'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563',  'Email': 'mryan@gmail.com', 'SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573', 'Email': 'j.adams@gmail.com',   'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563', 'Email': 'mryan@gmail.com',  'SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573', 'Email': 'j.adams@gmail.com',  'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563', 'Email': 'mryan@gmail.com', 'SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573', 'Email': 'j.adams@gmail.com',  'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563', 'Email': 'mryan@gmail.com','SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573',  'Email': 'j.adams@gmail.com',   'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563',  'Email': 'mryan@gmail.com', 'SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573','Email': 'j.adams@gmail.com',   'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563',  'Email': 'mryan@gmail.com', 'SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573', 'Email': 'j.adams@gmail.com',  'SeatNum': 'BA' },
        { 'Name': 'Michael', 'Surname': 'Ryan', 'CrewID': 'CI2894563',  'Email': 'mryan@gmail.com','SeatNum': 'AA' },
        { 'Name': 'Julia', 'Surname': 'Adams', 'CrewID': 'CI2894573','Email': 'j.adams@gmail.com',  'SeatNum': 'BA' }
    ];

    var state = {

        'querySet': myArray,

        'page': 1,
        'rows':5,

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
            return (!filters.name || item.Name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (!filters.surname || item.Surname.toLowerCase().includes(filters.surname.toLowerCase())) &&
                (!filters.id || item.CrewID.toLowerCase().includes(filters.id.toLowerCase())) &&
            
                (!filters.seatNum || item.SeatNum.toLowerCase().includes(filters.seatNum.toLowerCase()));
        });
    }


    function applyFilters() {
        var filters = {
            name: document.getElementById('name-search').value,
            surname: document.getElementById('surname-search').value,
            id: document.getElementById('id-search').value,
            seatNum: document.getElementById('seat-search').value
        };
        var filteredData = searchTable(filters);
        state.querySet = filteredData;  
        state.page = 1;  
        buildTable();  
    }

    document.getElementById('apply').addEventListener('click', applyFilters);

    

});
