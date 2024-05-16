import { getText } from "../dictionary.js";

function handleLanguageChange() {
  let lang = document.getElementById('language').value;
  localStorage.setItem("language", lang);

  const dreamsText = document.getElementById('dreamsText');
  const rosterText = document.getElementById('rosterText');
  const button = document.getElementById('startButton');

  dreamsText.innerHTML = getText("dreamsText");
  rosterText.innerHTML = getText("rosterText");
  button.innerHTML = getText("start");
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);
