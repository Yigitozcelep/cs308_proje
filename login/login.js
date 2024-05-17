import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { dummyUsers } from "../backend_communication/dummy_data.js";

import { getText, languages } from "../dictionary.js";

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    document.getElementById('loginTitle').innerHTML = getText("loginTitle");
    document.getElementById('log_email').innerHTML = getText("log_email");
    document.getElementById('log_password').innerHTML = getText("log_password");
    document.getElementById('loginButton').innerHTML = getText("loginButton");
    document.getElementById('log_forgotPassword').innerHTML = getText("log_forgotPassword");
    document.getElementById('log_helpButton').innerHTML = getText("log_helpButton");
    document.getElementById('log_signOut').innerHTML = getText("log_signOut");
    document.getElementById('log_helpText').innerHTML = getText("log_helpText");
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

function redirectToResetPass() {
    window.location.href = '../resetpass/reset_password.html'; 
}

document.addEventListener('DOMContentLoaded', (event) => {
    var log_helpButton = document.getElementById('log_helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closeSpan = document.getElementsByClassName('close')[0];

    // When the help button is clicked, show the pop-up
    log_helpButton.onclick = function() {
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
    document.getElementById('log_signOut').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }

    document.getElementById('log_forgotPassword').addEventListener('click', redirectToResetPass);
    document.getElementById('signOutButton').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }
});


dummyUsers[0].userType = "passenger";
document.querySelector('form').addEventListener('submit', async function(event){
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the values of the email and password fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(await UserCommunication.isValidUser(email, password))
        {
            const userData = await UserCommunication.getUserData(email, password);
            const userId = userData.Id;
            console.log(userId);
            localStorage.setItem("userId", userId);

            if(userData.isUserAdmin())
            {
                window.location.href  = `../flightListAdmin/flightListAdmin.html`;
            }
            else if(userData.isUserCabinCrew())
            {
                 window.location.href  = `../flightListCrew/flightListCrew.html`;
            }
            else if(userData.isUserPilotCrew())
            {
                window.location.href  = `../flightListCrew/flightListCrew.html`;
            }
            else
            {
                window.location.href  = `../flightSelection/flightSelection.html`;
            }
        }
    // For example, you can also clear the form fields after submission
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
