import { getText, languages } from "../dictionary.js";

function handleLanguageChange() {
  let lang = document.getElementById('language').value;
  localStorage.setItem("language", lang);

  document.getElementById('signupTitle').innerHTML = getText("signupTitle");
  document.getElementById('signupSubtitle').innerHTML = getText("signupSubtitle");
  document.getElementById('name').placeholder = getText("name");
  document.getElementById('surname').placeholder = getText("surname");
  document.getElementById('labelFemale').innerHTML = getText("female");
  document.getElementById('labelMale').innerHTML = getText("male");
  document.getElementById('labelOther').innerHTML = getText("other");
  document.getElementById('nationality').children[0].innerHTML = getText("selectNationality");
  document.getElementById('email').placeholder = getText("email");
  document.getElementById('password').placeholder = getText("password");
  document.getElementById('roleLabel').innerHTML = getText("role");
  document.getElementById('signupButton').innerHTML = getText("signupButton");
  document.getElementById('haveAccountText').innerHTML = `${getText("haveAccount")} <a href="#" onclick="redirectToSignIn()" id="loginLink">${getText("login")}</a>`;
  document.getElementById('helpButton').innerHTML = getText("helpButton");
  document.getElementById('signOutButton').innerHTML = getText("signOut");

  // Update role options
  let roleOptions = document.getElementById('role').options;
  roleOptions[0].innerHTML = getText("cockpitCrew");
  roleOptions[1].innerHTML = getText("cabinCrew");
  roleOptions[2].innerHTML = getText("passenger");
  roleOptions[3].innerHTML = getText("admin");

  // Update nationality options
  let nationalityOptions = document.getElementById('nationality').options;
  nationalityOptions[1].innerHTML = getText("dutch");
  nationalityOptions[2].innerHTML = getText("english");
  nationalityOptions[3].innerHTML = getText("french");
  nationalityOptions[4].innerHTML = getText("german");
  nationalityOptions[5].innerHTML = getText("italian");
  nationalityOptions[6].innerHTML = getText("russian");
  nationalityOptions[7].innerHTML = getText("swedish");
  nationalityOptions[8].innerHTML = getText("turkish");

  // Update help text
  document.getElementById('helpText').innerHTML = getText("helpText");

  // Update languages section
  document.getElementById('languagesLabel').innerHTML = getText("languagesLabel");
  document.getElementById('languagesInput').placeholder = getText("languagesInputPlaceholder");
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

function redirectToSignIn() {
    window.location.href = '../login/login.html'; 
}

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

    // Show language input field based on role selection
    document.getElementById('role').addEventListener('change', function() {
        var languageGroup = document.getElementById('language-group');
        if (this.value === 'cockpit_crew' || this.value === 'cabin_crew') {
            languageGroup.style.display = 'block';
        } else {
            languageGroup.style.display = 'none';
        }
    });

    // Redirect to index.html in start_screen folder on Sign Out
    document.getElementById('signOutButton').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }
});
