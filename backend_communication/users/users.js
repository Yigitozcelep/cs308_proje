import { FlightData } from "../flights/flights.js";

const UserTypes = {
    passanger:   "Passsanger",
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
     * @param {String} email 
     * @param {String} password 
     * @param {String} name 
     * @param {String} surname 
     * @param {String} Id 
     * @param {Date} age 
     * @param {String} gender 
     * @param {String} nationality 
     * @param {String} userType 
     * @param {UserFlightData[]} flights 
     * @param {Bool} canRejectFlight 
     * @param {FlightData} pendingFlight 
     */
    constructor(email, password, name, surname, Id, age, gender, nationality, userType, flights, canRejectFlight, pendingFlight, languages) {
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
        this.languages       = languages;
    }
    
    isUserAdmin()     { return this.userType == UserTypes.admin     }
    isUserCabinCrew() { return this.userType == UserTypes.cabinCrew }
    isUserPilotCrew() { return this.userType == UserTypes.pilotCrew }
    isUserAdmin()     { return this.userType == UserTypes.admin     }
}

export {UserData, UserFlightData}