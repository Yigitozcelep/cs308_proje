import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { getText } from "../dictionary.js";
import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);
    
    const air308FlightsCrew = document.getElementById('air308FlightsCrew');
    const brandName = document.getElementById('brandName');
    const apply = document.getElementById('apply');
    const confirmText = document.getElementById('confirmationText');
    const confirmCancel = document.getElementById('confirmCancel');
    const cancelAction = document.getElementById('cancelAction');
    const helpButton = document.getElementById('helpButton');
    const flightList = document.getElementById('flightList');
    const flightListCrewInfo = document.getElementById('flightListCrewInfo');
    const filteringFlights = document.getElementById('filteringFlights');
    const filteringFlightsInfo = document.getElementById('filteringFlightsInfo');
    const tableDisplay = document.getElementById('tableDisplay');
    const crewTableDisplayInfo = document.getElementById('crewTableDisplayInfo');
    const selectingFlights = document.getElementById('selectingFlights');
    const selectingflightsInfo = document.getElementById('selectingflightsInfo');
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
    const foodMenu_search = document.getElementById('foodMenu-search');
    const foodMenu = document.getElementById('foodMenu');
    const seatType_search = document.getElementById('seatType-search');
    const seatNumber_search = document.getElementById('seatNumber-search');
    const sharedAirlineCompany_search = document.getElementById('sharedAirlineCompany-search');

    const planeId = document.getElementById('planeId'); 
    const flightNo =  document.getElementById('flightNo');
    const departureDate = document.getElementById('departureDate');
    const departurePlace = document.getElementById('departurePlace');
    const departureAirport = document.getElementById('departureAirport');
    const arrivalDate =  document.getElementById('arrivalDate');
    const arrivalPlace =  document.getElementById('arrivalPlace');
    const arrivalAirport =  document.getElementById('arrivalAirport');
    const seatType = document.getElementById('seatType');
    const seatNumber = document.getElementById('seatNumber');
    const selectButtons = document.getElementsByClassName('select-row');
    const refuseButtons = document.getElementsByClassName('refuse-row');
    const sharedAirlineCompany = document.getElementById('sharedAirlineCompany');
    
    foodMenu.innerHTML = getText("foodMenu");
    brandName.innerHTML = getText("brandName");
    confirmText.innerHTML = getText("confirmFlightDelete");
    confirmCancel.innerHTML = getText("confirm");
    cancelAction.innerHTML = getText("cancelButton");
    air308FlightsCrew.innerHTML = getText("air308FlightsCrew");
    apply.innerHTML = getText("apply");
    for(let item of selectButtons)
        item.innerHTML = getText("selectButton");
    for(let item of refuseButtons)
        item.innerHTML = getText("refuseButton");
    helpButton.innerHTML = getText("helpButton");
    flightList.innerHTML = getText("flightList");
    flightListCrewInfo.innerHTML = getText("flightListCrewInfo");
    filteringFlights.innerHTML = getText("filteringFlights");
    filteringFlightsInfo.innerHTML = getText("filteringFlightsInfo");
    tableDisplay.innerHTML = getText("tableDisplay");
    crewTableDisplayInfo.innerHTML = getText("crewTableDisplayInfo");
    selectingFlights.innerHTML = getText("selectingFlights");
    selectingflightsInfo.innerHTML = getText("selectingFlightsInfo");
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
    seatType.innerHTML = getText("seatType");
    sharedAirlineCompany.innerHTML = getText("sharedAirlineCompany");

    seatNumber.innerHTML = getText("seatNumber");
    planeId_search.setAttribute('placeholder', getText("planeId"));
    sharedAirlineCompany_search.setAttribute('placeholder', getText("sharedAirlineCompany"));

    foodMenu_search.setAttribute('placeholder', getText("foodMenu"));
    flightNo_search.setAttribute('placeholder', getText("flightNo"));
    departureDate_search.setAttribute('placeholder', getText("departureDate"));
    departurePlace_search.setAttribute('placeholder', getText("departurePlace"));
    departureAirport_search.setAttribute('placeholder', getText("departureAirport"));
    arrivalDate_search.setAttribute('placeholder', getText("arrivalDate"));
    arrivalPlace_search.setAttribute('placeholder', getText("arrivalPlace"));
    arrivalAirport_search.setAttribute('placeholder', getText("arrivalAirport"));
    seatType_search.setAttribute('placeholder', getText("seatType"));
    seatNumber_search.setAttribute('placeholder', getText("seatNumber"));
}
// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

