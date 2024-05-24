import * as dummyDatas from "../dummy_data.js";
import { UserData } from "../users/users.js";

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
    #airlineCompany
    #flightId
    #planeId
    #menu
    /**
     * 
     * @param {String} from 
     * @param {String} goTo 
     * @param {String} departureAirport 
     * @param {String} landingAirport 
     * @param {Date} departureTime 
     * @param {Date} landingTime 
     * @param {String} planeType 
     * @param {String} airlineCompany 
     * @param {String} flightId 
     * @param {String} planeId
     * @param {String} menu
     */
    constructor(from, goTo, departureAirport, landingAirport, departureTime, landingTime,
         planeType, airlineCompany, flightId, planeId, menu) {
        
        this.#from              = from;
        this.#goTo              = goTo;
        this.#departureAirport  = departureAirport;
        this.#landingAirport    = landingAirport;
        this.#departureTime     = departureTime;
        this.#landingTime       = landingTime;
        this.#planeType         = planeType;
        this.#airlineCompany    = airlineCompany;
        this.#flightId          = flightId;
        this.#planeId           = planeId;
        this.#menu              = menu;
    }

    getFrom()               { return this.#from;             }
    getGoto()               { return this.#goTo;             }
    getDedepartureAirport() { return this.#departureAirport; }
    getLandingAirport()     { return this.#landingAirport;   }
    getAirlineCompany()     { return this.#airlineCompany;   }
    getDepartureTime()      { return this.#departureTime;    }
    getLandingTime()        { return this.#landingTime;      }
    getPlaneType()          { return this.#planeType;        }
    getFlightId()           { return this.#flightId;         }
    getPlaneId()            { return this.#planeId           }
    getMenu()               { return this.#menu           }

    setFrom(val)               {  this.#from             = val }
    setGoto(val)               {  this.#goTo             = val }
    setDedepartureAirport(val) {  this.#departureAirport = val }
    setLandingAirport(val)     {  this.#landingAirport   = val }
    setAirlineCompany(val)     {  this.#airlineCompany   = val }
    setDepartureTime(val)      {  this.#departureTime    = val }
    setLandingTime(val)        {  this.#landingTime      = val }
    setPlaneType(val)          {  this.#planeType        = val }
    setFlightId(val)           {  this.#flightId         = val }
    setPlaneId(val)            {  this.#planeId          = val }
    setMenu(val)               {  this.#menu             = val }
}   

class Seat {
    #seatPosition;
    #seatType;
    #status;
    #userId;
    /**
     * @param {String} seatPosition 
     * @param {String} seatType 
     * @param {bool} status
     * @param {String} userId
     */
    constructor(seatPosition, seatType, status, userId) {
        this.#seatPosition = seatPosition; //A3 B2 etc.
        this.#seatType     = seatType; // bussiness or ecenomy
        this.#status       = status;  // avaliable or not 
        this.#userId       = userId;
    }
    getSeatNumber()    { 
        if (this.#seatPosition.length == 2) return this.#seatPosition[0];                
        return this.#seatPosition[0] + this.#seatPosition[1];
    } // if seat is A2 it return 2
    getSeatLetter()    { 
        if (this.#seatPosition.length == 2) return this.#seatPosition[1];
        return this.#seatPosition[2];
    } // if seat is A2 it return A
    getSeatPosition()  { return this.#seatPosition;                   } // if seat is A2 it return A2
    isSeatEcenomy()    { return this.#seatType == SeatTypes.ecenomy   }
    isSeatBussiness()  { return this.#seatType == SeatTypes.bussiness }
    getSeatType()      { return this.#seatType;                       }
    isSeatAvaliable()  { return this.#status  == SeatStatus.avaliable }
    getUserId()        { return this.#userId;                         }
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
     * @param {Number} ecenomyConsecutiveSeat // 2 or 3
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
}

export {SeatStatus, SeatTypes, FlightData, Seat, Seats, AirPort}
