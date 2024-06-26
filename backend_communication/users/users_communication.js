import * as dummyData from "../dummy_data.js";
import { FlightData, Seat } from "../flights/flights.js";
import { UserData, UserFlightData, UserTypes, createUserDataFromJson } from "./users.js";




const UserCommunication = {
    /**
     * @param {String} email 
     * @param {String} password 
     * @returns {Promise<Boolean>}
     */
    async isValidUser(email, password) {
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
        localStorage.setItem("token", response.jwt);
        let user = new UserData();
        user.Id = response.user.id
        user.email = response.user.username;
        user.password = response.user.password;
        user.userType = response.user.authorities[0].authority;
        return user;
    },

    /**
     * @param {String} userId 
     * @param {String} userType
     */
    async addMemberToFlight(userId, userType) {
        console.log("userId: ", userId);
        const flightId = localStorage.getItem("flightIdView");
        console.log("flightId: ", flightId);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        let url;

        if (userType === UserTypes.cabinCrew) url = `http://localhost:8080/main/attendant/${userId}/assignToFlight/${flightId}`;
        if (userType === UserTypes.pilotCrew) url = `http://localhost:8080/main/pilot/${userId}/assignToFlight/${flightId}`;
        let res = await fetch(url, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers,
        });
        
    },


    /**
     * @param {UserData} userData 
     * @returns {Promise<bool>}
     */
    async forgetPassword(userData) {
        var requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify({username: userData.email, password: userData.password})
    };
        let res = await fetch("http://localhost:8080/auth/forgetPassword", requestOptions);
        res = await res.json();
        return res.status == 200;
    },

    /**
     * localstorageda current user idsi  var
     * @param {FlightData} flight 
     * @param {Seat} seat 
     */
    async buySeat(flight, seat, isParent) {
        const passengerId = localStorage.getItem("userId");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        console.log("seat: ", seat.getSeatPosition());
        let res = await fetch(`http://localhost:8080/main/passenger/${localStorage.getItem("userId")}/bookFlight/${flight.getFlightId()}/${isParent}`, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                seatPosition: seat.getSeatPosition(),
                seatType: seat.getSeatType(),
                status: !seat.isSeatAvaliable(),
                userId: seat.getUserId(),
            })
        });
        console.log("res:", res);
        res = await res.json();
    },

    async autoBuySeat() {
        const passengerId = localStorage.getItem("userId");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        const flightID = localStorage.getItem("flightIdView");
        let res = await fetch(`http://localhost:8080/main/passenger/${localStorage.getItem("userId")}/bookFlightAuto/${flightID}/F/true`, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers,
        });
        res = await res.json();
        console.log("res: ", res);
    },
    
    /**
     * localstorageda current user idsi var
     * @param {String} purchaseId 
     */
    async refundSeat(purchaseId) {
        const passangerId = localStorage.getItem("userId");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        let res = await fetch(`http://localhost:8080/main/passenger/${passangerId}/cancelBooking/${purchaseId}`, {
            mode: 'cors',
            credentials: 'include',
            method: 'DELETE',
            headers: headers,
        });
        return res.status == 200;
    },

    /**
     * localstorageda current user idsi var
     * @param {UserData} user
     */
    async updateUser(user) {
        let userType = localStorage.getItem("userType");
        let beforeUser;
        if (userType === UserTypes.admin) beforeUser = user;
        if (userType === UserTypes.admin) {
            userType = user.userType;
        }
        else beforeUser = await UserCommunication.getUserById();
        console.log("beforeUser: ", beforeUser);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        let res

        if (userType == UserTypes.cabinCrew) {
            res = await fetch(`http://localhost:8080/api/attendants/${user.Id}`, {
            mode: 'cors',
            credentials: 'include',
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                attendantId: user.Id,
                email: user.email,
                password: user.password,
                firstName: user.name,
                surname: user.surname,
                age: user.age,
                gender: user.gender,
                nationality: user.nationality,
                seniority: user.seniority,
                languages: user.languages,
                recipes: (user.recipe) ? (user.recipe) : "",
            })
        });
        }
        else if (userType == UserTypes.pilotCrew)
        {
            res = await fetch(`http://localhost:8080/api/pilots/${user.Id}`, {
            mode: 'cors',
            credentials: 'include',
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                pilotId: user.Id,
                email: user.email,
                password: user.password,
                firstName: user.name,
                surname: user.surname,
                age: user.age,
                gender: user.gender,
                nationality: user.nationality,
                seniority: user.seniority,
                languages: user.languages,
                allowedRange: beforeUser.allowedRange
            })
            });
        }
        else if (userType == UserTypes.passanger) {
            res = await fetch(`http://localhost:8080/api/passengers/update/${user.Id}`, {
            mode: 'cors',
            credentials: 'include',
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                name: user.name,
                surname: user.surname,
                id: user.Id,
                age: user.age,
                gender: user.gender,
                nationality: user.nationality,
                userType: "passenger",
                flights: null,
                seniority: null,
                languages: null,
                recipe: null,
            })
            });
        }
        console.log("res: ", res);
        return res.status == 200;
    },

    /**
     * @returns {Promise<UserData>}
     */

    async getUserById() {
        // TODO problem need to construct 
        const userType = localStorage.getItem("userType");
        const id       = localStorage.getItem("userId");
        console.log("userType: ", userType);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        let url = "";
        if (userType == UserTypes.pilotCrew) url = `http://localhost:8080/main/pilot/${id}/getFlights`;
        if (userType == UserTypes.cabinCrew) url = `http://localhost:8080/main/attendant/${id}/getFlights`;
        if (userType == UserTypes.passanger) url = `http://localhost:8080/main/passenger/${id}/getFlights`;
        console.log("url: ", url);
        let res = await fetch(url, {
                mode: 'cors',
                credentials: 'include',
                method: 'GET',
                headers: headers,
            });
        res = await res.json();
        return createUserDataFromJson(res);
    },

    /**
     * @param {String} userId 
     * @returns {Promise<UserData>}
     */
    async getPassangerById(userId) {
           let headers = new Headers();
           headers.append('Content-Type', 'application/json');
           headers.append('Accept', 'application/json');    
           headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
           let url = `http://localhost:8080/main/passenger/${userId}/getFlights`;
           let res = await fetch(url, {
                   mode: 'cors',
                   credentials: 'include',
                   method: 'GET',
                   headers: headers,
               });
           res = await res.json();
           return createUserDataFromJson(res);
    },
    
    /**
     * @param {UserData} userData 
     * @param {FlightData} flightData 
     */
    async assignCrewToFlight(userData, flightData) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        let res = await fetch(`http://localhost:8080/main/attendant/${userData.Id}/assignToFlight/${flightData.getFlightId()}`, {
            mode: 'cors',
            credentials: 'include',
            method: 'POST',
            headers: headers,
        });
        res = await res.json();
        return res.status == 200;
    },

    /**
     * @param {UserData} userData 
     * @param {FlightData} flightData 
     * @returns {Promise<Boolean>}
     */
    async removeCrewFromFlight(userData, flightData) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');    
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
        console.log("userData: ", userData);
        let url;
        if (userData.isUserPilotCrew()) url = `http://localhost:8080/main/pilot/${userData.Id}/removeFromFlight/${flightData.getFlightId()}`;
        if (userData.isUserCabinCrew()) url = `http://localhost:8080/main/attendant/${userData.Id}/removeFromFlight/${flightData.getFlightId()}`;
        let res = await fetch(url, {
            mode: 'cors',
            credentials: 'include',
            method: 'DELETE',
            headers: headers,
        });
        res = await res.json();
        console.log("res: ", res);
        return res.status == 200;
    },

    /**
     * @param {UserData} user 
     * @param {FlightData} flight 
     */
    async refuseFlight(user, flight) {
        UserCommunication.removeCrewFromFlight(user, flight);
    },
    
    /**
     * @param {UserData} userData 
     */
    async createUser(userData) {
        console.log("user type:", userData.userType);
        if (userData.userType == UserTypes.passanger) {
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
            return response.status == 200;
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
                    languages: userData.languages,
                    allowedRange: userData.allowedRange,
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
        }
    },

    /**
     * @param {FlightData} flightData 
     * @returns {Promise<UserData[]>}
     */
    async getAvailableCrew(flightData) {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');    
            headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
            let res = await fetch(`http://localhost:8080/main/flight/${flightData.getFlightId()}/getAvailableAttendants`, {
                mode: 'cors',
                credentials: 'include',
                method: 'GET',
                headers: headers,
            });
            console.log("res::", res);            
            res = await res.json();
            return res;
    },
}

export { UserCommunication }