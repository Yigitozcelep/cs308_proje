const languages = {
    turkish: "turkish",
    english: "english",
}

if (!localStorage.getItem("language")) localStorage.setItem("language", languages.turkish);


const dictionary = {
    
    "dreamsText": {
        [languages.turkish]: "Hayallerinize Uçun...",
        [languages.english]: "Fly To Your Dreams...",
    },
    "foodMenu": {
        [languages.turkish]: "Yemek Menüsü",
        [languages.english]: "Food Menu",
    },
    "rosterText": {
        [languages.turkish]: "Uçuş Listesi",
        [languages.english]: "Flight Roster",
    },
    "startButton": {
        [languages.turkish]: "Başla",
        [languages.english]: "Start",
    },
    "sharedAirlineCompany": {
        [languages.turkish]: "Ortak Havayolu Şirketi",
        [languages.english]: "Shared Airline Company",
    },

    "startButton": {
        [languages.turkish]: "Başla",
        [languages.english]: "Start",
    },
    "signupTitle": {
        [languages.turkish]: "Üye Ol",
        [languages.english]: "Sign Up",
    },
    "signupSubtitle": {
        [languages.turkish]: "E-postanızla ücretsiz bir hesap oluşturun.",
        [languages.english]: "Create a free account with your email.",
    },
    "sign_name": {
        [languages.turkish]: "İsim",
        [languages.english]: "Name",
    },
    "sign_surname": {
        [languages.turkish]: "Soyad",
        [languages.english]: "Surname",
    },
    "female": {
        [languages.turkish]: "Kadın",
        [languages.english]: "Female",
    },
    "male": {
        [languages.turkish]: "Erkek",
        [languages.english]: "Male",
    },
    "other": {
        [languages.turkish]: "Diğer",
        [languages.english]: "Other",
    },
    "sign_age": {
        [languages.turkish]: "Yaş:",
        [languages.english]: "Age:",
    },
    "sign_nationality": {
        [languages.turkish]: "Uyruk Girin",
        [languages.english]: "Enter Nationality",
    },
    "sign_email": {
        [languages.turkish]: "Eposta",
        [languages.english]: "Email",
    },
    "sign_password": {
        [languages.turkish]: "Şifre",
        [languages.english]: "Password",
    }, 
    "crewlabel": {
        [languages.turkish]: "Mürettebat Tipi:",
        [languages.english]: "Crew Type:",
    },
    "cabinc": {
        [languages.turkish]: "Kabin Ekibi",
        [languages.english]: "Cabin Crew",
    },
    "flightc": {
        [languages.turkish]: "Uçuş Ekibi",
        [languages.english]: "Pilot Crew",
    },

    "signupButton": {
        [languages.turkish]: "Üye Ol",
        [languages.english]: "Sign up",
    },
    "haveAccount": {
        [languages.turkish]: "Hesabınız var mı?",
        [languages.english]: "Have an account?",
    },
    "sign_login": {
        [languages.turkish]: "Giriş yap",
        [languages.english]: "Log in",
    },
    "sign_helpButton": {
        [languages.turkish]: "Yardım",
        [languages.english]: "Help",
    },
    "sign_back": {
        [languages.turkish]: "Geri",
        [languages.english]: "Back",
    },
    "dutch": {
        [languages.turkish]: "Hollandalı",
        [languages.english]: "Dutch",
    },
    "english": {
        [languages.turkish]: "İngiliz",
        [languages.english]: "English",
    },
    "french": {
        [languages.turkish]: "Fransız",
        [languages.english]: "French",
    },
    "german": {
        [languages.turkish]: "Alman",
        [languages.english]: "German",
    },
    "italian": {
        [languages.turkish]: "İtalyan",
        [languages.english]: "Italian",
    },
    "russian": {
        [languages.turkish]: "Rus",
        [languages.english]: "Russian",
    },
    "swedish": {
        [languages.turkish]: "İsveçli",
        [languages.english]: "Swedish",
    },
    "turkish": {
        [languages.turkish]: "Türk",
        [languages.english]: "Turkish",
    },
    "helpText": {
        [languages.turkish]: `İşte bazı yararlı bilgiler:
            Lütfen hiçbir kutuyu boş bırakmamaya dikkat edin.
            "Söylememeyi tercih et" seçeneği cinsiyetini belirtmek istemeyen kişiler için oluşturulmuş bir seçenektir. Kişiler üyelik işleminden sonra tercihlerini değiştirme hakkına sahiptir.
            Kayıt olmak için e-posta adresinizi girmelisiniz. Kayıt işlemi başarılı olmazsa lütfen e-posta adresinizi doğru girdiğinizden emin olun.
            Zaten bir hesabınız varsa, "Giriş yap" seçeneğini tıklayın ve bağlantıdan işleme devam edin.`,
        [languages.english]: `Here is some helpful information:
           Please be careful not to leave any boxes blank.
           The "prefer not to say" option is an option created for people who do not want to specify their gender. People have the right to change their preferences after the membership process.
           You must enter your e-mail address to sign up. If successful sign up is not achieved, please make sure that you have entered the e-mail address correctly.
           If you already have an account, click "Log in" and continue the process from the link.`,
    },
    "member_helpText": {
        [languages.turkish]: `Here is some helpful information:
        Please be careful not to leave any boxes blank.
        The "prefer not to say" option is an option created for people who do not want to specify their gender. 
        You must enter the e-mail address to create member.`,
        [languages.english]: `Here is some helpful information:
        Please be careful not to leave any boxes blank.
        The "prefer not to say" option is an option created for people who do not want to specify their gender. 
        You must enter the e-mail address to create member.`,
    },
    "confirm": {
        [languages.turkish]: "Onayla",
        [languages.english]: "Confirm",
    },

    "loginTitle": {
        [languages.turkish]: "Giriş Yap",
        [languages.english]: "Login",
    },
    "log_email": {
        [languages.turkish]: "Eposta:",
        [languages.english]: "Email:",
    },
    "log_password": {
        [languages.turkish]: "Şifre:",
        [languages.english]: "Password:",
    },
    "loginButton": {
        [languages.turkish]: "Giriş Yap",
        [languages.english]: "LOG IN",
    },
    "log_forgotPassword": {
        [languages.turkish]: "Şifrenizi mi unuttunuz?",
        [languages.english]: "Forgot Password?",
    },
    "log_helpButton": {
        [languages.turkish]: "Yardım",
        [languages.english]: "Help",
    },
    "log_back": {
        [languages.turkish]: "Geri",
        [languages.english]: "Back",
    },
    "log_helpText": {
        [languages.turkish]: `İşte bazı yararlı bilgiler:
        Lütfen rolünüzü seçiniz (Yolcular yolcu seçeneğiyle devam etmelidir, çalışan iseniz lütfen size uygun kabin veya kokpit seçeneğini seçiniz).
        Giriş yapabilmek için e-posta adresinizi girmelisiniz. Başarılı giriş sağlanamadıysa lütfen e-posta adresinizi doğru girdiğinizden emin olun veya sistemde kayıtlı değilseniz kayıt ekranına dönüp işlemleri tamamlayın. kayıt işlemi.
        Şifrenizi unuttuysanız "Şifrenizi mi unuttunuz?" seçeneğine tıklayın. Bağlantıdan şifre yenileme işlemini tamamlayın.`,
        [languages.english]: `Here is some helpful information:
        Please select your role (passengers should continue with the passenger option, if you are an employee, please choose the cabin or cockpit option that suits you).
        You must enter your e-mail address to log in. If successful login is not achieved, please make sure that you have entered the e-mail address correctly, or if you are not registered in the system, return to the registration screen and complete the registration process.
        If you forgot your password, click "Forgot password?" Complete the password renewal process from the link.`,
    },


    "reset_helpButton": {
        [languages.turkish]: "Yardım",
        [languages.english]: "Help",
    },
    "reset_helpText": {
        [languages.turkish]: `İşte bazı yararlı bilgiler:
        Şifrenizi sıfırlamak için e-posta adresinizi girmeniz gerekmektedir. Başarılı bir sıfırlama gerçekleşmezse, lütfen e-posta adresini doğru girdiğinizden emin olun veya bu e-postayla bir hesabınız olup olmadığını kontrol edin.
        Hesabınız yoksa "Kayıt Ol"a tıklayın ve bağlantıdan işleme devam edin.`,
        [languages.english]: `Here is some helpful information:
        You must enter your e-mail address to reset your password. If successful reset is not achieved, please make sure that you have entered the e-mail address correctly or check if you have an account with this email.
        If you do not have an account, click "Register" and continue the process from the link.`,
    },
    "reset_back": {
        [languages.turkish]: "Geri",
        [languages.english]: "Back",
    },
    "forgetTitle": {
        [languages.turkish]: "Şifreyi Unut",
        [languages.english]: "Forget Password",
    },
    "reset_email": {
        [languages.turkish]: "E-postanızı giriniz",
        [languages.english]: "Enter Your Email",
    },
    "reset_password": {
        [languages.turkish]: "Yeni Şifreyi Girin",
        [languages.english]: "Enter New Password",
    },
    "reset_sendEmailButton": {
        [languages.turkish]: "Eposta gönder",
        [languages.english]: "Send Email",
    },
    "reset_haveNoAccount": {
        [languages.turkish]: "Hesabınız yok mu?",
        [languages.english]: "Don't have an account?",
    },
    "reset_register": {
        [languages.turkish]: "Kayıt ol",
        [languages.english]: "Register",
    },


    "personalP_helpButton": {
        [languages.turkish]: "Yardım",
        [languages.english]: "Help",
    },
    "personalP_helpText": {
        [languages.turkish]: `İşte bazı yararlı bilgiler:
        Soyadınızı, e-posta adresinizi ve şifrenizi istediğiniz zaman değiştirebilirsiniz.
        Bu bilgiler dışındaki bilgilerinizi değiştirmek isterseniz,
        lütfen yetkili kişiyle iletişime geçin. (Yetkili e-posta adresi: 308airlines@gmail.com)
        Değişiklik yapmak için "Kaydet" butonuna basmanız gerekmektedir, aksi halde değişiklikleriniz yapılmayacaktır.`,
        [languages.english]: `Here is some helpful information:
        You can change your surname, e-mail address, and password at any time. 
        If you would like to change your information other than this information, 
        please contact the authorized person. (Authorized e-mail address: 308airlines@gmail.com)
        To make changes, you must press the "Save" button, otherwise your changes will not be made.`,
    },
    "personalP_signOut": {
        [languages.turkish]: "Çıkış Yap",
        [languages.english]: "Sign Out",
    },
    "personalP_Title": {
        [languages.turkish]: "Kişisel bilgi",
        [languages.english]: "Personal Information",
    }, 
    "personalP_allowedRangeLabel": {
        [languages.turkish]: "İzin Verilen Menzil (km):",
        [languages.english]: "Allowed Range (km):",
    },
    "personalP_languagesLabel1": {
        [languages.turkish]: "Diller:",
        [languages.english]: "Languages:",
    }, 
    "personalP_languagesLabel": {
        [languages.turkish]: "Diller:",
        [languages.english]: "Languages:",
    },
    "personalP_recipeLabel": {
        [languages.turkish]: "Yemek:",
        [languages.english]: "Recipe:",
    },
    "personalP_nameLabel": {
        [languages.turkish]: "Ad:",
        [languages.english]: "Name:",
    },
    "personalP_surnameLabel": {
        [languages.turkish]: "Soyad:",
        [languages.english]: "Last Name:",
    },
    "personalP_genderLabel": {
        [languages.turkish]: "Cinsiyet:",
        [languages.english]: "Gender:",
    }, 
    "personalP_ageLabel": {
        [languages.turkish]: "Yaş:",
        [languages.english]: "Age:",
    },
    "personalP_nationalityLabel": {
        [languages.turkish]: "Uyruk:",
        [languages.english]: "Nationality:",
    },
    "personalP_emailLabel": {
        [languages.turkish]: "Eposta:",
        [languages.english]: "Email:",
    },
    "personalP_passwordLabel": {
        [languages.turkish]: "Şifre:",
        [languages.english]: "Password:",
    },
    "personalP_save": {
        [languages.turkish]: "Kaydet",
        [languages.english]: "Save",
    },


    /*"personal_helpButton": {
        [languages.turkish]: "Yardım",
        [languages.english]: "Help",
    },
    "personal_helpText": {
        [languages.turkish]: `İşte bazı yararlı bilgiler:
        Soyadınızı, e-posta adresinizi ve şifrenizi istediğiniz zaman değiştirebilirsiniz.
        Bu bilgiler dışındaki bilgilerinizi değiştirmek isterseniz,
        lütfen yetkili kişiyle iletişime geçin. (Yetkili e-posta adresi: 308airlines@gmail.com)
        Değişiklik yapmak için "Kaydet" butonuna basmanız gerekmektedir, aksi halde değişiklikleriniz yapılmayacaktır.`,
        [languages.english]: `Here is some helpful information:
        You can change your surname, e-mail address, and password at any time. 
        If you would like to change your information other than this information, 
        please contact the authorized person. (Authorized e-mail address: 308airlines@gmail.com)
        To make changes, you must press the "Save" button, otherwise your changes will not be made.`,
    },
    "personal_signOut": {
        [languages.turkish]: "Çıkış Yap",
        [languages.english]: "Sign Out",
    },
    "personal_Title": {
        [languages.turkish]: "Kişisel bilgi",
        [languages.english]: "Personal Information",
    },
    "personal_lastname": {
        [languages.turkish]: "Soyad:",
        [languages.english]: "Last Name:",
    },
    "personal_password": {
        [languages.turkish]: "Şifre:",
        [languages.english]: "Password:",
    },
    "personal_save": {
        [languages.turkish]: "Kaydet",
        [languages.english]: "Save",
    },*/

  ////////////////
    "login": {
        [languages.turkish]: "giriş",
        [languages.english]: "login",
    },
    
    "password": {
        [languages.turkish]: "şifre",
        [languages.english]: "password",
    },
    
    "myFlightsHelp":
    {
        [languages.turkish]: "Uçuşlarım Yardım Sayfasına Hoşgeldiniz",
        [languages.english]: "Welcome to My Flights Help",
    },
    
    "brandName":
    {
        [languages.turkish]: "AIR308 Havayolları",
        [languages.english]: "AIR308 Airlines",
    },

    "air308myFlights":
    {
        [languages.turkish]: "AIR308 Uçuşlarım",
        [languages.english]: "AIR308 MyFlights",
    },
    "air308FlightsPassenger":
    {
        [languages.turkish]: "AIR308 Uçuşlar Yolcu",
        [languages.english]: "AIR308 Flights Passenger",
    },
    "air308FlightsCrew":
    {
        [languages.turkish]: "AIR308 Uçuşlar Uçuş Ekibi",
        [languages.english]: "AIR308 Flights Crew",
    },
    "air308FlightsAdmin":
    {
        [languages.turkish]: "AIR308 Uçuşlar Yönetici",
        [languages.english]: "AIR308 Flights Admin",
    },
    "helpButton":
    {
        [languages.turkish]: "Yardım",
        [languages.english]: "Help",
    },
    "myFlightsBookingInfo":
    {
        [languages.turkish]: "\"Uçuşlarım\" sayfasında, rezerve ettiğiniz uçuşlarınızı görüntüleyebilir ve yönetebilirsiniz.",
        [languages.english]: "In the \"My Flights\" page, you can view and manage your booked flights.",
    },
    "filteringFlights":
    {
        [languages.turkish]: "Uçuşları Filtreleme",
        [languages.english]: "Filtering Flights",
    },
    "filteringFlightsInfo":
    {
        [languages.turkish]: "Tablodaki parametrelere göre uçuşları filtrelemek için giriş alanlarını kullanın. Filtreleri uygulamak için \"Uygula\" düğmesine tıklayın.",
        [languages.english]: "Use the input fields to filter flights by parameters in the table. Click the \"Apply\" button to apply the filters.",
    },
    "tableDisplay":
    {
        [languages.turkish]: "Tablo Görünümü",
        [languages.english]: "Table Display",
    },
    "selectingFlights":
    {
        [languages.turkish]: "Uçuş Seçimi",
        [languages.english]: "Selecting Flights",
    },
    "chooseAction:":
    {
        [languages.turkish]: "Seçim Yapın:",
        [languages.english]: "Choose an action:",
    },
    "extendedView":
    {
        [languages.turkish]: "Detaylı Görünüm",
        [languages.english]: "Extended View",
    },
    "tabularView":
    {
        [languages.turkish]: "Tablo Görünümü",
        [languages.english]: "Tabular View",
    },
    
    "planeView":
    {
        [languages.turkish]: "Uçak Görünümü",
        [languages.english]: "Plane View",
    },
    "selectingFlightsInfo":
    {
        [languages.turkish]: "Uçuş seçmek için, tablodaki ilgili satırın yanındaki \"Seç\" düğmesine tıklayın. Ardından seçilen uçuşla ilgili detaylı bilgileri görüntüleyebilirsiniz.",
        [languages.english]: "To select a flight, click on the \"Select\" button next to the corresponding row in the table. You can then view detailed information about the selected flight.",
    },
    "adminTableDisplayInfo":
    {
        [languages.turkish]: "Tablo Görünümü",
        [languages.english]: "The table displays available flights with columns for Flight No, Plane ID, Departure Date, Departure Place, Departure Airport, Arrival Date, Arrival Place, Arrival Airport and Vehicle Type. You can click on the column headers to sort the table.",
    },
    "crewTableDisplayInfo":
    {
        [languages.turkish]: "Tablo, Uçuş No, Uçak Kimliği, Kalkış Tarihi, Kalkış Yeri, Kalkış Havalimanı, Varış Tarihi, Varış Yeri, Varış Havalimanı, Koltuk Türü ve Koltuk Numarası sütunlarıyla mevcut uçuşları gösterir. Tabloyu sıralamak için sütun başlıklarına tıklayabilirsiniz.",
        [languages.english]: "The table displays available flights with columns for Flight No, Plane ID, Departure Date, Departure Place, Departure Airport, Arrival Date, Arrival Place, Arrival Airport, Seat Type, and Seat Number. You can click on the column headers to sort the table.",
    },
    "myFlightsTableDisplayInfo":
    {
        [languages.turkish]: "Tablo, Rezervasyon No, Uçuş No, Kalkış Tarihi, Kalkış Yeri, Kalkış Havalimanı, Varış Tarihi, Varış Yeri, Varış Havalimanı, Koltuk Tipi ve Koltuk Numarası sütunlarıyla uçuşlarınızı görüntüler. Tablo başlıklarına tıklayarak tabloyu sıralayabilirsiniz.",
        [languages.english]: "The table displays your flights with columns for Booking No, Flight No, Departure Date, Departure Place, Departure Airport, Arrival Date, Arrival Place, Arrival Airport, Seat Type, and Seat Number. You can click on the column headers to sort the table.",
    },
    "cancellingFlights":
    {
        [languages.turkish]: "Uçuşları İptal Etme",
        [languages.english]: "Cancelling Flights",
    },
    "myFlightsCancellingFlightsInfo":
    {
        [languages.turkish]: "Bir uçuşu iptal etmek için, tablodaki ilgili satırın yanındaki \"İptal\" düğmesine tıklayın. İptal edilen uçuşlar kalıcı olarak kaldırılacaktır.",
        [languages.english]: "To cancel a flight, click on the \"Cancel\" button next to the corresponding row in the table. Cancelled flights will be removed permanently.",
    },
    "cancelButton":
    {
        [languages.turkish]: "İptal",
        [languages.english]: "Cancel",
    },
    "confirmFlightDelete":
    {
        [languages.turkish]: "Bu uçuşu silmek istediğinizden emin misiniz?",
        [languages.english]: "Are you sure you want to cancel this flight?",
    },
    "bookButton":
    {
        [languages.turkish]: "Satın Al",
        [languages.english]: "Book",
    },
    "signOut":
    {
        [languages.turkish]: "Çıkış",
        [languages.english]: "Sign Out",
    },
    "departureTime":
    {
        [languages.turkish]: "Kalkış Saati",
        [languages.english]: "Departure Time",
    },
    "arrivalTime":
    {
        [languages.turkish]: "Varış Saati",
        [languages.english]: "Arrival Time",
    },
    "filterBy":
    {
        [languages.turkish]: "Filtreleme Ölçütleri:",
        [languages.english]: "Filter By:",
    },
    "arrivalTime":
    {
        [languages.turkish]: "Varış Saati",
        [languages.english]: "Arrival Time",
    },"departureTime":
    {
        [languages.turkish]: "Kalkış Saati",
        [languages.english]: "Departure Time",
    },
    "bookingNo":
    {
        [languages.turkish]: "Rezervasyon No",
        [languages.english]: "Booking No",
    },
    "flightNo":
    {
        [languages.turkish]: "Uçuş No",
        [languages.english]: "Flight No",
    },
    "departureDate":
    {
        [languages.turkish]: "Kalkış Tarihi",
        [languages.english]: "Departure Date",
    },
    "departurePlace":
    {
        [languages.turkish]: "Kalkış Yeri",
        [languages.english]: "Departure Place",
    },
    "departureAirport":
    {
        [languages.turkish]: "Kalkış Havalimanı",
        [languages.english]: "Departure Airport",
    },
    "arrivalDate":
    {
        [languages.turkish]: "Varış Tarihi",
        [languages.english]: "Arrival Date",
    },
    "date":
    {
        [languages.turkish]: "Tarih",
        [languages.english]: "Date",
    },
    "flightManagement":
    {
        [languages.turkish]: "Tarih",
        [languages.english]: "Flight Management",
    },
    "flightManagementInfo":
    {
        [languages.turkish]: "Uçuşları yönetmek için, ilgili düğmelere tıklayarak yeni bir uçuş ekleyebilir veya mevcut bir uçuşu güncelleyebilirsiniz.",
        [languages.english]: "To manage flights, you can add a new flight or update an existing one by clicking on the respective buttons provided.",
    },
    "flightSelection":
    {
        [languages.turkish]: "Uçuş Seçimi",
        [languages.english]: "Flight Selection",
    },
    "flightSelectionInfo":
    {
        [languages.turkish]: "Daha fazla işlem için bir uçuş seçmek için, tablodaki ilgili satırın yanındaki \"Seç\" düğmesine tıklayın.",
        [languages.english]: "To select a flight for further actions, such as editing and viewing detailed info, click on the \"Select\" button next to the corresponding row in the table.",
    },
    "flightDeletion":
    {
        [languages.turkish]: "Uçuş Silme",
        [languages.english]: "Flight Deletion",
    },
    "flightDeletionInfo":
    {
        [languages.turkish]: "Bir uçuşu silmek için, tablodaki ilgili satırın yanındaki \"Sil\" düğmesine tıklayın.",
        [languages.english]: "To delete a flight, click on the \"Delete\" button next to the corresponding row in the table.",
    },


    "arrivalPlace":
    {
        [languages.turkish]: "Varış Yeri",
        [languages.english]: "Arrival Place",
    },

    "arrivalAirport":
    {
        [languages.turkish]: "Varış Havalimanı",
        [languages.english]: "Arrival Airport",
    },

    "seatType":
    {
        [languages.turkish]: "Koltuk Türü",
        [languages.english]: "Seat Type",
    },
    "seatNumber":
    {
        [languages.turkish]: "Koltuk Numarası",
        [languages.english]: "Seat Number",
    },

    "apply":
    {
        [languages.turkish]: "Uygula",
        [languages.english]: "Apply",
    },
    "air308FlightSelection":
    {
        [languages.turkish]: "AIR308 Uçuş Seçimi",
        [languages.english]: "AIR308 Flight Selection",
    },
    "flightSelectionHelp":
    {
        [languages.turkish]: "Uçuş Seçimi Yardımına Hoş Geldiniz",
        [languages.english]: "Welcome to Flight Selection Help",
    },
    "helpInfo":
    {
        [languages.turkish]: "İşte bazı faydalı bilgiler:",
        [languages.english]: "Here's some helpful information:",
    },
    "searchOptions":
    {
        [languages.turkish]: "Arama Şeçenekleri",
        [languages.english]: "Search Options",
    },
    "flightSelectionSearchMethod":
    {
        [languages.turkish]: "Tercih ettiğiniz arama yöntemini seçin:",
        [languages.english]: "Choose your preferred search method:",
    },
    "flightNumberInfo":
    {
        [languages.turkish]: "<strong>Uçuş Numarası:</strong> Belirli bir uçuşu uçuş numarasına göre arayın.",
        [languages.english]: "<strong >Flight Number:</strong> Search for a specific flight by its flight number.",
    },
    "routeInfo:":
    {
        [languages.turkish]: "<strong>Rota:</strong> Kalkış ve varış noktalarını, yanlarına tarihi girerek o rotadaki uçuşları arayın.",
        [languages.english]: "<strong >Route:</strong> Enter departure and arrival destinations along with the date to search for flights on that route.",
    },
    "airportInfo:":
    {
        [languages.turkish]: "<strong>Havalimanı:</strong> Belirli bir tarihte bir havalimanından kalkan veya bir havalimanına varan uçuşları arayın.",
        [languages.english]: "<strong >Airport:</strong> Search for flights departing from or arriving at a specific airport on a particular date.",
    },
    "fillingForm":
    {
        [languages.turkish]: "Formu Doldurma",
        [languages.english]: "Filling Out the Form",
    },
    "ensureAccuracy":
    {
        [languages.turkish]: "Sağladığınız bilgilerin doğruluğunu sağlayın:",
        [languages.english]: "Ensure the accuracy of the information you provide:",
    },
    "doubleCheck":
    {
        [languages.turkish]: "Hatalardan kaçınmak için uçuş numaralarını, havalimanı kodlarını ve tarihleri kontrol edin.",
        [languages.english]: "Double-check flight numbers, airport codes, and dates to avoid errors.",
    },
    "viewBookedFlights":
    {
        [languages.turkish]: "Rezerve Edilmiş Uçuşları Görüntüleme",
        [languages.english]: "Viewing Booked Flights",
    },
    "viewBookedFlightsInfo":
    {
        [languages.turkish]: "Rezerve edilmiş uçuşlarınızı görüntülemek ve rezervasyonlarınızı yönetmek için \"Uçuşlarım\" üzerine tıklayın.",
        [languages.english]: "Click on \"My Flights\" to view your booked flights and manage your bookings.",
    },
    "searchBy:":
    {
        [languages.turkish]: "Şuna Göre Ara:",
        [languages.english]: "Search By:",
    },
    "route":
    {
        [languages.turkish]: "Rota",
        [languages.english]: "Route",
    },
    "airport":
    {
        [languages.turkish]: "Havalimanı",
        [languages.english]: "Airport",
    },
    "flightNo:":
    {
        [languages.turkish]: "Uçuş No:",
        [languages.english]: "Flight No:",
    },
    "helpTextAddFlight":
    {
        [languages.turkish]: "Bu sayfada yeni uçuş tanımlayabilirsiniz",
        [languages.english]: "In this page you can create a new flight",
    },
    "airport:":
    {
        [languages.turkish]: "Havalimanı:",
        [languages.english]: "Airport",
    },
    "myFlights":
    {
        [languages.turkish]: "Uçuşlarım",
        [languages.english]: "My Flights",
    },
    "departure:":
    {
        [languages.turkish]: "Kalkış:",
        [languages.english]: "Departure:",
    },
    "departure":
    {
        [languages.turkish]: "Kalkış",
        [languages.english]: "Departure",
    },
    "arrival:":
    {
        [languages.turkish]: "Varış:",
        [languages.english]: "Arrival:",
    },
    "intervalStart:":
    {
        [languages.turkish]: "Aralık Başlangıcı:",
        [languages.english]: "Interval Start:",
    },
    "intervalEnd:":
    {
        [languages.turkish]: "Aralık Bitişi:",
        [languages.english]: "Interval End:",
    },
    "submit":
    {
        [languages.turkish]: "Gönder",
        [languages.english]: "Submit",
    },
    "flightSelectionTable":
    {
        [languages.turkish]: "UÇUŞ ARAMA",
        [languages.english]: "FLIGHT SELECTION",
    },
    "flightList":
    {
        [languages.turkish]: "Uçuş Listesi Yardımına Hoş Geldiniz",
        [languages.english]: "Welcome to Flights List Help",
    },
    "flightListCrewInfo":
    {
        [languages.turkish]: "Bu sayfa, uçuş ekibi için mevcut uçuşları göz atmanıza ve filtrelemenize olanak tanır.",
        [languages.english]: "This page allows you to browse and filter available flights for crew members.",
    },

    "flightListAdmin":
    {
        [languages.turkish]: "Uçuş Listesi Yardımına Hoş Geldiniz",
        [languages.english]: "In the \"Flights List\" page, you can browse and filter available flights for administration purposes.",
    },
    "flightListPassengerInfo":
    {
        [languages.turkish]: "\"Uçuş Listesi\" sayfasında mevcut uçuşları göz atabilir ve rezervasyon yapmak için filtreleyebilirsiniz.",
        [languages.english]: "In the \"Flights List\" page, you can browse and filter available flights to book.",
    },

    "passengerTableDisplayInfo":
    {
        [languages.turkish]: "Tablo, Uçuş No, Uçak Kimliği, Kalkış Tarihi, Kalkış Yeri, Kalkış Havalimanı, Varış Tarihi, Varış Yeri, Varış Havalimanı ve Araç Türü sütunlarıyla mevcut uçuşları görüntüler. Tabloyu sıralamak için sütun başlıklarına tıklayabilirsiniz.",
        [languages.english]: "The table displays available flights with columns for Flight No, Plane ID, Departure Date, Departure Place, Departure Airport, Arrival Date, Arrival Place, Arrival Airport and Vehicle Type. You can click on the column headers to sort the table.",
    },

    "bookingFlights":
    {
        [languages.turkish]: "Uçuş Rezervasyonu",
        [languages.english]: "Booking Flights",
    },

    "bookingFlightsInfo":
    {
        [languages.turkish]: "Uçuşu rezerve etmek için, tablodaki ilgili satırın yanındaki \"Rezerve Et\" düğmesine tıklayın. Bu işlem sizi o uçuşun rezervasyon sayfasına yönlendirecek.",
        [languages.english]: "To book a flight, click on the \"Book\" button next to the corresponding row in the table. You will be directed to the booking page for that flight.",
    },
    "planeId":
    {
        [languages.turkish]: "Uçak No",
        [languages.english]: "Plane Id",
    },
    "airplaneType":
    {
        [languages.turkish]: "Uçak Türü",
        [languages.english]: "Airplane Type",
    },
    "selectButton":
    {
        [languages.turkish]: "Seç",
        [languages.english]: "Select",
    },
    "deleteButton":
    {
        [languages.turkish]: "Sil",
        [languages.english]: "Delete",
    },
    "refuseButton":
    {
        [languages.turkish]: "Reddet",
        [languages.english]: "Refuse",
    },
    "addFlight":
    {
        [languages.turkish]: "Uçuş Ekle",
        [languages.english]: "Add a Flight",
    },

    "updateFlight":
    {
        [languages.turkish]: "Uçuşu Güncelle",
        [languages.english]: "Update a Flight",
    },

    "name": {
        [languages.turkish]: "isim",
        [languages.english]: "name",
    },

    "gender": {
        [languages.turkish]: "cinsiyet",
        [languages.english]: "gender",
    },

    "nationality": {
        [languages.turkish]: "ulus",
        [languages.english]: "nationality"
    },

    "surname": {
        [languages.turkish]: "soyad",
        [languages.english]: "surname",
    },

    "age": {
        [languages.turkish]: "yaş",
        [languages.english]: "age",
    },

    "type": {
        [languages.turkish]: "tip",
        [languages.english]: "type",
    },

    "The transaction was completed successfully": {
        [languages.turkish]: "İşlem başarıyla gerçekleştirildi",
        [languages.english]: "The transaction was completed successfully",
    },

    "buySeat": {
        [languages.turkish]: "Satın al",
        [languages.english]: "Buy Seat"
    },

    "name_search":{
        [languages.turkish]: "İsim",
        [languages.english]: "Name"
    },

    "surname_search":{
        [languages.turkish]: "Soyisim",
        [languages.english]: "Surname"
    },
    "id_search":{
        [languages.turkish]: "Kişi No",
        [languages.english]: "ID"
    },
    "age_search":{
        [languages.turkish]: "Yaş",
        [languages.english]: "Age"
    },

    "gender_search":{
        [languages.turkish]: "Cinsiyet",
        [languages.english]: "Gender"
    },

    "nationality_search":{
        [languages.turkish]: "Ulus",
        [languages.english]: "Nationality"
    },

    "seniority_search":{
        [languages.turkish]: "Kıdem",
        [languages.english]: "Seniority"
    },

    "seat_search":{
        [languages.turkish]: "Koltuk No",
        [languages.english]: "Seat Number"
    },

    "email_search":{
        [languages.turkish]: "Mail Adresi",
        [languages.english]: "Email"
    },

    "viewing_for":{
        [languages.turkish]: "Gösterilen: ",
        [languages.english]: "Viewing For: "
    },

    "AIR308 Airlines":
    {
        [languages.turkish]: "AIR308 Havayolları",
        [languages.english]: "AIR308 Airlines",
    },

    
    "createMemberTitle":
    {
        [languages.turkish]: "Personel Ekle",
        [languages.english]: "Create Member",
    }, 
    "createMemberButton":
    {
        [languages.turkish]: "Personel Ekle",
        [languages.english]: "Create Member",
    },

    "sign_seniority":
    {
        [languages.turkish]: "Kıdem",
        [languages.english]: "Seniority",
    }, 
    "sign_age_label":
    {
        [languages.turkish]: "Yaş:",
        [languages.english]: "Age:",
    },

    "sign_id": 
    {
        [languages.turkish]: "Kişi No",
        [languages.english]: "ID",
    },


    "plaineViewHelpAdmin": {
        [languages.english]: ` <h1>AIR308 Airlines Seat Management System - Help Guide</h1> <p><strong>Welcome to the AIR308 Airlines Seat Management System!</strong> This guide will help you understand how to use the system to view passenger and crew member details.</p> <h2>Features:</h2> <h3>1. Interactive Seat Map:</h3> <ul> <li><strong>View Passenger Details:</strong> Click on any seat in the airplane layout to display the passenger's details seated there. The details will appear in the white box above the airplane layout, showing the following information: <ul> <li><strong>Age:</strong> The passenger's age.</li> <li><strong>Nationality:</strong> The passenger's nationality.</li> <li><strong>Name:</strong> The passenger's name.</li> <li><strong>Surname:</strong> The passenger's surname.</li> <li><strong>Gender:</strong> The passenger's gender.</li> <li><strong>Id:</strong> The unique ID assigned to the passenger.</li> </ul> </li> </ul> <h3>2. Crew Member List:</h3> <ul> <li><strong>View Crew Details:</strong> Below the airplane layout, a table displays the list of crew members. The table includes the following details for each crew member: <ul> <li><strong>Age:</strong> The crew member's age.</li> <li><strong>Nationality:</strong> The crew member's nationality.</li> <li><strong>Name:</strong> The crew member's name.</li> <li><strong>Surname:</strong> The crew member's surname.</li> <li><strong>Gender:</strong> The crew member's gender.</li> <li><strong>Id:</strong> The unique ID assigned to the crew member.</li> <li><strong>Type:</strong> The role of the crew member (e.g., Admin, PilotCrew, CabinCrew).</li> </ul> </li> </ul> `,
        [languages.turkish]: ` <h1>AIR308 Havayolları Koltuk Yönetim Sistemi - Yardım Kılavuzu</h1> <p><strong>AIR308 Havayolları Koltuk Yönetim Sistemine hoş geldiniz!</strong> Bu kılavuz, sistemin nasıl kullanılacağını ve yolcu ile mürettebat üyesi bilgilerini nasıl görüntüleyeceğinizi anlamanıza yardımcı olacaktır.</p> <h2>Özellikler:</h2> <h3>1. Etkileşimli Koltuk Haritası:</h3> <ul> <li><strong>Yolcu Bilgilerini Görüntüleme:</strong> Uçak düzeninde herhangi bir koltuğa tıklayarak orada oturan yolcunun bilgilerini görüntüleyebilirsiniz. Bilgiler, uçak düzeninin üstündeki beyaz kutuda şu şekilde görünecektir: <ul> <li><strong>Yaş:</strong> Yolcunun yaşı.</li> <li><strong>Milliyet:</strong> Yolcunun milliyeti.</li> <li><strong>Ad:</strong> Yolcunun adı.</li> <li><strong>Soyad:</strong> Yolcunun soyadı.</li> <li><strong>Cinsiyet:</strong> Yolcunun cinsiyeti.</li> <li><strong>Id:</strong> Yolcuya atanan benzersiz ID.</li> </ul> </li> </ul> <h3>2. Mürettebat Üyesi Listesi:</h3> <ul> <li><strong>Mürettebat Bilgilerini Görüntüleme:</strong> Uçak düzeninin altında, mürettebat üyelerinin listesini gösteren bir tablo bulunmaktadır. Tabloda her mürettebat üyesi için şu bilgiler yer alır: <ul> <li><strong>Yaş:</strong> Mürettebat üyesinin yaşı.</li> <li><strong>Milliyet:</strong> Mürettebat üyesinin milliyeti.</li> <li><strong>Ad:</strong> Mürettebat üyesinin adı.</li> <li><strong>Soyad:</strong> Mürettebat üyesinin soyadı.</li> <li><strong>Cinsiyet:</strong> Mürettebat üyesinin cinsiyeti.</li> <li><strong>Id:</strong> Mürettebat üyesine atanan benzersiz ID.</li> <li><strong>Tür:</strong> Mürettebat üyesinin rolü (örneğin, Admin, PilotCrew, CabinCrew).</li> </ul> </li> </ul> `
    },
    "plaineViewHelpPassanger": {
        [languages.english]: `    <h1>AIR308 Airlines Seat Management System - Passenger Help Guide</h1>
        <p><strong>Welcome to the AIR308 Airlines Seat Management System!</strong> This guide will help you understand how to use the system and complete seat purchase transactions.</p>
        
        <h2>Features:</h2>
        <h3>1. Seat Selection and Purchase:</h3>
        <ul>
            <li><strong>Seat Selection:</strong>
                <ul>
                    <li>You can select any seat on the airplane layout by clicking on it. The selected seat will be highlighted in blue.</li>
                </ul>
            </li>
            <li><strong>Seat Purchase:</strong>
                <ul>
                    <li>After selecting a seat, click the "Buy Seat" button located at the bottom right corner of the screen.</li>
                    <li>You will receive a notification confirming the transaction. The notification will state "The transaction was completed successfully".</li>
                </ul>
            </li>
        </ul>
    
        <h2>How to Use:</h2>
        <h3>1. Seat Selection:</h3>
        <ul>
            <li>Click on an available seat in the airplane layout. The selected seat will be marked in blue.</li>
            <li>You can select multiple seats, but you must complete a separate purchase transaction for each seat.</li>
        </ul>
    
        <h3>2. Seat Purchase:</h3>
        <ul>
            <li>After selecting a seat, click the "Buy Seat" button at the bottom right corner.</li>
            <li>Once the transaction is complete, you will see a successful transaction notification on the screen.</li>
        </ul>
    
        <h2>Tips:</h2>
        <ul>
            <li><strong>Seat Color Codes:</strong>
                <ul>
                    <li>Red seats indicate they are occupied, while green seats indicate they are available.</li>
                    <li>Blue seats indicate your current selection.</li>
                </ul>
            </li>
        </ul>
        <p>Thank you for using the AIR308 Airlines Seat Management System!</p>`,

        [languages.turkish]: `    <h1>AIR308 Havayolları Koltuk Yönetim Sistemi - Yolcu Yardım Kılavuzu</h1>
        <p><strong>AIR308 Havayolları Koltuk Yönetim Sistemine hoş geldiniz!</strong> Bu kılavuz, sistemin nasıl kullanılacağını ve koltuk satın alma işlemlerini nasıl gerçekleştireceğinizi anlamanıza yardımcı olacaktır.</p>
        
        <h2>Özellikler:</h2>
        <h3>1. Koltuk Seçimi ve Satın Alma:</h3>
        <ul>
            <li><strong>Koltuk Seçimi:</strong>
                <ul>
                    <li>Uçak düzeninde herhangi bir koltuğa tıklayarak koltuğu seçebilirsiniz. Seçtiğiniz koltuk mavi renkle vurgulanacaktır.</li>
                </ul>
            </li>
            <li><strong>Koltuk Satın Alma:</strong>
                <ul>
                    <li>Koltuk seçtikten sonra, ekranın sağ alt köşesinde bulunan "Buy Seat" (Koltuk Satın Al) düğmesine tıklayın.</li>
                    <li>İşlemin tamamlandığını belirten bir bildirim alacaksınız. Bu bildirimde "The transaction was completed successfully" (İşlem başarıyla tamamlandı) yazacaktır.</li>
                </ul>
            </li>
        </ul>
    
        <h2>Nasıl Kullanılır:</h2>
        <h3>1. Koltuk Seçimi:</h3>
        <ul>
            <li>Uçak düzeninde uygun bir koltuğa tıklayın. Seçtiğiniz koltuk mavi renkle işaretlenecektir.</li>
            <li>Birden fazla koltuk seçebilirsiniz, ancak her bir koltuk için ayrı bir satın alma işlemi yapmanız gerekmektedir.</li>
        </ul>
    
        <h3>2. Koltuk Satın Alma:</h3>
        <ul>
            <li>Koltuk seçimini yaptıktan sonra sağ alt köşede bulunan "Buy Seat" düğmesine tıklayın.</li>
            <li>İşlem tamamlandıktan sonra ekranda başarılı bir işlem bildirimi göreceksiniz.</li>
        </ul>
    
        <h2>İpuçları:</h2>
        <ul>
            <li><strong>Koltuk Renk Kodları:</strong>
                <ul>
                    <li>Kırmızı koltuklar dolu olduğunu, yeşil koltuklar ise boş olduğunu belirtir.</li>
                    <li>Mavi koltuklar sizin seçiminizi belirtir.</li>
                </ul>
            </li>
        </ul>
    
        <p>AIR308 Havayolları Koltuk Yönetim Sistemini kullandığınız için teşekkür ederiz!</p>`
    },

    "plaineViewTitle": {
        [languages.turkish]: "AIR308 Uçak Görünümü",
        [languages.english]: "AIR308 Plaine View"
    }
    
}

const getText = (text) => {
    console.log("text: ", text);
    return dictionary[text][localStorage.getItem("language")];
}

export { getText, languages };