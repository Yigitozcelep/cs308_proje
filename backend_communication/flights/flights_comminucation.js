import * as dummyData from "../dummy_data.js";
import { UserData } from "../users/users.js";
import { FlightData, Seats, Seat } from "./flights.js";

const FligtsCommunication = {

    /**
     * @param {String} from 
     * @param {String} goTo 
     * @param {String} airportName
     * @param {Date} intervalStart 
     * @param {Date} intervalEnd 
     * @returns {Promise<FlightData[]>}
     */
    async getFlightsDataFrom(from, goTo, intervalStart, intervalEnd, airportName) {
        await new Promise(resolve => setTimeout(resolve, 50));
        const data = []
        for (let i = 0; i < dummyData.dummyFlights.length; i++) {
            if (dummyData.dummyFlights[i].getLandingTime() >= intervalStart && dummyData.dummyFlights[i].getDepartureTime() <= intervalEnd && dummyData.dummyFlights[i].getFrom() == from && dummyData.dummyFlights[i].getGoto() == goTo && dummyData.dummyFlights[i].getDedepartureAirport().airportName == airportName) {
                data.push(dummyData.dummyFlights[i]);
            }
        }
        return data;
    },

    async deleteFlight() {

    },

    async addFlight() {

    },

    async updateFlight() {

    },

    /**
     * @param {FlightData} flightData 
     * @returns {Promise<UserData[]>}
     */
    async getFlightCrew(flightData) {
        
        return dummyData.crewData[flightData.getPlaineId() - "0"]
    },

    /**
     * @param {Date} intervalStart 
     * @param {Date} intervalEnd 
     * @param {Date} airportName 
     * @returns {Promise<FlightData[]>}
     */
    async getFlightsDataFromWithoutFromGoto(intervalStart, intervalEnd, airportName) {
        await new Promise(resolve => setTimeout(resolve, 50));
        const data = []
        for (let i = 0; i < dummyData.dummyFlights.length; i++) {
            if (dummyData.dummyFlights[i].getLandingTime() >= intervalStart && dummyData.dummyFlights[i].getDepartureTime() <= intervalEnd && dummyData.dummyFlights[i].getDedepartureAirport().airportName == airportName) {
                data.push(dummyData.dummyFlights[i]);
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
        await new Promise(resolve => setTimeout(resolve, 50));
        const data = []
        for (let i = 0; i < dummyData.dummyFlights.length; i++) {
            if (dummyData.dummyFlights[i].getLandingTime() >= intervalStart && dummyData.dummyFlights[i].getDepartureTime() <= intervalEnd && dummyData.dummyFlights[i].getFrom() == from && dummyData.dummyFlights[i].getGoto() == goTo) {
                data.push(dummyData.dummyFlights[i]);
            }
        }
        return data;
    },
    /**
     * @param {String} id 
     * @returns {Promise<FlightData>}
     */
    async getFlightByFlightId(id) {
        await new Promise(resolve => setTimeout(resolve, 50));
        for (let i = 0; i < dummyData.dummyFlights.length; i++) {
            if (dummyData.dummyFlights[i].getFlightId() == id) return dummyData.dummyFlights[i];
        }
    },
    
    /**
     * @param {String} plaineId 
     * @returns {Promise<FlightData>}
     */
    async getFlightByPlaineId(plaineId) {
        await new Promise(resolve => setTimeout(resolve, 50));
        for (let i = 0; i < dummyData.dummyFlights.length; i++) {
            if (dummyData.dummyFlights[i].getPlaineId() == plaineId) return dummyData.dummyFlights[i];
        }
    },

    /**
     * @returns {Promise<FlightData[]>}
     */
    async getAllFlights() {
        return dummyData.dummyFlights;
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

export {FligtsCommunication}