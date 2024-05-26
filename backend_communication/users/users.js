import { FlightData, Seat } from "../flights/flights.js";

const UserTypes = {
    passanger:   "Passenger",
    cabinCrew:   "CabinCrew",
    pilotCrew:   "PilotCrew",
    admin:       "Admin",
}

class UserFlightData {
    /**
     * @param {flights.FlightData} flightData 
     * @param {Seat} userSeat 
     * @param {Date} boughtTime 
     * @param {Number} purchaseId
     * @param {String} role  
     */
    constructor(flightData, seat, boughtTime, purchaseId, role) {
        this.flightData     = flightData;
        this.userSeat       = seat;
        this.boughtTime     = boughtTime;
        this.purchaseId     = purchaseId;
        this.role           = role;
    }
}

class UserData {
    /**
     * @param {String} email 
     * @param {String} password 
     * @param {String} name 
     * @param {String} surname 
     * @param {String} Id 
     * @param {int} age 
     * @param {String} gender 
     * @param {String} nationality 
     * @param {String} userType 
     * @param {UserFlightData[]} flights 
     * @param {String} seniority
     * @param {String} languages
     * @param {String} allowedRange
     * @param {String} recipe
     */
    constructor(email, password, name, surname, Id, age, gender, nationality, userType, flights, seniority, languages, allowedRange, recipe) {
        this.email           = email;
        this.password        = password;
        this.name            = name;
        this.surname         = surname;
        this.Id              = Id;
        this.age             = age;
        this.gender          = gender;
        this.nationality     = nationality;
        this.userType        = userType;
        this.flights         = flights;
        this.seniority       = seniority;
        this.languages       = languages;
        this.allowedRange    = allowedRange;
        this.recipe          = recipe;
    }
    isUserAdmin()     { return this.userType == UserTypes.admin     }
    isUserCabinCrew() { return this.userType == UserTypes.cabinCrew }
    isUserPilotCrew() { return this.userType == UserTypes.pilotCrew }
    isUserAdmin()     { return this.userType == UserTypes.admin     }
}

const createUserDataFromJson = (json) => {
    const userFlightDatas = [];
    for (const data of json.flights) {
        const currentSeatData = data.userSeat;
        const currentFlight   = data.flightData;
        const seat = new Seat(currentSeatData.seatPosition, currentSeatData.seatType, currentSeatData.status, currentSeatData.userId)
        const flightData = new FlightData(currentFlight.from, currentFlight.goTo, currentFlight.departureAirport, currentFlight.landingAirport, currentFlight.departureTime, new Date(currentFlight.landingTime), currentFlight.planeType, currentFlight.airlineCompany, currentFlight.flightId, currentFlight.planeId, currentFlight.menu);
        userFlightDatas.push(new UserFlightData(flightData, seat, null, data.purchaseId, currentFlight.role));
    }
    const res = new UserData(json.email, json.password, json.name, json.surname, json.id, json.age, json.gender, json.nationality, json.userType, userFlightDatas, json.seniority, json.languages, null, json.recipe);
    return res;
}

export {UserData, UserFlightData, UserTypes, createUserDataFromJson}
