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

}

const getText = (text) => {
    return dictionary[text][localStorage.getItem("language")];
}

export { getText, languages };