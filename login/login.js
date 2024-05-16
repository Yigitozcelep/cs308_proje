import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { dummyUsers } from "../backend_communication/dummy_data.js";

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

    // Redirect to index.html in start_screen folder on Sign Out
    document.getElementById('signOutButton').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }
});

document.querySelector('form').addEventListener('submit', async function(event){
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the values of the email and password fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(await UserCommunication.isValidUser(email, password))
        {
            const userData = await UserCommunication.getUserData(email, password);
            console.log(userData);
            const userId = userData.Id;  
            
            if(userData.isUserAdmin())
            {
                window.location.href  = `../flightListAdmin/flightListAdmin.html?userId=${userId}`;
            }
            else if(userData.isUserCabinCrew())
            {
                window.location.href  = `../flightListCrew/flightListCrew.html?userId=${userId}`;
            }
            else if(userData.isUserPilotCrew())
            {
                window.location.href  = `../flightListCrew/flightListCrew.html?userId=${userId}`;
            }
            else
            {
                window.location.href  = `../flightSelection/flightSelection.html?userId=${userId}`;
            }
        }
    // For example, you can also clear the form fields after submission
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
