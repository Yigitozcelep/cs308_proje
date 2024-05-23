import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";
import { FlightData } from "../backend_communication/flights/flights.js";
import { getText } from "../dictionary.js";

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    document.getElementById('pageTitle').innerHTML = getText("addFlight");
    document.getElementById('flightNoLabel').innerHTML = getText("flightNo");
    document.getElementById('planeIdLabel').innerHTML = getText("planeId");
    document.getElementById('departureDateLabel').innerHTML = getText("departureDate");
    document.getElementById('departureTimeLabel').innerHTML = getText("departureTime");
    document.getElementById('departureAirportLabel').innerHTML = getText("departureAirport");
    document.getElementById('foodMenuLabel').innerHTML = getText("foodMenu");
    document.getElementById('arrivalDateLabel').innerHTML = getText("arrivalDate");
    document.getElementById('arrivalTimeLabel').innerHTML = getText("arrivalTime");
    document.getElementById('arrivalPlaceLabel').innerHTML = getText("arrivalPlace");
    document.getElementById('arrivalAirportLabel').innerHTML = getText("arrivalAirport");
    document.getElementById('departurePlaceLabel').innerHTML = getText("departurePlace");
    document.getElementById('vehicleTypeLabel').innerHTML = getText("airplaneType");
    document.getElementById('submit').innerHTML = getText("addFlight");
    document.getElementById('brandName').innerHTML = getText("brandName");
    document.getElementById('helpButton').innerHTML = getText("helpButton");
    document.getElementById('signOut').innerHTML = getText("signOut");
    document.getElementById('helpText').innerHTML = getText("helpTextAddFlight");
    document.getElementById('sharedAirlineCompanyLabel').innerHTML = getText("sharedAirlineCompany");
    
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);
// Add event listener for form submission
document.getElementById('addFlightForm').addEventListener("submit", async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Retrieve values from input fields
    const flightNo = document.getElementById("flightNo").value;
    const planeId = document.getElementById("planeId").value;
    const departureDate = document.getElementById("departureDate").value;
    const departureTime = document.getElementById("departureTime").value;
    const departurePlace = document.getElementById("departurePlace").value;
    const departureAirport = document.getElementById("departureAirport").value;
    const arrivalDate = document.getElementById("arrivalDate").value;
    const arrivalTime = document.getElementById("arrivalTime").value;
    const arrivalPlace = document.getElementById("arrivalPlace").value;
    const arrivalAirport = document.getElementById("arrivalAirport").value;
    const vehicleType = document.getElementById("vehicleType").value;
    const sharedAirlineCompany = document.getElementById("sharedAirlineCompany").value;
    const foodMenu = document.getElementById("foodMenu").value;

    const departureDateTime = new Date(`${departureDate}T${departureTime}:00`);
    const arrivalDateTime = new Date(`${arrivalDate}T${arrivalTime}:00`);
    
    const flightData = new FlightData(
        departurePlace,
        arrivalPlace,
        departureAirport,
        arrivalAirport,
        departureDateTime,
        arrivalDateTime,
        vehicleType,
        sharedAirlineCompany,  
        flightNo,
        planeId,
        foodMenu,
    );

    console.log(flightData);

    try {
        await FlightsCommunication.addFlight(flightData);
        document.getElementById('addFlightForm').reset();
       
        //window.location.href = "flightListAdmin.html";
    } catch (error) {
        
        alert("An error occurred while adding the flight. Please try again later.");
        console.error(error);
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    var log_helpButton = document.getElementById('helpButton');
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
