import { getText, languages } from "../dictionary.js";

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    document.getElementById('personalP_Title').innerHTML = getText("personalP_Title");
    document.getElementById('personalP_lastname').innerHTML = getText("personalP_lastname");
    document.getElementById('personalP_password').innerHTML = getText("personalP_password");
    document.getElementById('personalP_save').innerHTML = getText("personalP_save");
    document.getElementById('personalP_helpButton').innerHTML = getText("personalP_helpButton");
    document.getElementById('personalP_signOut').innerHTML = getText("personalP_signOut");
    document.getElementById('personalP_helpText').innerHTML = getText("personalP_helpText");
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

document.addEventListener('DOMContentLoaded', (event) => {
    var helpButton = document.getElementById('personalP_helpButton');
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

    // Redirect to index.html in start_screen folder on Sign Out
    document.getElementById('personalP_signOut').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }
});
