import { getText, languages } from "../dictionary.js";

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    document.getElementById('personal_Title').innerHTML = getText("personal_Title");
    document.getElementById('personal_lastname').innerHTML = getText("personal_lastname");
    document.getElementById('personal_password').innerHTML = getText("personal_password");
    document.getElementById('personal_save').innerHTML = getText("personal_save");
    document.getElementById('personal_helpButton').innerHTML = getText("personal_helpButton");
    document.getElementById('personal_signOut').innerHTML = getText("personal_signOut");
    document.getElementById('personal_helpText').innerHTML = getText("personal_helpText");
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

document.addEventListener('DOMContentLoaded', (event) => {
    var personal_helpButton = document.getElementById('personal_helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closeSpan = document.getElementsByClassName('close')[0];

    // When the help button is clicked, show the pop-up
    personal_helpButton.onclick = function() {
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
    document.getElementById('personal_signOut').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }
});
