import { UserCommunication} from "../backend_communication/users/users_communication.js";
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
    document.getElementById('sign_nationality').children[0].innerHTML = getText("sign_nationality");
    document.getElementById('sign_email').placeholder = getText("sign_email");
    document.getElementById('sign_password').placeholder = getText("sign_password");
    document.getElementById('signupButton').innerHTML = getText("signupButton");
    document.getElementById('haveAccountText').innerHTML = `${getText("haveAccount")} <a href="#" onclick="redirectToSignIn()" id="sign_login">${getText("sign_login")}</a>`;
    document.getElementById('sign_helpButton').innerHTML = getText("sign_helpButton");
    document.getElementById('sign_signOut').innerHTML = getText("sign_signOut");

    // Update nationality options
    let nationalityOptions = document.getElementById('sign_nationality').options;
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
    document.getElementById('sign_signOut').onclick = function() {
        window.location.href = '../start_screen/index.html';
    }

    document.getElementById('sign_login').addEventListener('click', redirectToSignIn);
});

// Yeni kullanıcı oluşturma ve kaydetme işlemi
document.getElementById('signupButton').addEventListener('click', async (event) => {
    event.preventDefault(); // Formun varsayılan gönderme işlemini durdurun

    // Kullanıcı bilgilerini formdan alın
    const name = document.getElementById('sign_name').value;
    const surname = document.getElementById('sign_surname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const birthDate = document.getElementById('sign_selectBirth').value;
    const nationality = document.getElementById('sign_nationality').value;
    const email = document.getElementById('sign_email').value;
    const password = document.getElementById('sign_password').value;

    // Yeni bir kullanıcı oluşturun
    const newUser = new UserData(
        email,
        password,
        name,
        surname,
        Date.now().toString(), // Kullanıcı ID'si için benzersiz bir değer
        new Date(birthDate),
        gender,
        nationality,
        'Passanger', // Varsayılan olarak kullanıcı türü yolcu
        [], // Kullanıcının uçuş bilgileri (başlangıçta boş)
        true, // Uçuşları reddedebilme durumu
        null // Bekleyen uçuş bilgisi (başlangıçta null)
    );



    // Kullanıcıyı yerel depolamaya kaydedin
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Kayıt başarılı mesajını gösterin veya başka bir sayfaya yönlendirin
    alert('Kayıt başarılı!');
    window.location.href = '../login/login.html'; // Giriş sayfasına yönlendirin
});

