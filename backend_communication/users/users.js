import { FlightData } from "../flights/flights.js";

const UserTypes = {
    passanger:   "passsanger",
    cabinCrew:   "cabinCrew",
    pilotCrew:   "pilotCrew",
}

class UserFlightData {
    /**
     * @param {flights.FlightData} flightData 
     * @param {Seat} userSeat 
     * @param {Date} boughtTime 
     * @param {Number} purchaseId 
     */
    constructor(flightData, seat, boughtTime, purchaseId) {
        this.flightData     = flightData;
        this.userSeat       = seat;
        this.boughtTime     = boughtTime;
        this.purchaseId     = purchaseId;
    }
}

class UserData {
    /**
     * @param {String} name 
     * @param {String} surname 
     * @param {String} Id 
     * @param {Date} birthDay
     * @param {String} gender 
     * @param {String} nationality 
     * @param {String} email 
     * @param {UserFlightData[]} flights 
     * @param {String} userType
     * @param {Bool} canRejectFlight
     * @param {FlightData} pendingFlight
     */
    constructor(email, password, name, surname, Id, age, gender, nationality, userType, flights, canRejectFlight, pendingFlight) {
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
        this.canRejectFlight = canRejectFlight;
        this.pendingFlight   = pendingFlight;
    }
}

export {UserData, UserFlightData}