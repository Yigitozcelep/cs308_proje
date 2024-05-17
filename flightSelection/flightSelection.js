import { getText } from "../dictionary.js";
window.addEventListener('load', function() {

    document.getElementById('searchType').dispatchEvent(new Event('change'));
});

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);
    
    const air308FlightSelection = document.getElementById('air308FlightSelection');
    const brandName = document.getElementById('brandName');
    const flightSelectionTable = document.getElementById('flightSelectionTable');
    const myFlights = document.getElementById('myFlights');
    const helpButton = document.getElementById('helpButton');
    const flightSelectionHelp = document.getElementById('flightSelectionHelp');
    const helpInfo = document.getElementById('helpInfo');
    const searchOptions = document.getElementById('searchOptions');
    const flightSelectionSearchMethod = document.getElementById('flightSelectionSearchMethod');
    const flightNumberInfo = document.getElementById('flightNumberInfo');
    const routeInfo = document.getElementById('routeInfo');
    const airportInfo = document.getElementById('airportInfo');
    const fillingForm = document.getElementById('fillingForm');
    const ensureAccuracy = document.getElementById('ensureAccuracy');
    const doubleCheck = document.getElementById('doubleCheck');
    const viewBookedFlights= document.getElementById('viewBookedFlights');
    const viewBookedFlightsInfo = document.getElementById('viewBookedFlightsInfo');
    const signOut = document.getElementById('signOut');
    const searchBy = document.getElementById('searchBy:');
    const flightNo =  document.getElementById('flightNo');
    const flightNoPHolder = document.getElementById('flightNoPHolder');
    const departurePHolder = document.getElementById('departure');
    const arrivalPHolder = document.getElementById('arrival');
    const intervalStartPHolder = document.getElementById('startDate');
    const intervalEndPHolder = document.getElementById('endDate');
    const airportPHolder = document.getElementById('airport');
    const intervalStartPHolder2 = document.getElementById('startDate2');
    const intervalEndPHolder2 = document.getElementById('endDate2');
    const route = document.getElementById('routeDropDown');
    const airport = document.getElementById('airportDropDown');
    const flightNoText = document.getElementById('flightNo:');
    const departureInput = document.getElementById('departureInput');
    const arrivalInput = document.getElementById('arrivalInput');
    const intervalStartInput = document.getElementById('intervalStartInput');
    const intervalEndInput = document.getElementById('intervalEndInput'); 
    const airportInput = document.getElementById('airportText1');
    const intervalStartInput2 = document.getElementById('intervalStartInput2');
    const intervalEndInput2 = document.getElementById('intervalEndInput2');
    const submit = document.getElementById('submit');
    
    
    
    brandName.innerHTML = getText("brandName");
    air308FlightSelection.innerHTML = getText("air308FlightSelection");
    flightSelectionTable.innerHTML = getText("flightSelectionTable");
    myFlights.innerHTML = getText("myFlights");
    helpButton.innerHTML = getText("helpButton");
    flightSelectionHelp.innerHTML = getText("myFlightsHelp");
    helpInfo.innerHTML = getText("helpInfo");
    flightSelectionSearchMethod.innerHTML = getText("flightSelectionSearchMethod");
    searchOptions.innerHTML = getText("searchOptions");
    flightNumberInfo.innerHTML = getText("flightNumberInfo");
    routeInfo.innerHTML = getText("routeInfo:");
    airportInfo.innerHTML = getText("airportInfo:");
    fillingForm.innerHTML = getText("fillingForm");
    signOut.innerHTML = getText("signOut");
    ensureAccuracy.innerHTML = getText("ensureAccuracy");
    doubleCheck.innerHTML = getText("doubleCheck");
    flightNo.innerHTML = getText("flightNo");
    viewBookedFlights.innerHTML = getText("viewBookedFlights");
    viewBookedFlightsInfo.innerHTML = getText("viewBookedFlightsInfo");
    searchBy.innerHTML = getText("searchBy:");
    route.innerHTML = getText("route");
    airport.innerHTML = getText("airport");
    flightNoText.innerHTML = getText("flightNo:");
    departureInput.innerHTML = getText("departure:");
    arrivalInput.innerHTML = getText("arrival:");
    intervalStartInput.innerHTML = getText("intervalStart:");
    intervalEndInput.innerHTML = getText("intervalEnd:");
    airportInput.innerHTML = getText("airport:");
    intervalStartInput2.innerHTML = getText("intervalStart:");
    intervalEndInput2.innerHTML = getText("intervalEnd:");
    submit.innerHTML = getText("submit");

    flightNoPHolder.setAttribute('placeholder', getText("flightNo"));
    departurePHolder.setAttribute('placeholder', getText("departurePlace"));
    arrivalPHolder.setAttribute('placeholder', getText("arrivalPlace"));
    intervalStartPHolder.setAttribute('placeholder', getText("date"));
    intervalEndPHolder.setAttribute('placeholder', getText("date"));
    intervalStartPHolder2.setAttribute('placeholder', getText("date"));
    intervalEndPHolder2.setAttribute('placeholder', getText("date"));
    airportPHolder.setAttribute('placeholder', getText("airport"));

}
// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange)


// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);



document.getElementById('searchType').addEventListener('change', function() {
    let selectedOption = this.value;
    let inputFields = document.querySelectorAll('.input-field');
    
    inputFields.forEach(function(inputField) {
        if (inputField.id === selectedOption + 'Input') {
            inputField.style.display = 'block';
        } else {
            inputField.style.display = 'none';
        }
    });
});

document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission
    let selectedOption = document.getElementById('searchType').value;
    console.log(userId);

    if (selectedOption === 'flightNo') {
        let flightNo = document.getElementById('flightNoPHolder').value;
        window.location.href = `/flightListPassenger/flightListPassenger.html?searchType=${selectedOption}&flightNo=${flightNo}&userId=${userId}`;
    } 
    else if (selectedOption === 'route') {
        let departure = document.getElementById('departure').value;
        let arrival = document.getElementById('arrival').value;
        let startDate = document.getElementById('startDate').value;
        let endDate = document.getElementById('endDate').value;
        
        
        window.location.href = `/flightListPassenger/flightListPassenger.html?searchType=${selectedOption}&departure=${departure}&arrival=${arrival}&startDate=${startDate}&endDate=${endDate}&userId=${userId}`;
    } 
    else if (selectedOption === 'airport') {
        let airport = document.getElementById('airport').value;
        let startDate = document.getElementById('startDate2').value;
        let endDate = document.getElementById('endDate2').value;
        
        window.location.href = `/flightListPassenger/flightListPassenger.html?searchType=${selectedOption}&airport=${airport}&startDate2=${startDate}&endDate2=${endDate}&userId=${userId}`;
    }
});


document.addEventListener('DOMContentLoaded', function() { 
    // Add click event listener to the "My Flights" button
    document.getElementById('myFlights').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Redirect to the My Flights page with the user ID as a parameter
        window.location.href = `/myFlightsPassenger/myFlightsPassenger.html?userId=${userId}`;
    });
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