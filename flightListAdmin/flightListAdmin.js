import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";
import { getText } from "../dictionary.js";

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);
    
    const air308FlightsAdmin = document.getElementById('air308FlightsAdmin');
    const brandName = document.getElementById('brandName');
    const apply = document.getElementById('apply');
    const chooseAction = document.getElementById('chooseAction');
    const extendedButton = document.getElementById('button1');
    const tabularButton = document.getElementById('button2');
    const planeButton  = document.getElementById('button3');
    const updateFlight = document.getElementById('button4');
    const helpButton = document.getElementById('helpButton');
    const updateFlightHeader = document.getElementById('0');
    const updateFlightflightId = document.getElementById('1');
    const updateFlightplaneId = document.getElementById('2');
    const updateFlightdepartureDate = document.getElementById('3');
    const updateFlighdepartureTime = document.getElementById('4');
    const updateFlightdeparturePlace = document.getElementById('5');
    const updateFlightdepartureAirport = document.getElementById('6');
    const updateFlightarrivalDate = document.getElementById('7');
    const updateFlightarrivalTime = document.getElementById('8');
    const updateFlightarrivalPlace = document.getElementById('9');
    const updateFlightarrivalAirport = document.getElementById('10');
    const updateFlightvehiclyeType = document.getElementById('11');
    const updateFlightsubmit = document.getElementById('12');
    const updateSharedAirlineCompany = document.getElementById('13');
    const updateFoodMenu = document.getElementById('14');
    const sharedAirlineCompany = document.getElementById('sharedAirlineCompany');

    const flightList = document.getElementById('flightList');
    const flightListAdmin = document.getElementById('flightListAdmin');
    const filteringFlights = document.getElementById('filteringFlights');
    const filteringFlightsInfo = document.getElementById('filteringFlightsInfo');
    const tableDisplay = document.getElementById('tableDisplay');
    const adminTableDisplayInfo = document.getElementById('adminTableDisplayInfo');
    const flightManagement = document.getElementById('flightManagement');
    const flightManagementInfo = document.getElementById('flightManagementInfo');
    const flightSelection = document.getElementById('flightSelection');
    const flightSelectionInfo = document.getElementById('flightSelectionInfo');
    const flightDeletion = document.getElementById('flightDeletion');
    const flightDeletionInfo= document.getElementById('flightDeletionInfo');
    const signOut = document.getElementById('signOut');
    const filterBy = document.getElementById('filterBy');
    const planeId_search = document.getElementById('planeId-search');
    const flightNo_search = document.getElementById('flightNo-search');
    const departureDate_search = document.getElementById('departureDate-search');
    const departurePlace_search = document.getElementById('departurePlace-search');
    const departureAirport_search = document.getElementById('departureAirport-search');
    const arrivalDate_search = document.getElementById('arrivalDate-search');
    const arrivalPlace_search = document.getElementById('arrivalPlace-search');
    const arrivalAirport_search = document.getElementById('arrivalAirport-search');
    const sharedAirlineCompany_search = document.getElementById('sharedAirlineCompany-search');
    const vehicleType_search = document.getElementById('vehicleType-search');
    const foodMenu_search = document.getElementById('foodMenu-search');
    const foodMenu = document.getElementById('foodMenu');
    const planeId = document.getElementById('planeId'); 
    const flightNo =  document.getElementById('flightNo');
    const departureDate = document.getElementById('departureDate');
    const departurePlace = document.getElementById('departurePlace');
    const departureAirport = document.getElementById('departureAirport');
    const arrivalDate =  document.getElementById('arrivalDate');
    const arrivalPlace =  document.getElementById('arrivalPlace');
    const arrivalAirport =  document.getElementById('arrivalAirport');
    const vehicleType = document.getElementById('vehicleType');
    const addFlight = document.getElementById('addFlight');
    const selectButtons = document.getElementsByClassName('select-row');
    const deleteButtons = document.getElementsByClassName('delete-row');
    
    
    updateFlightHeader.innerHTML = getText("updateFlight");
    updateFlightarrivalAirport.innerHTML = getText("arrivalAirport");
    updateFlighdepartureTime.innerHTML = getText("departureTime");
    updateFlightarrivalTime.innerHTML = getText("arrivalTime");
    updateFlightarrivalDate.innerHTML = getText("arrivalDate");
    updateFlightarrivalPlace.innerHTML = getText("arrivalPlace");
    updateFlightdepartureAirport.innerHTML = getText("departureAirport");
    updateFlightdepartureDate.innerHTML = getText("departureDate");
    updateFlightdeparturePlace.innerHTML = getText("departurePlace");
    updateFlightflightId.innerHTML = getText("flightNo");
    updateSharedAirlineCompany.innerHTML = getText("sharedAirlineCompany");
    updateFoodMenu.innerHTML = getText("foodMenu");
    updateFlightplaneId.innerHTML = getText("planeId");
    updateFlightsubmit.innerHTML = getText("submit");
    updateFlightvehiclyeType.innerHTML = getText("airplaneType");
    updateFlight.innerHTML = getText("updateFlight");
    foodMenu.innerHTML = getText("foodMenu");
    chooseAction.innerHTML = getText("chooseAction:");
    extendedButton.innerHTML = getText("extendedView");
    tabularButton.innerHTML = getText("tabularView");
    planeButton.innerHTML = getText("planeView");
    addFlight.innerHTML = getText("addFlight");
    updateFlight.innerHTML = getText("updateFlight");
    brandName.innerHTML = getText("brandName");
    air308FlightsAdmin.innerHTML = getText("air308FlightsAdmin");
    apply.innerHTML = getText("apply");
    for(let item of selectButtons)
        item.innerHTML = getText("selectButton");
    for(let item of deleteButtons)
        item.innerHTML = getText("deleteButton");

    helpButton.innerHTML = getText("helpButton");

    flightList.innerHTML = getText("flightList");
    flightListAdmin.innerHTML = getText("flightListPassengerInfo");
    filteringFlights.innerHTML = getText("filteringFlights");
    filteringFlightsInfo.innerHTML = getText("filteringFlightsInfo");
    tableDisplay.innerHTML = getText("tableDisplay");
    adminTableDisplayInfo.innerHTML = getText("adminTableDisplayInfo");
    flightSelection.innerHTML = getText("flightSelection");
    flightSelectionInfo.innerHTML = getText("flightSelectionInfo");
    flightManagement.innerHTML = getText("flightManagement");
    flightManagementInfo.innerHTML = getText("flightManagementInfo");
    flightDeletion.innerHTML = getText("flightDeletion");
    flightDeletionInfo.innerHTML = getText("flightDeletionInfo");
    sharedAirlineCompany.innerHTML = getText("sharedAirlineCompany");
    signOut.innerHTML = getText("signOut");
    filterBy.innerHTML = getText("filterBy");
    planeId.innerHTML = getText("planeId");
    flightNo.innerHTML = getText("flightNo");
    departureDate.innerHTML = getText("departureDate");
    departurePlace.innerHTML = getText("departurePlace");
    departureAirport.innerHTML = getText("departureAirport");
    arrivalDate.innerHTML = getText("arrivalDate");
    arrivalPlace.innerHTML = getText("arrivalPlace");
    arrivalAirport.innerHTML = getText("arrivalAirport");
    vehicleType.innerHTML = getText("airplaneType");
    
    foodMenu_search.setAttribute('placeholder', getText("foodMenu"));
    sharedAirlineCompany_search.setAttribute('placeholder', getText("sharedAirlineCompany"));
    planeId_search.setAttribute('placeholder', getText("planeId"));
    flightNo_search.setAttribute('placeholder', getText("flightNo"));
    departureDate_search.setAttribute('placeholder', getText("departureDate"));
    departurePlace_search.setAttribute('placeholder', getText("departurePlace"));
    departureAirport_search.setAttribute('placeholder', getText("departureAirport"));
    arrivalDate_search.setAttribute('placeholder', getText("arrivalDate"));
    arrivalPlace_search.setAttribute('placeholder', getText("arrivalPlace"));
    arrivalAirport_search.setAttribute('placeholder', getText("arrivalAirport"));
    vehicleType_search.setAttribute('placeholder', getText("airplaneType"));
    
}
// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

