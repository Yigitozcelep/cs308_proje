import * as dummyData from "../dummy_data.js";
import { FlightData, Seat } from "../flights/flights.js";
import { UserData, UserFlightData, UserTypes } from "./users.js";




const UserCommunication = {
    /**
     * @param {String} email 
     * @param {String} password 
     * @returns {Promise<Boolean>}
     */
    async isValidUser(email, password) {
        console.log(email, password)
        var myHeaders = new Headers();
        // josh_flight@gmail.com
        // pswrd4321
        var requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({username: email, password: password})
    };
        const response = await fetch("http://localhost:8080/auth/login", requestOptions);
        return response.status == 200;
    },
    
    /**
     * @param {String} email 
     * @param {String} password F
     * @returns {Promise<UserData>}
     */
    async getUserData(email, password) {
        // josh_flight@gmail.com
        // pswrd4321

        var requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({username: email, password: password})
    };
        let response = await fetch("http://localhost:8080/auth/login", requestOptions);
        response = await response.json()
        console.log(response)
        localStorage.setItem("token", response.jwt);
        let user = new UserData();
        user.Id = response.user.id
        user.email = response.user.username;
        user.password = response.user.password;
        user.userType = response.user.authorities[0].authority;
        return user;
    },

    /**
     * @param {String} email 
     * @returns {Promise<UserData>}
     */
    async getUserDataByEmail(email) {
        await new Promise(resolve => setTimeout(resolve, 50));
        for (let i = 0; i < dummyData.dummyUsers.length; i++) {
            if (dummyData.dummyUsers[i].email == email) return dummyData.dummyUsers[i];
        }
        return 0;
    },
    /**
     * @param {UserData} user 
     */
    async deleteUser(user) {
        await new Promise(resolve => setTimeout(resolve, 50));
        for (let i = 0; i < dummyData.dummyUsers.length; i++) {
            if (dummyData.dummyUsers[i].email == user.email && dummyData.dummyUsers[i].password == user.password) {
                delete dummyData.dummyUsers[i];
                return;
            }
        }
    },

    /**
     * localstorageda current user idsi  var
     * @param {FlightData} flight 
     * @param {Seat} seat 
     */
    async buySeat(flight, seat) {
        await new Promise(resolve => setTimeout(resolve, 50));

    },
    
    /**
     * localstorageda current user idsi var
     * @param {UserFlightData} userFlight 
     */
    async refundSeat(userFlight) {
        await new Promise(resolve => setTimeout(resolve, 50));
    },

    /**
     * localstorageda current user idsi var
     * @param {UserData} user
     */
    async updateUser(user) {
        await new Promise(resolve => setTimeout(resolve, 50));
    },

    /**
     * @param {String} id 
     * @returns {Promise<UserData>}
     */
    async getUserById(id) {
        await new Promise(resolve => setTimeout(resolve, 50));
        for (let el of dummyData.dummyUsers) {
            if (el.Id == id) { return el; }
        }
    },

    /**
     * @param {UserData} user 
     * @param {FlightData} flight 
     */
    async refuseFlight(user, flight) {
        await new Promise(resolve => setTimeout(resolve, 50));
    },
    
    /**
     * @param {UserData} userData 
     */
    async createUser(userData) {
        if (userData.userType == UserTypes.passanger) {
            console.log("currentUser: ", userData);
            var requestOptions = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            method: 'POST',
            redirect: 'follow',
            body: JSON.stringify({firstName: userData.name, lastName: userData.surname, username: userData.email, password: userData.password, age: userData.age, gender: userData.gender, nationality: userData.nationality})
        };  
        
            let response = await fetch("http://localhost:8080/auth/register", requestOptions);
            response = await response.json()
            console.log(response)
            return user;
        }
        else if (userData.userType == UserTypes.pilotCrew) {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');    
            headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
            let res = await fetch("http://localhost:8080/api/pilots/createPilot" , {
                mode: 'cors',
                credentials: 'include',
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                    firstName: userData.name,
                    surname: userData.surname,
                    age: userData.age,
                    gender: userData.gender,
                    nationality: userData.nationality,
                    seniority: userData.seniority,
                    languages: userData.languages
                })
            });
            res = await res.json();
        }


        else if (userData.userType == UserTypes.cabinCrew) {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');    
            headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
            let res = await fetch("http://localhost:8080/api/attendants/createAttendant" , {
                mode: 'cors',
                credentials: 'include',
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                    firstName: userData.name,
                    surname: userData.surname,
                    age: userData.age,
                    gender: userData.gender,
                    nationality: userData.nationality,
                    seniority: userData.seniority,
                    languages: userData.languages,
                    recipes: userData.recipe
                })
            });
            res = await res.json();
            console.log("res: ", res);
        }
    },
}

export { UserCommunication }