import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";
import { getText } from "../dictionary.js";
function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);
    
    const air308FlightsPassenger = document.getElementById('air308FlightsPassenger');
    const brandName = document.getElementById('brandName');
    const apply = document.getElementById('apply');
    const helpButton = document.getElementById('helpButton');
    const flightListPassenger = document.getElementById('flightListPassenger');
    const flightListPassengerInfo = document.getElementById('flightListPassengerInfo');
    const filteringFlights = document.getElementById('filteringFlights');
    const filteringFlightsInfo = document.getElementById('filteringFlightsInfo');
    const tableDisplay = document.getElementById('tableDisplay');
    const passengerTableDisplayInfo = document.getElementById('passengerTableDisplayInfo');
    const bookingFlights = document.getElementById('bookingFlights');
    const bookingFlightsInfo = document.getElementById('bookingFlightsInfo');
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
    const vehicleType_search = document.getElementById('vehicleType-search');
    const planeId = document.getElementById('planeId'); 
    const flightNo =  document.getElementById('flightNo');
    const departureDate = document.getElementById('departureDate');
    const departurePlace = document.getElementById('departurePlace');
    const departureAirport = document.getElementById('departureAirport');
    const arrivalDate =  document.getElementById('arrivalDate');
    const arrivalPlace =  document.getElementById('arrivalPlace');
    const arrivalAirport =  document.getElementById('arrivalAirport');
    const vehicleType = document.getElementById('vehicleType');
    const bookButtons = document.getElementsByClassName('book-row');
    
    
    brandName.innerHTML = getText("brandName");
    air308FlightsPassenger.innerHTML = getText("air308FlightsPassenger");
    apply.innerHTML = getText("apply");
    for(let item of bookButtons)
        item.innerHTML = getText("bookButton");

    helpButton.innerHTML = getText("helpButton");
    flightListPassenger.innerHTML = getText("flightList");
    flightListPassengerInfo.innerHTML = getText("flightListPassengerInfo");
    filteringFlights.innerHTML = getText("filteringFlights");
    filteringFlightsInfo.innerHTML = getText("filteringFlightsInfo");
    tableDisplay.innerHTML = getText("tableDisplay");
    passengerTableDisplayInfo.innerHTML = getText("passengerTableDisplayInfo");
    bookingFlights.innerHTML = getText("bookingFlights");
    bookingFlightsInfo.innerHTML = getText("bookingFlightsInfo");
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

document.addEventListener('DOMContentLoaded', async function () {

        const urlParams = new URLSearchParams(window.location.search);
        const searchType = urlParams.get('searchType');
        let flights;
        if (searchType === 'route') 
        {
            const departure = urlParams.get('departure');
            const arrival = urlParams.get('arrival');
            const startDateURL = urlParams.get('startDate');
            const startDate = new Date(startDateURL);
            console.log(startDate);
            const endDateURL = urlParams.get('endDate');
            const endDate = new Date(endDateURL);
            flights = await FlightsCommunication.getFlightsDataWithoutAirport(departure, arrival, startDate, endDate);    
        } 
        else if (searchType === 'airport') 
        {
            const airport = urlParams.get('airport');
            const startDateURL = urlParams.get('startDate2');
            const startDate = new Date(startDateURL);
            const endDateURL = urlParams.get('endDate2');
            const endDate = new Date(endDateURL);
            flights = await FlightsCommunication.getFlightsDataFromWithoutFromGoto(startDate, endDate, airport);  
        } 
        else if (searchType === 'flightNo') 
        {
            const flightNo = urlParams.get('flightNo');
            flights = await FlightsCommunication.getFlightByFlightId(flightNo);
            flights = [flights];              
        }        
        try {
            var state = {

                'querySet': flights,
        
                'page': 1,
                'rows':10,
        
            }
            console.log(state.querySet);
           
        
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
                        <td>${item.getDedepartureAirport().airportName}</td>
                        <td>${formattedDateArrival}</td>
                        <td>${item.getGoto()}</td>
                        <td>${item.getLandingAirport().airportName }</td>
                        <td>${item.getPlaneType()}</td>
                        <td><button class="book-row" data-flight-id="${item.getFlightId()}">Book</button></td>
                    </tr>`;
                    tableBody.innerHTML += row;
                });
        
                pageButtons(data.pages);

                 // Attach event listener to "Book" buttons
                 document.querySelectorAll('.book-row').forEach(button => {
                    button.addEventListener('click', function() {
                        const flightId = this.dataset.flightId;
                        localStorage.setItem("flightId", flightId);
                        window.location.href = `../plaineView/plaineView.html`;
                    });
                });

                
            }
               
        
            function compareValues(key, order = 'asc') {
                return function innerSort(a, b) {
                    let varA;
                    let varB;
                    if(key == "FlightNo"){ 
                        varA = a.getFlightId().substring(2);              
                        varB = b.getFlightId().substring(2);
                        
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
                        varA = a.getDedepartureAirport().airportName;
                        varB = b.getDedepartureAirport().airportName;
                    }
                    else if(key == "ArrivalDate"){
                        const date = new Date(a.getLandingTime());              
                        varA = date;
                        const date2 = new Date(b.getLandingTime());                    
                        varB = date2;

                     }
                    else if(key == "ArrivalPlace"){ 
                        varA = a.getGoto();
                        varB = b.getGoto();
                    }
                    else if(key == "ArrivalAirport"){ 
                        varA = a.getLandingAirport().airportName;
                        varB = b.getLandingAirport().airportName;
                    }
                    else if(key == "VehicleType"){ 
                        varA = a.getPlaneType();
                        varB = b.getPlaneType(); 
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
                    let formattedDateArrival = date.toString().replace(/\sGMT\+\d{4}\s.*/, '');
                    formattedDateArrival = formattedDateArrival.slice(0, -3);

                    return (!filters.PlaneId || item.getPlaneId().toString().includes(filters.PlaneId)) &&
                        (!filters.FlightNo || item.getFlightId().toLowerCase().includes(filters.FlightNo.toLowerCase())) &&
                        (!filters.DepartureDate || formattedDateDeparture.toLowerCase().includes(filters.DepartureDate.toLowerCase())) &&
                        (!filters.DeparturePlace || item.getFrom().toString() === filters.DeparturePlace) &&
                        (!filters.DepartureAirport || item.getDedepartureAirport().airportName.toString() === filters.DepartureAirport) && 
                        (!filters.ArrivalDate || formattedDateArrival.toLowerCase() === filters.ArrivalDate.toLowerCase()) &&
                        (!filters.ArrivalPlace || item.getGoto().toLowerCase().includes(filters.ArrivalPlace.toLowerCase())) &&
                        (!filters.ArrivalAirport || item.getLandingAirport().airportName.toString() === filters.ArrivalAirport) && 
                        (!filters.VehicleType || item.getPlaneType() .toLowerCase().includes(filters.VehicleType.toLowerCase()));
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
                    VehicleType: document.getElementById('vehicleType-search').value,
        
                };
                var filteredData = searchTable(filters);
                state.querySet = filteredData;  
                state.page = 1;  
                buildTable();  
            }
        
            document.getElementById('apply').addEventListener('click', applyFilters);
            
            // Use the fetched flight data as needed

        } catch (error) {
            console.error('Error fetching flights data:', error);
        }
    

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