document.addEventListener('DOMContentLoaded', async function () {
    
    const userId = JSON.parse(localStorage.getItem("userId"))
    let user = await UserCommunication.getUserById(userId);
    let myFlights = user.flights;
    

    var state = {

        'querySet': myFlights,

        'page': 1,
        'rows':10,

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
            const date = new Date(item.flightData.getDepartureTime());
            let formattedDateDeparture = date.toString().replace(/\sGMT\+\d{4}\s.*/, '');
            formattedDateDeparture = formattedDateDeparture.slice(0, -3);
            const date2 = new Date(item.flightData.getLandingTime());
            let formattedDateArrival = date2.toString().replace(/\sGMT\+\d{4}\s.*/, '');
            formattedDateArrival = formattedDateArrival.slice(0, -3);  
            var row = `<tr>
                
                <td>${item.flightData.getFlightId()}</td>
                <td>${item.flightData.getPlaneId()}</td> 
                <td>${formattedDateDeparture}</td>
                <td>${item.flightData.getFrom()}</td>
                <td>${item.flightData.getDedepartureAirport()}</td>
                <td>${formattedDateArrival}</td>
                <td>${item.flightData.getGoto()}</td>
                <td>${item.flightData.getLandingAirport() }</td>
                <td>${item.userSeat.getSeatType()}</td>
                <td>${item.userSeat.getSeatPosition()}</td>
                <td>${item.flightData.getAirlineCompany()}</td>
                <td>${item.flightData.getMenu()}</td>

                <td><button class="select-row" data-flight-id="${item.flightData.getFlightId()}">Select</button></td>
                <td><button class="refuse-row" data-flight-id="${item.flightData.getFlightId()}">Refuse</button></td>
            </tr>`;
            tableBody.innerHTML += row;
        });

        pageButtons(data.pages);

      
        document.querySelectorAll('.select-row').forEach(button => {
          button.addEventListener('click', function() {
              const flightId = this.dataset.flightId;
              localStorage.setItem("flightId", flightId);
              window.location.href = `../tabular_view/tabular_view.html`;

          });
      });
      document.querySelectorAll('.refuse-row').forEach(button => {
        button.addEventListener('click', async function() {
            const purchaseId = this.dataset.flightId;
            showModal(purchaseId);
        });
    });
      


        
}
function showModal(flightId) {
    const modal = document.getElementById('confirmationModal');
    const confirmButton = document.getElementById('confirmCancel');
    const cancelButton = document.getElementById('cancelAction');
    const closeSpan = document.querySelector('#confirmationModal .close');

    modal.style.display = 'block';

    confirmButton.onclick = async function() {
        const userData = await UserCommunication.getUserById(localStorage.getItem("userId"));
        const flightData = await FlightsCommunication.getFlightByFlightId(flightId);
    
        await UserCommunication.refuseFlight(userData, flightData);
        document.querySelector(`button[data-flight-id="${flightId}"]`).closest('tr').remove();
        modal.style.display = 'none';
    }

    cancelButton.onclick = function() {
        modal.style.display = 'none';
    }

    closeSpan.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}


    function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            let varA;
            let varB;
            console.log(key)
            if(key == "FlightNo"){ 
                varA = parseInt(a.getFlightId().substring(2), 10);
                varB = parseInt(b.getFlightId().substring(2), 10);
                
             }
            else if(key == "PlaneId"){ 
                varA = a.flightData.getPlaneId();
                varB = b.flightData.getPlaneId();
            }
            else if(key == "DepartureDate"){ 
                const date = new Date(a.flightData.getDepartureTime());             
                varA = date;
                const date2 = new Date(b.flightData.getDepartureTime());
                varB = date2;
            }
            else if(key == "DeparturePlace"){ 
                varA = a.flightData.getFrom();
                varB = b.flightData.getFrom();
            }
            else if(key == "DepartureAirport"){ 
                varA = a.flightData.getDedepartureAirport();
                varB = b.flightData.getDedepartureAirport();
            }
            else if(key == "ArrivalDate"){
                const date = new Date(a.flightData.getLandingTime());              
                varA = date;
                const date2 = new Date(b.flightData.getLandingTime());                    
                varB = date2;

             }
            else if(key == "ArrivalPlace"){ 
                varA = a.flightData.getGoto();
                varB = b.flightData.getGoto();
            }
            else if(key == "ArrivalAirport"){ 
                varA = a.flightData.getLandingAirport();
                varB = b.flightData.getLandingAirport();
            }
            else if(key == "SeatType"){ 
                varA = a.userSeat.getSeatType();
                varB = b.userSeat.getSeatType();  
            }
            else if(key == "SeatNumber"){ 
                varA = a.userSeat.getSeatPosition();
                varB = b.userSeat.getSeatPosition(); 
            }
            
            else if(key == "SharedAirlineCompany"){ 
                varA = a.flightData.getAirlineCompany();
                varB = b.flightData.getAirlineCompany(); 
            }
            else if(key == "FoodMenu"){ 
                varA = a.flightData.getMenu();
                varB = b.flightData.getMenu(); 
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
        return myFlights.filter(item => {
            const date = new Date(item.flightData.getDepartureTime());
            let formattedDateDeparture = date.toString().replace(/\sGMT\+\d{4}\s.*/, '');
            formattedDateDeparture = formattedDateDeparture.slice(0, -3);
            const date2 = new Date(item.flightData.getLandingTime());
            let formattedDateArrival = date2.toString().replace(/\sGMT\+\d{4}\s.*/, '');
            formattedDateArrival = formattedDateArrival.slice(0, -3);  

            return (!filters.PlaneId || item.flightData.getPlaneId().toString().includes(filters.PlaneId)) &&
                (!filters.FlightNo || item.flightData.getFlightId().toLowerCase().includes(filters.FlightNo.toLowerCase())) &&
                (!filters.DepartureDate|| formattedDateDeparture.toLowerCase().includes(filters.DepartureDate.toLowerCase())) &&
                (!filters.DeparturePlace || item.flightData.getFrom().toString() === filters.DeparturePlace) &&
                (!filters.DepartureAirport || item.flightData.getDedepartureAirport().toString() === filters.DepartureAirport) && 
                (!filters.ArrivalDate || formattedDateArrival.toLowerCase() === filters.ArrivalDate.toLowerCase()) &&
                (!filters.ArrivalPlace || item.flightData.getGoto().toLowerCase().includes(filters.ArrivalPlace.toLowerCase())) &&
                (!filters.FoodMenu || item.flightData.getMenu().toLowerCase().includes(filters.FoodMenu.toLowerCase())) &&
                (!filters.SharedAirlineCompany || item.flightData.getAirlineCompany().toLowerCase().includes(filters.SharedAirlineCompany.toLowerCase())) &&
                (!filters.ArrivalAirport || item.flightData.getLandingAirport().toString() === filters.ArrivalAirport) && 
                (!filters.SeatType || item.userSeat.getSeatType().toLowerCase().includes(filters.SeatType.toLowerCase())) &&
                (!filters.SeatNumber || item.userSeat.getSeatPosition().toLowerCase().includes(filters.SeatNumber.toLowerCase()));
        });
    }


    function applyFilters() {
        var filters = {
            FlightNo: document.getElementById('flightNo-search').value,
            PlaneId: document.getElementById('planeId-search').value, 
            DepartureDate: document.getElementById('departureDate-search').value,
            DeparturePlace: document.getElementById('departurePlace-search').value,
            DepartureAirport: document.getElementById('departureAirport-search').value,
            ArrivalDate: document.getElementById('arrivalDate-search').value,
            ArrivalPlace: document.getElementById('arrivalPlace-search').value,
            ArrivalAirport: document.getElementById('arrivalAirport-search').value,
            SeatType: document.getElementById('seatType-search').value,
            SeatNumber: document.getElementById('seatNumber-search').value,
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
