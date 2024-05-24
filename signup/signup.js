import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { UserData } from "../backend_communication/users/users.js";
import { getText, languages } from "../dictionary.js"; // dictionary.js'yi içe aktarıyoruz

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    document.getElementById('signupTitle').innerHTML = getText("signupTitle"); 
    document.getElementById('signupSubtitle').innerHTML = getText("signupSubtitle");
    document.getElementById('sign_name').placeholder = getText("sign_name");
    document.getElementById('sign_surname').placeholder = getText("sign_surname");
    document.getElementById('labelFemale').innerHTML = getText("female");
    document.getElementById('labelMale').innerHTML = getText("male");
    document.getElementById('labelOther').innerHTML = getText("other");
    document.getElementById('sign_age').innerHTML = getText("sign_age");
    document.getElementById('sign_nationality').placeholder = getText("sign_nationality");
    document.getElementById('sign_email').placeholder = getText("sign_email");
    document.getElementById('sign_password').placeholder = getText("sign_password");
    document.getElementById('signupButton').innerHTML = getText("signupButton");
    document.getElementById('haveAccountText').innerHTML = `${getText("haveAccount")} <a href="#" onclick="redirectToSignIn()" id="sign_login">${getText("sign_login")}</a>`;
    document.getElementById('sign_helpButton').innerHTML = getText("sign_helpButton");
    document.getElementById('sign_back').innerHTML = getText("sign_back");

    // Update help text
    document.getElementById('helpText').innerHTML = getText("helpText");
}

// Call the function to initialize language preferences
document.addEventListener('DOMContentLoaded', handleLanguageChange);

// Add event listener to the language dropdown to handle language change
document.getElementById('language').addEventListener('change', handleLanguageChange);

function redirectToSignIn() {
    window.location.href = '../login/login.html'; 
}

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
    document.getElementById('sign_back').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }

    document.getElementById('sign_login').addEventListener('click', redirectToSignIn);
});

// Yeni kullanıcı oluşturma ve kaydetme işlemi
document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Formun varsayılan gönderme işlemini durdurun

    // Kullanıcı bilgilerini formdan alın
    const name = document.getElementById('sign_name').value;
    const surname = document.getElementById('sign_surname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('sign_age_input').value, 10);

    const nationality = document.getElementById('sign_nationality').value;
    const email = document.getElementById('sign_email').value;
    const password = document.getElementById('sign_password').value;

    // Yaşın geçerli olup olmadığını kontrol edin
    if (isNaN(age) || age < 0 || age > 150) {
        alert('Please enter a valid age between 0 and 150.');
        return;
    }
    
    // Yeni bir kullanıcı oluşturun
    const newUser = new UserData(
        email,
        password,
        name,
        surname,
        "",
        age, // Yaşı integer olarak kaydedin
        gender,
        nationality,
        'Passsenger', // Varsayılan olarak kullanıcı türü yolcu
        [], // Kullanıcının uçuş bilgileri (başlangıçta boş)
        true, // Uçuşları reddedebilme durumu
        null // Bekleyen uçuş bilgisi (başlangıçta null)
    );
    await UserCommunication.createUser(newUser);
    
    if(lang == "turkish")
        {
            alert("Kayıt başarılı!")
        }
        else
        {
            alert("Registration Successful!")
        }
    window.location.href = '../login/login.html'; // Giriş sayfasına yönlendirin
});