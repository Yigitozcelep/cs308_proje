import { getText, languages } from "../dictionary.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { UserData } from "../backend_communication/users/users.js";

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    document.getElementById('reset_helpButton').innerHTML = getText("reset_helpButton");
    document.getElementById('reset_helpText').innerHTML = getText("reset_helpText");
    document.getElementById('reset_back').innerHTML = getText("reset_back");
    document.getElementById('forgetTitle').innerHTML = getText("forgetTitle");
    document.getElementById('reset_email').placeholder = getText("reset_email");
    document.getElementById('reset_password').placeholder = getText("reset_password");
    document.getElementById('reset_sendEmailButton').innerHTML = getText("reset_sendEmailButton");
    document.getElementById('reset_haveNoAccount').innerHTML = `${getText("reset_haveNoAccount")} <a href="#" onclick="redirectToSignUp()" id="reset_register">${getText("reset_register")}</a>`;
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

document.addEventListener('DOMContentLoaded', (event) => {
    var reset_helpButton = document.getElementById('reset_helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closeSpan = document.getElementsByClassName('close')[0];

    // When the help button is clicked, show the pop-up
    reset_helpButton.onclick = function() {
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
    document.getElementById('reset_back').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }

    // Redirect to signup.html in signup folder on Register link click
    document.getElementsByClassName('register')[0].onclick = function() {
        window.location.href = '../signup/signup.html';
    }
});

// Şifre sıfırlama ve güncelleme işlemi
document.getElementById('resetPasswordForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Formun varsayılan gönderme işlemini durdurun

    const email = document.getElementById('reset_email').value;
    const newPassword = document.getElementById('reset_password').value;

    const res = await UserCommunication.forgetPassword(new UserData(email, newPassword));
    console.log("Res: ", res);
    // Redirect to login.html in login folder
    window.location.href = '../login/login.html';
});

function redirectToSignUp() {
    window.location.href = '../signup/signup.html';
}
