import { getText, languages } from "../dictionary.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";
let userData;

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    document.getElementById('personalP_Title').innerHTML = getText("personalP_Title");
    document.getElementById('personalP_nameLabel').innerHTML = getText("personalP_nameLabel");
    document.getElementById('personalP_surnameLabel').innerHTML = getText("personalP_surnameLabel");
    document.getElementById('personalP_genderLabel').innerHTML = getText("personalP_genderLabel");
    document.getElementById('personalP_ageLabel').innerHTML = getText("personalP_ageLabel");
    document.getElementById('personalP_nationalityLabel').innerHTML = getText("personalP_nationalityLabel");
    document.getElementById('personalP_emailLabel').innerHTML = getText("personalP_emailLabel");
    document.getElementById('personalP_passwordLabel').innerHTML = getText("personalP_passwordLabel");
    document.getElementById('personalP_save').innerHTML = getText("personalP_save");
    document.getElementById('personalP_helpButton').innerHTML = getText("personalP_helpButton");
    document.getElementById('personalP_signOut').innerHTML = getText("personalP_signOut");
    document.getElementById('personalP_helpText').innerHTML = getText("personalP_helpText");

    
    document.getElementById('personalP_languagesLabel').innerHTML = getText("personalP_languagesLabel");
    document.getElementById('personalP_recipeLabel').innerHTML = getText("personalP_recipeLabel");
    document.getElementById('personalP_allowedRangeLabel').innerHTML = getText("personalP_allowedRangeLabel");
}

document.addEventListener('DOMContentLoaded', handleLanguageChange);
document.getElementById('language').addEventListener('change', handleLanguageChange);

document.addEventListener('DOMContentLoaded', async (event) => {
    var helpButton = document.getElementById('personalP_helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closeSpan = document.getElementsByClassName('close')[0];

    helpButton.onclick = function() {
        helpPopup.style.display = "flex";
    }

    closeSpan.onclick = function() {
        helpPopup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == helpPopup) {
            helpPopup.style.display = "none";
        }
    }

    document.getElementById('personalP_signOut').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }

    const userId = localStorage.getItem('userId');
    if (userId) {
        userData = await UserCommunication.getUserById(userId);
        userData.userType = "CabinCrew";
        console.log(userData);
        if (userData) {
            document.getElementById('personalP_name').value = userData.name;
            document.getElementById('personalP_surname').value = userData.surname;
            document.getElementById('personalP_gender').value = userData.gender;
            document.getElementById('personalP_age').value = userData.age;
            document.getElementById('personalP_nationality').value = userData.nationality;
            document.getElementById('personalP_email').value = userData.email;

            
            if (userData.userType === 'CabinCrew') {
                document.getElementById('languageGroup').style.display = 'block';
                document.getElementById('personalP_languages').value = userData.languages;
                document.getElementById("recipeGroup").style.display = "block"
                document.getElementById('personalP_recipe').value = userData.recipe;
            } else if (userData.userType === 'PilotCrew') {
                document.getElementById('languageGroup').style.display = 'block';
                document.getElementById('allowedRangeGroup').style.display = 'block';
                document.getElementById('personalP_languages').value = userData.languages;
                document.getElementById('personalP_allowedRange').value = userData.allowedRange;
            }
        }
    }

    document.getElementById('personalInfoForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const surname = document.getElementById('personalP_surname').value;
        const password = document.getElementById('personalP_password').value;

        if (userId && (surname || password)) {
            const updatedUser = { ...userData };
            if (surname) updatedUser.surname = surname;
            if (password) updatedUser.password = password;

            await UserCommunication.updateUser(updatedUser);
    
            if(lang == "turkish")
        {
            alert("Bilgiler başarıyla güncellendi!")
        }
        else
        {
            alert("Information updated successfully!")
        }
        }
    });
});
