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
        [languages.turkish]: "Uçuşlarım Yardım sayfasına Hoşgeldiniz",
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
    "helpButton":
    {
        [languages.turkish]: "Yardım",
        [languages.english]: "Help",
    },
    "myFlightsBookingInfo":
    {
        [languages.turkish]: "\"Uçuşlarım\" Sayfasında, rezerve ettiğiniz uçuşlarınızı görüntüleyebilir ve yönetebilirsiniz.",
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

    





    


}

const getText = (text) => {
    return dictionary[text][localStorage.getItem("language")];
}

export { getText, languages };
