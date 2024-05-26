import * as dummyData from "../dummy_data.js"
import { UserData, UserFlightData, createUserDataFromJson } from "../users/users.js";
import { FlightData, Seats, Seat } from "./flights.js";

const FlightsCommunication = {

    /**
     * @param {String} from 
     * @param {String} goTo 
     * @param {String} airportName
     * @param {Date} intervalStart 
     * @param {Date} intervalEnd 
     * @returns {Promise<FlightData[]>}
     */
    async getFlightsDataFrom(from, goTo, intervalStart, intervalEnd, airportName) {
        const flightData = await FlightsCommunication.getAllFlights();
        const data = []
        for (let i = 0; i < flightData.length; i++) {
            if (flightData[i].getLandingTime() >= intervalStart && flightData[i].getDepartureTime() <= intervalEnd && flightData[i].getFrom() == from && flightData[i].getGoto() == goTo && flightData[i].getDedepartureAirport().airportName == airportName) {
                data.push(flightData[i]);
            }
        }
        return data;
    },

    /**
     * @param {String} flightId
     * @returns {boolean}
     */
    async deleteFlight(flightId) {
        let headers = new Headers();
        console.log("flightId: ", flightId);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        let res = await fetch("http://localhost:8080/api/flights/deleteFlightByNumber?flightNumber=" + flightId, {
            mode: 'cors',
            credentials: 'include',
            method: 'DELETE',
            headers: headers,
        });
        console.log("res1: " ,res);
        
        console.log("res: ", res.status);
        return res.status == 200;
    },

    /**
     * @param {FlightData} flight 
     */
    async addFlight(flight) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        const adminId = localStorage.getItem("userId");
        let res = await fetch("http://localhost:8080/api/flights/createFlight/" + adminId, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                from: flight.getFrom(),
                goTo: flight.getGoto(),
                departureAirport: flight.getDedepartureAirport(),
                landingAirport: flight.getLandingAirport(),
                departureTime: flight.getDepartureTime(),
                landingTime: flight.getLandingTime(),
                planeType: flight.getPlaneType(),
                airlineCompany: flight.getAirlineCompany(),
                flightId: flight.getFlightId(),
                planeId: flight.getPlaneId(),
                menu: flight.getMenu(),
            })
        });
        res = await res.json();
        
    },

    /**
     * @param {FlightData} flight 
     */
    async updateFlight(flight) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        const adminId = localStorage.getItem("userId");
        let res = await fetch("http://localhost:8080/api/flights/updateFlight/" + adminId, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                from: flight.getFrom(),
                goTo: flight.getGoto(),
                departureAirport: flight.getDedepartureAirport(),
                landingAirport: flight.getLandingAirport(),
                departureTime: flight.getDepartureTime(),
                landingTime: flight.getLandingTime(),
                planeType: flight.getPlaneType(),
                airlineCompany: flight.getAirlineCompany(),
                flightId: flight.getFlightId(),
                planeId: flight.getPlaneId(),
                menu: flight.getMenu(),
            })
        });
        //res = await res.json();
        console.log("res:",res);
        return res.status == 200;

    },

    /**
     * @param {FlightData} flightData 
     * @returns {Promise<UserData[]>}
     */
    async getFlightCrew(flightData) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        const adminId = localStorage.getItem("userId");
        console.log("flightData: ", flightData);
        let res = await fetch(`http://localhost:8080/main/flight/${flightData.getFlightId()}/getAttendants`,{
            mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: headers,
            }
        );
        res = await res.json();
        const data = []
        for (const el of res) {
            data.push(createUserDataFromJson(el));
        }
        return data;
    },


    /**
     * @param {FlightData} flightData 
     * @returns {Promise<UserData[]>} 
     */
    async getPassangerData(flightData) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        const adminId = localStorage.getItem("userId");
        console.log("flightData: ", flightData);
        let res = await fetch(` http://localhost:8080/main/flight/${flightData.getFlightId()}/getPassengers`,{
            mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: headers,
            }
        );
        res = await res.json();
        const data = [];
        for (const el of res) data.push(createUserDataFromJson(el));
        return data;
        
    },
    /**
     * @param {FlightData} flightData 
     * @returns {Promise<UserData[]>}
     */
    async getPilotData(flightData) {
        // TODO SEAT PROBLEM
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        const adminId = localStorage.getItem("userId");
        let res = await fetch(`http://localhost:8080/main/flight/${flightData.getFlightId()}/getPilots`,{
            mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: headers,
            }
        );

        res = await res.json();
        const data = [];
        for (const el of res) {
            data.push(createUserDataFromJson(el));
        }
        return data;
    },

    /**
     * @param {Date} intervalStart 
     * @param {Date} intervalEnd 
     * @param {Date} airportName 
     * @returns {Promise<FlightData[]>}
     */
    async getFlightsDataFromWithoutFromGoto(intervalStart, intervalEnd, airportName) {
        const flightData = await FlightsCommunication.getAllFlights();
        const data = []
        for (let i = 0; i < flightData.length; i++) {
            if (flightData[i].getLandingTime() >= intervalStart && flightData[i].getDepartureTime() <= intervalEnd && flightData[i].getDedepartureAirport().airportName == airportName) {
                data.push(flightData[i]);
            }
        }
        return data;
    },

    /**
     * @param {String} from 
     * @param {String} goTo 
     * @param {Date} intervalStart 
     * @param {Date} intervalEnd 
     * @returns {Promise<FlightData[]>}
     */
    async getFlightsDataWithoutAirport(from, goTo, intervalStart, intervalEnd) {
        const flightData = await FlightsCommunication.getAllFlights();
        const data = []
        for (let i = 0; i < flightData.length; i++) {
            if (flightData[i].getLandingTime() >= intervalStart && flightData[i].getDepartureTime() <= intervalEnd && flightData[i].getFrom() == from && flightData[i].getGoto() == goTo) {
                data.push(flightData[i]);
            }
        }
        return data;
    },
    /**
     * @param {String} id 
     * @returns {Promise<FlightData>}
     */
    async getFlightByFlightId(id) {
        const flightData = await FlightsCommunication.getAllFlights();
        for (let i = 0; i < flightData.length; i++) {
            if (flightData[i].getFlightId() == id) return flightData[i];
        }
    },
    
    /**
     * @param {String} planeId 
     * @returns {Promise<FlightData>}
     */
    async getFlightByPlaneId(planeId) {
        const flightData = await FlightsCommunication.getAllFlights();
        for (let i = 0; i < flightData.length; i++) {
            if (flightData[i].getPlaneId() == planeId) return flightData[i];
        }
    },

    /**
     * @returns {Promise<FlightData[]>}
     */
    async getAllFlights() {
        let headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        let res = await fetch("http://localhost:8080/api/flights/findAllFlightsDTO", {
            mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: headers,

        })
        res = await res.json();
        let flightDatas = []
        
        for (let item of res) {
            let currentFlight = new FlightData(item.from, item.goTo, item.departureAirport, item.landingAirport, new Date(item.departureTime), new Date(item.landingTime), item.planeType, item.airlineCompany, item.flightId, item.planeId, item.menu);
            flightDatas.push(currentFlight)
        }
        return flightDatas;
    },


    /**
     * @returns {Promise<String[]>}
     */
    async getAirlineCompaniesNames() {
        await new Promise(resolve => setTimeout(resolve, 50));
        return dummyData.dummyDatas.createDummyAirlineCompanies();
    },
    
    /**
     * @returns {Promise<String[]>}
     */
    async getAirPortsNames() {
        await new Promise(resolve => setTimeout(resolve, 50));
        return dummyData.dummyDatas.createDummyAirPort();
    },
    
    /**
     * @param {FlightData} flight 
     * @returns {Promise<Seats>}
     */
    async getSeatsData(flight) {
        await new Promise(resolve => setTimeout(resolve, 50));
        return dummyData.seats[flight.getFlightId().slice(2) - "0"];
    }
}

export { FlightsCommunication }
