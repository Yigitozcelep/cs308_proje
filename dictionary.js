const languages = {
    turkish: "turkish",
    english: "english",
}

if (!localStorage.getItem("language")) localStorage.setItem("language", languages.turkish);


const dictionary = {
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
    "filterBy":
    {
        [languages.turkish]: "Filtreleme Ölçütleri:",
        [languages.english]: "Filter By:",
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

    "name-search":{
        [languages.turkish]: "İsim",
        [languages.english]: "Name"
    },

    "surname-search":{
        [languages.turkish]: "Soyisim",
        [languages.english]: "Surname"
    },
    "id-search":{
        [languages.turkish]: "Kişi No",
        [languages.english]: "ID"
    },
    "age-search":{
        [languages.turkish]: "Yaş",
        [languages.english]: "Age"
    },

    "gender-search":{
        [languages.turkish]: "Cinsiyet",
        [languages.english]: "Gender"
    },

    "nationality-search":{
        [languages.turkish]: "Ulus",
        [languages.english]: "Nationality"
    },

    "seniority-search":{
        [languages.turkish]: "Kıdem",
        [languages.english]: "Seniority"
    },

    "seat-search":{
        [languages.turkish]: "Koltuk No",
        [languages.english]: "Seat Number"
    },

    "viewing-for":{
        [languages.turkish]: "Gösterilen: ",
        [languages.english]: "Viewing For: "
    },
}

const getText = (text) => {
    return dictionary[text][localStorage.getItem("language")];
}

export { getText, languages };
