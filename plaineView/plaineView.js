import { getText } from "../dictionary.js";
import { FligtsCommunication } from "../backend_communication/flights/flights_comminucation.js";
import { dummyFlights, dummyUsers, seats } from "../backend_communication/dummy_data.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";

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

name.innerHTML            = capitalizeFirstLetter(getText("name"));
surname.innerHTML         = capitalizeFirstLetter(getText("surname"));
age.innerHTML             = capitalizeFirstLetter(getText("age"));
gender.innerHTML          = capitalizeFirstLetter(getText("gender"));
nationality.innerHTML     = capitalizeFirstLetter(getText("nationality"));

const mainDiv = document.getElementById("seats");

const getMaxSeatNum = (seatData) => {
    let maxSeatNum = 0;
    seatData.iterateSeats().forEach(s => {
        if (maxSeatNum < s.getSeatNumber() - "0")  maxSeatNum = s.getSeatNumber() - "0";
    })
    return maxSeatNum;
}

const displayFlightCrewData = async () => {

    const cabinCrew = await FligtsCommunication.getFlightCrew(window.currentFlight);
    console.log(cabinCrew);
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

const initializeFlightImg = async () => {
    const res = await FligtsCommunication.getSeatsData(window.currentFlight);
    let maxSeatNum = getMaxSeatNum(res);
    if (window.currentUser.isUserAdmin() || true) displayFlightCrewData();
    const airPlaineWidth  = 800;
    const airPlaineHeight = 200;
    const bussinessHeight = airPlaineHeight / (res.getRowCount() * res.getBussinessConsecutiveSeat() + res.getRowCount() - 1);
    const ecenomyHeight   = airPlaineHeight / (res.getRowCount() * res.getEcenomyConsecutiveSeat() + res.getRowCount() - 1);
    const width = airPlaineWidth / (maxSeatNum * 1.8);

    for (let seat of res.iterateSeats()) {
        const row = seat.getSeatLetter().charCodeAt() - 'A'.charCodeAt();
        const column = seat.getSeatNumber() - "1";
        const img = document.createElement("img");
        
        if (window.currentUser.isUserAdmin() || true
    ) {
            img.className = "seat";
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
        
        mainDiv.appendChild(img);
    }
}

initializeFlightImg();