const SeatStatus = {
    avaliable: "avaliable",
    unAvaliable: "unavaliable",
}

const SeatTypes = {
    ecenomy: "ecenomy",
    bussiness: "bussiness",
}

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
        this.#seatPosition = seatPosition; //A3 B2 etc.
        this.#seatType     = seatType; // bussiness or ecenomy
        this.#seatCost     = seatCost;
        this.#status       = status;  // avaliable or not
    }
    getSeatNumber()    { return this.#seatPosition[0];                } // if seat is A2 it return A
    getSeatLetter()    { return this.#seatPosition[1];                } // if seat is A2 it return 2
    getSeatPosition()  { return this.#seatPosition;                   } // if seat is A2 it return A2
    isSeatEcenomy()    { return this.#seatType == SeatTypes.ecenomy   }
    isSeatBussiness()  { return this.#seatType == SeatTypes.bussiness }
    getSeatCost()      { return this.#seatCost;                       }
    getSeatType()      { return this.#seatType;                       }
    isSeatAvaliable()  { return this.#status  == SeatStatus.avaliable }
}

class Seats {
    #seats
    /**
     * @param {Seat[]} seats 
     */
    constructor(seats) {
        this.#seats = seats;
    }
    getCountOfAvaliableEcenomySeats()   { return this.#seats.filter(seat => seat.isSeatEcenomy()).length                                    }   
    getCountOfAvaliableBussinessSeats() { return this.#seats.filter(seat => seat.isSeatBussiness()).length                                  }
    getCountOfAnyAvaliableSeats()       { return this.#seats.filter(seat => seat.isSeatAvaliable()).length                                  }
    getAllAvaliableSeats()              { return new Seats(this.#seats.filter(seat => seat.isSeatAvaliable()))                              }    
    getAvaliableEcenomySeats()          { return new Seats(this.#seats.filter(seat => seat.isSeatEcenomy()   && seat.isSeatAvaliable()))    }
    getAvaliableBussinesSeats()         { return new Seats(this.#seats.filter(seat => seat.isSeatBussiness() && seat.isSeatAvaliable()))    }
    isEcenomySeatAvaliable()            { return this.getAvaliableEcenomySeats().#seats.length  != 0;                                       }
    isBussinessSeatAvaliable()          { return this.getAvaliableBussinesSeats().#seats.length != 0;                                       }
    isAnySeatAvaliable()                { return this.getAllAvaliableSeats().#seats.length      != 0;                                       }
    sortSeatsByPrice()                  { return Seats([...this.#seats].sort((seat1, seat2) => seat1.getSeatCost() <= seat2.getSeatCost())) }
    getSeatWithPosition(position)       { return this.#seats.find(seat => seat.getSeatPosition() == position);                              }
}

class UserFlightData {
    /**
     * 
     * @param {FlightData} flightData 
     * @param {Seat} userSeat 
     * @param {Date} boughtTime 
     * @param {Number} purchaseCost 
     * @param {Number} purchaseId 
     */
    constructor(flightData, seat, boughtTime, purchaseCost, purchaseId) {
        this.flightData     = flightData;
        this.userSeat       = seat;
        this.boughtTime     = boughtTime;
        this.purchaseId     = purchaseId;
    }
}

class UserData {
    #userName
    #password
    #userId
    #currentFlights

    /**
     * 
     * @param {String} userName 
     * @param {String} password 
     * @param {Number} userId 
     * @param {Number} currentFlights 
     */
    constructor(userName, password, userId, currentFlights) {
        this.#userName  = userName;
        this.#password  = password;
        this.#userId    = userId;
        this.#currentFlights = currentFlights;
    }
}

class AirPort {
    /**
     * @param {String} city 
     * @param {String} airportName 
     * @param {String} country 
     */
    constructor(city, airportName, country) {
        this.city = city;
        this.airportName = airportName; 
        this.country = country;
    }
}

const BackEndController = {
    
    async isValidUser() {

    },
    
    async getUserData() {
        
    },

    async deleteUser() {

    },

    async buySeat() {

    },

    async refundSeat() {

    },

    /**
     * @param {String} from 
     * @param {String} goTo 
     * if customer looking for a flight during march 10-20
     * intervalStart should be 10 and intervalEnd should be 20
     * @param {Date} intervalStart
     * @param {Date} intervalEnd 
     */
    async getFlightsData(from, goTo, intervalStart, intervalEnd) {

    },

    async getAirlineCompaniesNames() {
        
    },

    async getAirPortsNames() {

    },

    async getSeatsData(flightId) {
        
    }
}