
class FlightData {
    #from 
    #goTo 
    #departureAirport 
    #landingAirport 
    #departureTime 
    #landingTime 
    #planeType 
    #flightTime
    #airlineCompany
    #flightId 
    /**
     * 
     * @param {String} from 
     * @param {String} goTo 
     * @param {String} departureAirport 
     * @param {String} landingAirport 
     * @param {Date} departureTime 
     * @param {Date} landingTime 
     * @param {String} planeType 
     * @param {Date} flightTime 
     * @param {String} airlineCompany 
     * @param {Number} flightId 
     * 
     */
    constructor(from, goTo, departureAirport, landingAirport, departureTime, landingTime,
         planeType, flightTime, airlineCompany, flightId) {
        
        this.#from              = from;
        this.#goTo              = goTo;
        this.#departureAirport  = departureAirport;
        this.#landingAirport    = landingAirport;
        this.#departureTime     = departureTime;
        this.#landingTime       = landingTime;
        this.#planeType         = planeType;
        this.#flightTime        = flightTime;
        this.#airlineCompany    = airlineCompany;
        this.#flightId          = flightId;

    }

    getFrom()               { return this.#from;             }
    getTo()                 { return this.#goTo;             }
    getDedepartureAirport() { return this.#departureAirport; }
    getLandingAirport()     { return this.#landingAirport;   }
    getDepartureTime()      { return this.#departureTime;    }
    getLandingTime()        { return this.#landingTime;      }
    getPlaneType()          { return this.#planeType;        }
    getFlightTime()         { return this.#flightTime;       }
    getFlightId()           { return this.#flightId;         }

}

class Seat {
    #seatPosition;
    #seatType;
    #seatCost;
    #status;
    /**
     * @param {String} seatPosition 
     * @param {String} seatType 
     * @param {Number} cost
     */
    constructor(seatPosition, seatType, seatCost, status) {
        this.#seatPosition = seatPosition;
        this.#seatType     = seatType;
        this.#seatCost     = seatCost;
        this.#status       = status; // avaliable or not
    }
    getSeatNumber()    { return this.#seatPosition[0];         } // if seat is A7 it return 7
    getSeatLetter()    { return this.#seatPosition[1];         } // if seat is A7 it return A
    getSeatPosition()  { return this.#seatPosition;            } // if seat is A7 it return A7
    isSeatEcenomy()    { return this.#seatType == "ecenomy";   }
    isSeatBussiness()  { return this.#seatType == "bussiness"; }
    getSeatCost()      { return this.#seatCost;                }
    getSeatType()      { return this.#seatType;                } // economy or bussiness
    IsBuyyable()       { return this.#status  == "avaliable";  }
}


class BookingData {
    #flightData
    #bussinessSeats
    #ecenomySeats
    constructor(flightData, bussinesSeats, ecenomySeats) {
        this.#flightData     = flightData;
        this.#bussinessSeats = bussinesSeats;
        this.#ecenomySeats   = ecenomySeats;
    }
}

class UserFlightData {
    /**
     * 
     * @param {FlightData} flightData 
     * @param {Seat} seat 
     * @param {Date} boughtTime 
     * @param {Number} purchaseCost 
     * @param {Number} purchaseId 
     */
    constructor(flightData, seat, boughtTime, purchaseCost, purchaseId) {
        this.flightData     = flightData;
        this.seat           = seat;
        this.boughtTime     = boughtTime;
        this.purchaseId     = purchaseId;
    }
}

class UserData {
    #userName
    #password
    #currentFlights
    constructor(userName, password, currentFlights) {
        this.#userName = userName;
        this.#password  = password;
        this.#currentFlights = currentFlights;
    }

    changePassword() {

    }

    changeUserName() {

    }

    buyFlight() {

    }

    refundFlight() {

    }

    upgradeSeat() {

    }
}


const BackEndController = {
    
    isValidUser() {

    },
    
    getUserData() {

    }
    
}