function hideUpdatePopup() {
    document.getElementById('updatePopup').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', async function () {    
    
    let flights = await FlightsCommunication.getAllFlights();
    var state = {

        'querySet': flights,

        'page': 1,
        'rows':20,

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
    
    async function buildTable() {
        var data = pagination(state.querySet, state.page, state.rows);
        var tableBody = document.getElementById('table-body');
        tableBody.innerHTML = '';  

        data.querySet.forEach(function(item) {
            const date = new Date(item.getDepartureTime());
            let formattedDateDeparture = date.toString().replace(/\sGMT\+\d{4}\s.*/, '');
            formattedDateDeparture = formattedDateDeparture.slice(0, -3);
            const date2 = new Date(item.getLandingTime());
            let formattedDateArrival = date2.toString().replace(/\sGMT\+\d{4}\s.*/, '');
            formattedDateArrival = formattedDateArrival.slice(0, -3);
            var row = `<tr>
                <td>${item.getFlightId()}</td>    
                <td>${item.getPlaneId()}</td>
                <td>${formattedDateDeparture}</td>
                <td>${item.getFrom()}</td>
                <td>${item.getDedepartureAirport()}</td>
                <td>${formattedDateArrival}</td>
                <td>${item.getGoto()}</td>
                <td>${item.getLandingAirport() }</td>
                <td>${item.getPlaneType()}</td>
                <td>${item.getAirlineCompany()}</td>
                <td>${item.getMenu()}</td>
                <td><button class="select-row" select-flight-id="${item.getFlightId()}">Select</button></td>
                <td><button class="delete-row" delete-flight-id="${item.getFlightId()}">Delete</button></td>
            </tr>`;
            tableBody.innerHTML += row;
        });

        pageButtons(data.pages);
    }
    document.getElementById('table-body').addEventListener('click', async function(event) {
        if (event.target.classList.contains('delete-row')) {
            const flightId = event.target.getAttribute('delete-flight-id');
            const status = await FlightsCommunication.deleteFlight(flightId);
            if(status)
            {
                document.querySelector(`button[delete-flight-id="${flightId}"]`).closest('tr').remove();
            }
            else
            {
                alert("An error occurred while adding the flight. Please try again later.");
            }

            
        } 
        else if (event.target.classList.contains('select-row')) 
        {
            const flightId = event.target.getAttribute('select-flight-id');
            localStorage.setItem("flightIdView", flightId);
            showPopup();
        }
    });
    

    document.getElementById('addFlight').addEventListener('click', function() {
        window.location.href = 'add_flight.html';
    });
    document.getElementById('createNewUser').addEventListener('click', function() {
        window.location.href = '../create_member/create_member.html';
    });
    document.querySelector('.close-popup').addEventListener('click', hidePopup);

    document.getElementById('button1').addEventListener('click', function() {
        window.location.href = '../extended_view/extended_view.html'; 
    });

    document.getElementById('button2').addEventListener('click', function() {
        window.location.href = '../tabular_view/tabular_view.html'; 
    });

    document.getElementById('button3').addEventListener('click', function() {
        window.location.href = '../plaineView/plaineView.html'; 
    });
    document.getElementById('button4').addEventListener('click', function() {
        showUpdatePopup();
        const flightIdToUpdate = localStorage.getItem("flightIdView");
        document.getElementById('flightId').value = flightIdToUpdate;

    });
    document.getElementById('updateForm').addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const newPlaneId = document.getElementById('newPlaneId').value;
    
        // Get departure date and time
        const newDepartureDateinp = document.getElementById('newDepartureDate').value;
        const newDepartureTimeinp = document.getElementById('newDepartureTime').value;
        const newDepartureDateTime = new Date(`${newDepartureDateinp}T${newDepartureTimeinp}`);
    
        const newDeparturePlace = document.getElementById('newDeparturePlace').value;
        const newDepartureAirport = document.getElementById('newDepartureAirport').value;
    
        // Get arrival date and time
        const newArrivalDateinp = document.getElementById('newArrivalDate').value;
        const newArrivalTimeinp = document.getElementById('newArrivalTime').value;
        const newArrivalDateTime = new Date(`${newArrivalDateinp}T${newArrivalTimeinp}`);
    
        const newArrivalPlace = document.getElementById('newArrivalPlace').value;
        const newArrivalAirport = document.getElementById('newArrivalAirport').value;
        const newVehicleType = document.getElementById('newVehicleType').value;
        const flightIdToUpdate = localStorage.getItem("flightIdView");
        const newSharedAirlineCompany = document.getElementById('newSharedAirlineCompany').value;
        const newFoodMenu = document.getElementById('newFoodMenu').value;
    
        try {
            let flightData = await FlightsCommunication.getFlightByFlightId(flightIdToUpdate);
            flightData.setFrom(newDeparturePlace);
            flightData.setGoto(newArrivalPlace);
            flightData.setDedepartureAirport(newDepartureAirport);
            flightData.setLandingAirport(newArrivalAirport);
            flightData.setDepartureTime(newDepartureDateTime);
            flightData.setPlaneType(newVehicleType);
            flightData.setLandingTime(newArrivalDateTime);
            flightData.setPlaneId(newPlaneId);
            flightData.setAirlineCompany(newSharedAirlineCompany);
            flightData.setMenu(newFoodMenu);

            await FlightsCommunication.updateFlight(flightData);
            console.log(flightData);
    
            console.log("Flight data updated successfully!");
    
            hideUpdatePopup();
        } catch (error) {
            console.error("Error updating flight data:", error);
        }
        hideUpdatePopup();
        buildTable();
    });


    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            let varA;
            let varB;
            if(key == "FlightNo"){ 
                varA = parseInt(a.getFlightId().substring(2), 10);
                varB = parseInt(b.getFlightId().substring(2), 10);
                
             }
            else if(key == "PlaneId"){ 
                varA = a.getPlaneId();
                varB = b.getPlaneId();
            }
            else if(key == "DepartureDate"){ 
                const date = new Date(a.getDepartureTime());             
                varA = date;
                const date2 = new Date(b.getDepartureTime());
                varB = date2;
            }
            else if(key == "DeparturePlace"){ 
                varA = a.getFrom();
                varB = b.getFrom();
            }
            else if(key == "DepartureAirport"){ 
                varA = a.getDedepartureAirport();
                varB = b.getDedepartureAirport();
            }
            else if(key == "ArrivalDate"){
                const date = new Date(a.getLandingTime());              
                varA = date;
                const date2 = new Date(b.getLandingTime());                    
                varB = date2;             }
            else if(key == "ArrivalPlace"){ 
                varA = a.getGoto();
                varB = b.getGoto();
            }
            else if(key == "ArrivalAirport"){ 
                varA = a.getLandingAirport();
                varB = b.getLandingAirport();
            }
            else if(key == "VehicleType"){ 
                varA = a.getPlaneType();
                varB = b.getPlaneType(); 
            }
            else if(key == "SharedAirlineCompany"){ 
                varA = a.getAirlineCompany();
                varB = b.getAirlineCompany(); 
            }
            else if(key == "FoodMenu"){ 
                varA = a.getMenu();
                varB = b.getMenu(); 
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


    function searchTable(filters) {
        return flights.filter(item => {
            const date = new Date(item.getDepartureTime());
                    let formattedDateDeparture = date.toString().replace(/\sGMT\+\d{4}\s.*/, '');
                    formattedDateDeparture = formattedDateDeparture.slice(0, -3);

                    const date2 = new Date(item.getLandingTime());
                    let formattedDateArrival = date2.toString().replace(/\sGMT\+\d{4}\s.*/, '');
                    formattedDateArrival = formattedDateArrival.slice(0, -3);
            return (!filters.PlaneId || item.getPlaneId().toString().includes(filters.PlaneId)) &&
            (!filters.FlightNo || item.getFlightId().toLowerCase().includes(filters.FlightNo.toLowerCase())) &&
            (!filters.DepartureDate || formattedDateDeparture.toLowerCase().includes(filters.DepartureDate.toLowerCase())) &&
            (!filters.DeparturePlace || item.getFrom().toString() === filters.DeparturePlace) &&
            (!filters.DepartureAirport || item.getDedepartureAirport().toString() === filters.DepartureAirport) && 
            (!filters.ArrivalDate || formattedDateArrival.toLowerCase() === filters.ArrivalDate.toLowerCase()) &&
            (!filters.ArrivalPlace || item.getGoto().toLowerCase().includes(filters.ArrivalPlace.toLowerCase())) &&
            (!filters.FoodMenu || item.getMenu().toLowerCase().includes(filters.FoodMenu.toLowerCase())) &&
            (!filters.SharedAirlineCompany || item.getAirlineCompany().toLowerCase().includes(filters.SharedAirlineCompany.toLowerCase())) &&
            (!filters.ArrivalAirport || item.getLandingAirport().toString() === filters.ArrivalAirport) && 
            (!filters.VehicleType || item.getPlaneType() .toLowerCase().includes(filters.VehicleType.toLowerCase()));
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
            SharedAirlineCompany: document.getElementById('sharedAirlineCompany-search').value,
            FoodMenu: document.getElementById('foodMenu-search').value,


        };
        var filteredData = searchTable(filters);
        state.querySet = filteredData;  
        state.page = 1;  
        buildTable();  
    }

    document.getElementById('apply').addEventListener('click', applyFilters);
    
    

});

function showPopup() {
    const popup = document.getElementById('selectPopup');
    popup.style.display = 'flex';
}

function hidePopup() {
    document.getElementById('selectPopup').style.display = 'none';
}
function showUpdatePopup() {
    document.getElementById('updatePopup').style.display = 'flex';
}
document.addEventListener('DOMContentLoaded', (event) => {
    var helpButton = document.getElementById('helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closeSpan = document.getElementsByClassName('close')[0];
    var closePopUp = document.getElementsByClassName('close-popup')[1];

    // When the help button is clicked, show the pop-up
    helpButton.onclick = function() {
        helpPopup.style.display = "flex";
    }

    // When the close button (x) inside the pop-up is clicked, hide the pop-up
    closeSpan.onclick = function() {
        helpPopup.style.display = "none";
    }
    closePopUp.onclick = function()
    {
        hideUpdatePopup();
    }

});
document.addEventListener('DOMContentLoaded', function() {
    const closePopupButtons = document.querySelectorAll('.close-popup');
    closePopupButtons.forEach(button => {
        button.addEventListener('click', hideUpdatePopup);
    });
});

