import * as dummyData from "../dummy_data.js";
import { FlightData } from "./flights.js";

const FligtsCommunication = {

    /**
     * @param {String} from 
     * @param {String} goTo 
     * @param {String} airportName
     * @param {Date} intervalStart 
     * @param {Date} intervalEnd 
     * @returns {Promise<FlightData[]>}
     */

    async getFlightsData(from, goTo, intervalStart, intervalEnd, airportName) {
        await new Promise(resolve => setTimeout(resolve, 200));
        const data = []
        for (let i = 0; i < dummyData.dummyFlights.length; i++) {
            if (dummyData.dummyFlights[i].getLandingTime() >= intervalStart && dummyData.dummyFlights[i].getDepartureTime() <= intervalEnd && dummyData.dummyFlights[i].getFrom() == from && dummyData.dummyFlights[i].getGoto() == goTo && dummyData.dummyFlights[i].getDedepartureAirport().airportName == airportName) {
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
        await new Promise(resolve => setTimeout(resolve, 200));
        for (let i = 0; i < dummyData.dummyFlights.length; i++) {
            if (dummyData.dummyFlights[i].getFlightId() == id) return dummyData.dummyFlights[i];
        }
    },
    
    /**
     * @param {String} plaineId 
     * @returns {Promise<FlightData>}
     */
    async getFlightByPlaineId(plaineId) {
        await new Promise(resolve => setTimeout(resolve, 200));
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
        await new Promise(resolve => setTimeout(resolve, 200));
        return dummyData.dummyDatas.createDummyAirlineCompanies();
    },
    
    /**
     * @returns {Promise<String[]>}
     */
    async getAirPortsNames() {
        await new Promise(resolve => setTimeout(resolve, 200));
        return dummyData.dummyDatas.createDummyAirPort();
    },
    
    /**
     * @param {FlightData} flight 
     * @returns {Promoise<Seats>}
     */
    async getSeatsData(flight) {
        await new Promise(resolve => setTimeout(resolve, 300));
        return dummyData.seats[flight.getFlightId().slice(2) - "0"];
    }
}