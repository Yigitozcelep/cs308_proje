import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { getText } from "../dictionary.js";


function handleLanguageChange() {
  let lang = document.getElementById('language').value;
  localStorage.setItem("language", lang);

  const dreamsText = document.getElementById('dreamsText');
  const rosterText = document.getElementById('rosterText');
  const startButton = document.getElementById('startButton');

  dreamsText.innerHTML = getText("dreamsText");
  rosterText.innerHTML = getText("rosterText");
  startButton.innerHTML = getText("startButton");
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);
