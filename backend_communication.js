import * as dummyDatas from "./dummy_data.js";

const SeatStatus = {
    avaliable:   "avaliable",
    unAvaliable: "unavaliable",
}

const SeatTypes = {
    ecenomy:       "ecenomy",
    bussiness:     "bussiness",
    emergencyExit: "emergencyExit"
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
     * @param {String} flightId 
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
    getGoto()               { return this.#goTo;             }
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
    #rowCount
    #bussinessConsecutiveSeat
    #ecenomyConsecutiveSeat
    /**
     * @param {Seat[]} seats
     * @param {Number} rowCount  // kaç sıra var 2 yada 3
     * @param {Number} bussinessConsecutiveSeat // 2 or 3 yan yana koltuklar 2limi 3lümü
     * @param {ecenomyConsecutiveSeat} ecenomyConsecutiveSeat // 2 or 3
     */
    constructor(seats, rowCount, bussinessConsecutiveSeat, ecenomyConsecutiveSeat) {
        this.#seats = seats;
        this.#rowCount = rowCount;
        this.#bussinessConsecutiveSeat = bussinessConsecutiveSeat;
        this.#ecenomyConsecutiveSeat   = ecenomyConsecutiveSeat;
    }
    getEcenomyConsecutiveSeat()         { return this.#ecenomyConsecutiveSeat;                                                                                                                                                }
    getBussinessConsecutiveSeat()       { return this.#bussinessConsecutiveSeat                                                                                                                                               }
    getRowCount()                       { return this.#rowCount;                                                                                                                                                              }
    getCountOfAvaliableEcenomySeats()   { return this.#seats.filter(seat => seat.isSeatEcenomy()).length                                                                                                                      }   
    getCountOfAvaliableBussinessSeats() { return this.#seats.filter(seat => seat.isSeatBussiness()).length                                                                                                                    }
    getCountOfAnyAvaliableSeats()       { return this.#seats.filter(seat => seat.isSeatAvaliable()).length                                                                                                                    }
    isEcenomySeatAvaliable()            { return this.getAvaliableEcenomySeats().#seats.length  != 0;                                                                                                                         }
    isBussinessSeatAvaliable()          { return this.getAvaliableBussinesSeats().#seats.length != 0;                                                                                                                         }
    isAnySeatAvaliable()                { return this.getAllAvaliableSeats().#seats.length      != 0;                                                                                                                         }
    getSeatWithPosition(position)       { return this.#seats.find(seat => seat.getSeatPosition() == position);                                                                                                                }
    iterateSeats()                      { return this.#seats;                                                                                                                                                                 }
    getUnAvaliableSeats()               { return new Seats(this.#seats.filter(seat => !seat.isSeatAvaliable()), this.#rowCount, this.#bussinessConsecutiveSeat, this.#ecenomyConsecutiveSeat)                                 }
    getAllAvaliableSeats()              { return new Seats(this.#seats.filter(seat =>  seat.isSeatAvaliable()), this.#rowCount, this.#bussinessConsecutiveSeat, this.#ecenomyConsecutiveSeat)                                 }    
    getAvaliableEcenomySeats()          { return new Seats(this.#seats.filter(seat => seat.isSeatEcenomy()   && seat.isSeatAvaliable()), this.#rowCount, this.#bussinessConsecutiveSeat, this.#ecenomyConsecutiveSeat)        }
    getAvaliableBussinesSeats()         { return new Seats(this.#seats.filter(seat => seat.isSeatBussiness() && seat.isSeatAvaliable()), this.#rowCount, this.#bussinessConsecutiveSeat, this.#ecenomyConsecutiveSeat)        }
    sortSeatsByPrice()                  { return new Seats([...this.#seats].sort((seat1, seat2) => seat1.getSeatCost() <= seat2.getSeatCost()), this.#rowCount, this.#bussinessConsecutiveSeat, this.#ecenomyConsecutiveSeat) }
}

class UserFlightData {
    /**
     * 
     * @param {FlightData} flightData 
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
     * 
     * @param {String} userName 
     * @param {String} password 
     * @param {Number} userId 
     * @param {UserFlightData[]} currentFlights 
     */
    constructor(userName, password, userId, currentFlights) {
        this.userName  = userName;
        this.password  = password;
        this.userId    = userId;
        this.currentFlights = currentFlights;
    }
}


class AirPort {
    /**
     * @param {String} city 
     * @param {String} airportName 
     * @param {String} country 
     */
    constructor(city, airportName, country) {
        this.city        = city;
        this.airportName = airportName; 
        this.country     = country;
    }
}


const seats      = []
const dummyUsers = []
const dummyFlights = dummyDatas.createDummyFlightData();

for (let i = 0; i < 500; i++) seats.push(dummyDatas.createDummySeatData())
for (let i = 0; i < 20; i += 2) dummyUsers.push(dummyDatas.createDummyUser(dummyFlights, i, i + 1, seats[i], seats[i + 1]));


const BackEndController = {
    
    /**
     * @param {String} email 
     * @param {String} password 
     * @returns 
     */
    async isValidUser(email, password) {
        await new Promise(resolve => setTimeout(resolve, 200));
        for (let i = 0; i < dummyUsers.length; i++) {
            if (dummyUsers[i].userName == userName && dummyUsers[i] == password) return true;
        }
        return false;
    },
    
    /**
     * @param {String} userName 
     * @param {String} password 
     * @returns {UserData}
     */
    async getUserData(userName, password) {
        await new Promise(resolve => setTimeout(resolve, 200));
        for (let i = 0; i < dummyUsers.length; i++) {
            if (dummyUsers[i].userName == userName && dummyUsers[i] == password) return dummyUsers[i];
        }
    },
    /**
     * @param {UserData} user 
     */
    async deleteUser(user) {
        await new Promise(resolve => setTimeout(resolve, 200));
        for (let i = 0; i < dummyUsers.length; i++) {
            if (dummyUsers[i].username == user.userName && dummyUsers[i].password == user.password) {
                delete dummyUsers[i];
                return;
            }
        }
    },

    /**
     * @param {userData} userData
     * @param {FlightData} flight 
     * @param {Seat} seat 
     */
    async buySeat(userData, flight, seat) {
        await new Promise(resolve => setTimeout(resolve, 200));
        const curSeats = seats[flight.getFlightId().slice(2) - "0"];
        const cur = curSeats.iterateSeats();
        const newData = []
        for (let i = 0; i < cur.length; i++) {
            if (cur[i] == seat) {
                newData.push(new Seat(seat.getSeatPosition(), seat.getSeatType(), seat.getSeatCost(), SeatStatus.unAvaliable));
            } else newData.push(cur[i])
        }
        seats[flight.getFlightId().slice(2) - "0"] = new Seats(newData, curSeats.getRowCount(), curSeats.getBussinessConsecutiveSeat(), curSeats.getEcenomyConsecutiveSeat());
    },
    
    /**
     * @param {userData} userData
     * @param {FlightData} flight 
     * @param {Seat} seat 
     */
    async refundSeat(userData, flight, seat) {
        await new Promise(resolve => setTimeout(resolve, 200));
        const curSeats = seats[flight.getFlightId().slice(2) - "0"];
        const cur = curSeats.iterateSeats();
        
        const newData = []
        for (let i = 0; i < cur.length; i++) {
            if (cur[i] == seat) {
                newData.push(new Seat(seat.getSeatPosition(), seat.getSeatType(), seat.getSeatCost(), SeatStatus.avaliable));
            } else newData.push(cur[i])
        }
        seats[flight.getFlightId().slice(2) - "0"] = new Seats(newData, curSeats.getRowCount(), curSeats.getBussinessConsecutiveSeat(), curSeats.getEcenomyConsecutiveSeat());
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
        await new Promise(resolve => setTimeout(resolve, 200));
        const data = []
        for (let i = 0; i < dummyFlights.length; i++) {
            if (dummyFlights[i].getLandingTime() >= intervalStart && dummyFlights[i].getDepartureTime() <= intervalEnd && dummyFlights[i].getFrom() == from && dummyFlights[i].getGoto() == goTo) {
                data.push(dummyFlights[i]);
            }
        }
        return data;
    },

    async getAirlineCompaniesNames() {
        await new Promise(resolve => setTimeout(resolve, 200));
        return dummyDatas.createDummyAirlineCompanies();
    },

    async getAirPortsNames() {
        await new Promise(resolve => setTimeout(resolve, 200));
        return dummyDatas.createDummyAirPort();
    },

    /**
     * @param {FlightData} flight 
     * @returns {Seats}
     */
    async getSeatsData(flight) {
        await new Promise(resolve => setTimeout(resolve, 300));
        return seats[flight.getFlightId().slice(2) - "0"];
    }
    
}

export {BackEndController, AirPort, UserData, UserFlightData, Seat, Seats, FlightData, SeatStatus, SeatTypes}