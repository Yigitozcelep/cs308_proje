import { getText } from "../dictionary.js";
import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js"
import { UserCommunication } from "../backend_communication/users/users_communication.js";


const helpDiv    = document.getElementById("helpDiv");
const helpButton = document.getElementById("helpButton");
const signOut    = document.getElementById("signOut");
const title      = document.getElementById("myTitle");
const brandName  = document.getElementById("brandName");

const changeHelp = async () => {
    const userId  = localStorage.getItem("userId");
    const curUser = await UserCommunication.getUserById(userId);
    if (curUser.isUserAdmin()) helpDiv.innerHTML = getText("plaineViewHelpAdmin");
    else helpDiv.innerHTML = getText("plaineViewHelpPassanger");
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
});

const airPlaineDiv = document.getElementById("airplaine");
const airPlaineLeft = 280;
const airPlaineTop  = 70 + 240;

const capitalizeFirstLetter = (string) => { return string.charAt(0).toUpperCase() + string.slice(1); }

const name        = document.getElementById("name");
const surname     = document.getElementById("surname");
const age         = document.getElementById("age");
const gender      = document.getElementById("gender");
const nationality = document.getElementById("nationality");

const nameEntry           = document.getElementById("nameEntry");
const surnameEntry        = document.getElementById("surnameEntry");
const ageEntry            = document.getElementById("ageEntry");
const genderEntry         = document.getElementById("genderEntry");
const nationalityEntry    = document.getElementById("nationalityEntry");
const idEntry             = document.getElementById("idEntry");

const userInfoTable       = document.getElementById("UserInfoTable");
const flightCrewInfoTable = document.getElementById("FlightCrewTable");

const buySeatButton       = document.getElementById("buySeatButton");

const Flightname        = document.getElementById("FlightCrewName");
const Flightsurname     = document.getElementById("FlightCrewSurname");
const Flightage         = document.getElementById("FlightCrewAge");
const Flightgender      = document.getElementById("FlightCrewGender");
const Flightnationality = document.getElementById("FlightCrewNationality");
const FlightType        = document.getElementById("FlightCrewType");

const initializeNames = () => {
    const res = document.getElementById("language").value;
    if (res == "EN") localStorage.setItem("language", "english");
    else localStorage.setItem("language", "turkish");

    Flightname.innerHTML        = capitalizeFirstLetter(getText("name"));
    Flightsurname.innerHTML     = capitalizeFirstLetter(getText("surname"));
    Flightage.innerHTML         = capitalizeFirstLetter(getText("age"));
    Flightgender.innerHTML      = capitalizeFirstLetter(getText("gender"));
    Flightnationality.innerHTML = capitalizeFirstLetter(getText("nationality"));
    FlightType.innerHTML        = capitalizeFirstLetter(getText("type"));

    name.innerHTML            = capitalizeFirstLetter(getText("name"));
    surname.innerHTML         = capitalizeFirstLetter(getText("surname"));
    age.innerHTML             = capitalizeFirstLetter(getText("age"));
    gender.innerHTML          = capitalizeFirstLetter(getText("gender"));
    nationality.innerHTML     = capitalizeFirstLetter(getText("nationality"));
    helpButton.innerHTML      = capitalizeFirstLetter(getText("helpButton"));
    signOut.innerHTML         = capitalizeFirstLetter(getText("signOut"));
    buySeatButton.innerHTML   = capitalizeFirstLetter(getText("buySeat"));
    brandName.innerHTML       = capitalizeFirstLetter(getText("brandName"));
    title.innerHTML           = capitalizeFirstLetter(getText("plaineViewTitle"));

    changeHelp();
}
initializeNames()
document.getElementById("language").addEventListener("change", initializeNames);

const mainDiv = document.getElementById("seats");

let handlers = [];
let seatCounter = 0;

const getMaxSeatNum = (seatData) => {
    let maxSeatNum = 0;
    seatData.iterateSeats().forEach(s => {
        if (maxSeatNum < s.getSeatNumber() - "0")  maxSeatNum = s.getSeatNumber() - "0";
    })
    return maxSeatNum;
}

const displayFlightCrewData = async (curFlight) => {

    const cabinCrew = await FlightsCommunication.getFlightCrew(curFlight);
    flightCrewInfoTable.style.visibility = "visible";

    for (const el of cabinCrew) {
        const newRow           = flightCrewInfoTable.insertRow();
        const ageCell          = newRow.insertCell(0);
        const nationalityCell  = newRow.insertCell(1);
        const nameCell         = newRow.insertCell(2);
        const surnameCell      = newRow.insertCell(3);
        const genderCell       = newRow.insertCell(4);
        const idCell           = newRow.insertCell(5);
        const typeCell         = newRow.insertCell(6);
        
        ageCell.innerHTML         = el.age;
        nationalityCell.innerHTML = el.nationality;
        surnameCell.innerHTML     = el.surname;
        genderCell.innerHTML      = el.gender;
        idCell.innerHTML          = el.Id;
        nameCell.innerHTML        = el.name;
        typeCell.innerHTML        = el.userType;
    }
}

