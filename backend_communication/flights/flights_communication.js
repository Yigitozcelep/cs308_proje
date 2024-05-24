import * as dummyData from "../dummy_data.js"
import { UserData } from "../users/users.js";
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
     */
    async deleteFlight(flightId) {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        let res = await fetch("http://localhost:8080/api/flights/deleteFlightByNumber?flightNumber=" + flightId, {
            mode: 'cors',
            credentials: 'include',
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({flightNumber: flightId})
        });
        res = await res.json();
        return res.status == 200;
    },

    /**
     * @param {FlightData} flight 
     */
    async addFlight(flight) {

    },

    /**
     * @param {FlightData} flight 
     */
    async updateFlight(flight) {

    },

    /**
     * @param {FlightData} flightData 
     * @returns {Promise<UserData[]>}
     */
    async getFlightCrew(flightData) {

        

        return dummyData.crewData[flightData.getPlaneId() - "0"]
    },


    /**
     * @param {FlightData} flightData 
     * @returns {Promise<UserData[]>} 
     */
    async getPassangerData(flightData) {
        return dummyData.dummyUsers;
    },
    /**
     * @param {FlightData} flightData 
     * @returns {Promise<UserData[]>}
     */
    async getPilotData(flightData) {
        return dummyData.dummyUsers;
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
        let res = await fetch("http://localhost:8080/api/flights/", {
            mode: 'cors',
            credentials: 'include',
            method: 'GET',
            headers: headers,

        })
        res = await res.json();
        let flightDatas = []
        for (let item of res) {
            console.log(item.departureTime);
            let currentFlight = new FlightData(item.from, item.goTo, item.departureAirport, item.landingAirport, new Date(item.departureTime), new Date(item.landingTime), item.planeType, item.airlineCompany, item.flightId, item.planeId, item.menu);
            flightDatas.push(currentFlight)
        }
        console.log(flightDatas);
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