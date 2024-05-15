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
    }

}

const getText = (text) => {
    return dictionary[text][localStorage.getItem("language")];
}


export { getText, languages };