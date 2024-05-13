import * as dummyData from "../dummy_data.js";
import { Seat } from "../flights/flights.js";
import { UserData, UserFlightData } from "./users.js";


const UserCommunication = {
    /**
     * @param {String} email 
     * @param {String} password 
     * @returns {Promise<Boolean>}
     */
    async isValidUser(email, password) {
        await new Promise(resolve => setTimeout(resolve, 200));
        for (let i = 0; i < dummyData.dummyUsers.length; i++) {
            if (dummyData.dummyUsers[i].userName == userName && dummyData.dummyUsers[i] == password) return true;
        }
        return false;
    },
    
    /**
     * @param {String} email 
     * @param {String} password 
     * @returns {Promise<UserData>}
     */
    async getUserData(email, password) {
        
        await new Promise(resolve => setTimeout(resolve, 200));
        for (let i = 0; i < dummyData.dummyUsers.length; i++) {
            if (dummyData.dummyUsers[i].email == email && dummyData.dummyUsers[i].password == password) return dummyData.dummyUsers[i];
        }
    },

    /**
     * @param {String} email 
     * @returns {Promise<UserData>}
     */
    async getUserDataByEmail(email) {
        await new Promise(resolve => setTimeout(resolve, 200));
        for (let i = 0; i < dummyData.dummyUsers.length; i++) {
            if (dummyData.dummyUsers[i].email == email) return dummyData.dummyUsers[i];
        }
        return 0;
    },
    /**
     * @param {UserData} user 
     */
    async deleteUser(user) {
        await new Promise(resolve => setTimeout(resolve, 200));
        for (let i = 0; i < dummyData.dummyUsers.length; i++) {
            if (dummyData.dummyUsers[i].email == user.email && dummyData.dummyUsers[i].password == user.password) {
                delete dummyData.dummyUsers[i];
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

    },
    
    /**
     * @param {UserFlightData} userFlight 
     */
    async refundSeat(userFlight) {
        await new Promise(resolve => setTimeout(resolve, 200));
    },

    /**
     * @param {UserData} user
     */
    async updateUser(user) {
        await new Promise(resolve => setTimeout(resolve, 200));
    }
}

export { UserCommunication }