function selectSeatListener(div) {
    if (div.classList.contains("selectedSeat")) div.classList.remove("selectedSeat");
    else div.classList.add("selectedSeat");
}

const initializeFlightImg = async () => {
    const flightId  = localStorage.getItem("flightIdView");
    const curFlight = await FlightsCommunication.getFlightByFlightId(flightId);
    const userId = localStorage.getItem("userId");
    const curUser = await UserCommunication.getUserById(userId);
    const res = await FlightsCommunication.getSeatsData(curFlight);
    let maxSeatNum = getMaxSeatNum(res);
    if (curUser.isUserAdmin()) displayFlightCrewData(curFlight);
    else buySeatButton.style.visibility = "visible";
    const airPlaineWidth  = 800;
    const airPlaineHeight = 200;
    const bussinessHeight = airPlaineHeight / (res.getRowCount() * res.getBussinessConsecutiveSeat() + res.getRowCount() - 1);
    const ecenomyHeight   = airPlaineHeight / (res.getRowCount() * res.getEcenomyConsecutiveSeat() + res.getRowCount() - 1);
    const width = airPlaineWidth / (maxSeatNum * 1.8);

    for (let seat of res.iterateSeats()) {
        const row = seat.getSeatLetter().charCodeAt() - 'A'.charCodeAt();
        const column = seat.getSeatNumber() - "1";
        const img = document.createElement("img");
        
        if (curUser.isUserAdmin()) {
            img.className = "adminSeat";
            img.addEventListener("click", async e => {
                const seatUser = await UserCommunication.getUserById(seat.getUserId());
                nameEntry.innerHTML         = seatUser.name;
                genderEntry.innerHTML       = seatUser.gender;
                nationalityEntry.innerHTML  = seatUser.nationality;
                surnameEntry.innerHTML      = seatUser.surname;
                ageEntry.innerHTML          = seatUser.age;
                idEntry.innerHTML           = seatUser.Id;
                userInfoTable.style.visibility = "visible";
            })
        }

        else if (seat.isSeatAvaliable()) {
            img.className = "passangerSeat";
            const func = selectSeatListener.bind(this, img);
            
            img.seatCounter = seatCounter;
            handlers.push(func);
            seatCounter++;
            img.addEventListener("click", func)
        }
        
        if (seat.isSeatBussiness()) {
            img.src = (seat.isSeatAvaliable()) ? "svgs/bussinessSeatAvaliable.svg" : "svgs/bussinessSeatUnAvaliable.svg"
            img.style.height = bussinessHeight + "px";
            img.style.width = width + "px";
            img.style.top = (airPlaineTop + (row + Math.floor(row / res.getBussinessConsecutiveSeat())) * bussinessHeight) + "px";
            img.style.position = "absolute";
            img.style.left = (airPlaineLeft + width * 1.8 * column) + "px";
        }
        else {
            img.src = (seat.isSeatAvaliable()) ? "svgs/normalSeatAvaliable.svg" : "svgs/normalSeatUnAvaliable.svg"
            img.style.height = ecenomyHeight + "px";
            img.style.width = width + "px";
            img.style.top = (airPlaineTop + (row + Math.floor(row / res.getEcenomyConsecutiveSeat())) * ecenomyHeight) + "px";
            img.style.position = "absolute";
            img.style.left = (airPlaineLeft + width * 1.8 * column) + "px";
        }
        img.seatData = seat;
        mainDiv.appendChild(img);
    }
}

buySeatButton.onclick = async (e) => {
    const selectedSeats = document.getElementsByClassName("selectedSeat");
    Array.from(selectedSeats).forEach(el => {
        UserCommunication.buySeat(el.seatData);
        el.classList.remove("selectedSeat");
        if (el.seatData.isSeatBussiness()) el.src = "svgs/bussinessSeatUnAvaliable.svg";
        else el.src = "svgs/normalSeatUnAvaliable.svg";
        el.removeEventListener("click", handlers[el.seatCounter], false)
        el.classList.remove("passangerSeat");
    })

    alert(getText("The transaction was completed successfully"));
        
}

initializeFlightImg();
