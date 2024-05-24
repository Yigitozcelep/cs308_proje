import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { UserData } from "../backend_communication/users/users.js";
import { getText, languages } from "../dictionary.js"; // dictionary.js'yi içe aktarıyoruz

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    document.getElementById('createMemberTitle').innerHTML = getText("createMemberTitle");
    document.getElementById('sign_name').placeholder = getText("sign_name");
    document.getElementById('sign_surname').placeholder = getText("sign_surname");
    document.getElementById('sign_id').placeholder = getText("sign_id");
    document.getElementById('sign_seniority').placeholder = getText("sign_seniority");
    document.getElementById('sign_age_label').innerHTML = getText("sign_age_label");
    document.getElementById('sign_nationality').placeholder = getText("sign_nationality");
    document.getElementById('sign_email').placeholder = getText("sign_email");
    document.getElementById('sign_password').placeholder = getText("sign_password");
    document.getElementById('crewlabel').innerHTML = getText("crewlabel");
    document.getElementById('cabinc').innerHTML = getText("cabinc");
    document.getElementById('flightc').innerHTML = getText("flightc");
    document.getElementById('personalP_recipeLabel').placeholder = getText("personalP_recipeLabel");
    document.getElementById('personalP_allowedRangeLabel').placeholder = getText("personalP_allowedRangeLabel");
    document.getElementById('personalP_languagesLabel1').placeholder = getText("personalP_languagesLabel1");
    document.getElementById('personalP_languagesLabel').placeholder = getText("personalP_languagesLabel");
    document.getElementById('createMemberButton').innerHTML = getText("createMemberButton");
    document.getElementById('sign_helpButton').innerHTML = getText("sign_helpButton");
    document.getElementById('signOut').innerHTML = getText("signOut");

    document.getElementById('labelFemale').innerHTML = getText("female");
    document.getElementById('labelMale').innerHTML = getText("male");
    document.getElementById('labelOther').innerHTML = getText("other");

    // Update help text
    document.getElementById('member_helpText').innerHTML = getText("member_helpText");
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);


document.addEventListener('DOMContentLoaded', (event) => {
    var sign_helpButton = document.getElementById('sign_helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closeSpan = document.getElementsByClassName('close')[0];

    // When the help button is clicked, show the pop-up
    sign_helpButton.onclick = function() {
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
    document.getElementById('signOut').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }

});

// Display the additional input fields based on the selected crew type
document.querySelectorAll('input[name="crewType"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const cabinCrewInputs = document.getElementById('cabinCrewInputs');
        const flightCrewInputs = document.getElementById('flightCrewInputs');

        if (event.target.value === 'cabin') {
            cabinCrewInputs.style.display = 'block';
            flightCrewInputs.style.display = 'none';
        } else if (event.target.value === 'flight') {
            cabinCrewInputs.style.display = 'none';
            flightCrewInputs.style.display = 'block';
        }
    });
});


// Yeni kullanıcı oluşturma ve kaydetme işlemi
document.getElementById('createMemberButton').addEventListener('click', async (event) => {
    event.preventDefault(); // Formun varsayılan gönderme işlemini durdurun

    // Kullanıcı bilgilerini formdan alın
    const name = document.getElementById('sign_name').value;
    const surname = document.getElementById('sign_surname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = document.getElementById('sign_age_mem').value;
    const seniority = document.getElementById('sign_seniority').value;
    const nationality = document.getElementById('sign_nationality').value;
    const email = document.getElementById('sign_email').value;
    const password = document.getElementById('sign_password').value;

    let Recipe = null;
    let allowedRange = null;
    let languages = null;
    let userType;
    if (document.getElementById("cabinCrew").value === "cabin") {
        Recipe = document.getElementById('personalP_recipeLabel').value;
        languages = document.getElementById('personalP_languagesLabel1').value;
        userType = "CabinCrew";
    } else if (document.getElementById("flightCrew").value ===  "flight") {
        allowedRange = document.getElementById('personalP_allowedRangeLabel').value;
        languages = document.getElementById('personalP_languagesLabel').value;
        userType = "PilotCrew";
    }

    
    const newUser = new UserData(
        email,
        password,
        name,
        surname,
        null, // Kullanıcı ID'si için benzersiz bir değer
        age,
        gender,
        nationality,
        userType, 
        [], // Kullanıcının uçuş bilgileri (başlangıçta boş)
        seniority, 
        null, // Bekleyen uçuş bilgisi (başlangıçta null)
        Recipe,
        allowedRange,
        languages
    );
    console.log(newUser);
    UserCommunication.createUser(newUser);

    let lang = document.getElementById('language').value;
    if(lang == "turkish")
        {
            alert("Kayıt başarılı!")
        }
        else
        {
            alert("Registration Successful!")
        }
});