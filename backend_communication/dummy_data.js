import * as flights from  "./flights/flights.js";
import * as users from "./users/users.js";

const UserTypes = {
    passanger:   "Passsanger",
    cabinCrew:   "CabinCrew",
    pilotCrew:   "PilotCrew",
    admin:       "Admin",
}

const createDummyAirlineCompanies = () => {
    return [ "American Airlines", "Delta Air Lines", "United Airlines", "Southwest Airlines", "Air Canada", "British Airways", "Lufthansa", "Emirates", "Qatar Airways", "Singapore Airlines" ];
}

const createDummyCities = () => {
    return ["Bangkok", "London", "Paris", "Dubai", "Singapore", "New York City", "Istanbul", "Tokyo", "Seoul", "Barcelona", "Amsterdam", "Milan", "Taipei", "Rome", "Osaka", "Bali", "Hong Kong", "Mumbai", "Berlin", "Beijing", "Shanghai", "Madrid", "Las Vegas", "Miami", "Orlando", "San Francisco", "Los Angeles", "Kuala Lumpur", "Vienna", "Prague", "Sydney", "Venice", "Mexico City", "Lisbon", "Bangkok", "Johannesburg", "Cairo", "Athens", "Moscow", "Dubai", "Toronto", "Vancouver", "Istanbul", "Rio de Janeiro", "Buenos Aires", "Santiago", "Lima", "Stockholm", "Copenhagen", "Budapest"]
}

const createDummyPlaneTypes = () => {
    return [ "Boeing 737", "Airbus A320", "Embraer E190", "Bombardier CRJ200", "Cessna Citation X", "Gulfstream G650", "Airbus A380", "Boeing 777", "Learjet 45", "ATR 72" ];
}

const createDummyAirPort = () => {
    return [
        new flights.AirPort("New York", "John F. Kennedy International Airport", "USA"),
        new flights.AirPort("London", "Heathrow Airport", "United Kingdom"),
        new flights.AirPort("Tokyo", "Tokyo International Airport (Haneda)", "Japan"),
        new flights.AirPort("Paris", "Charles de Gaulle Airport", "France"),
        new flights.AirPort("Dubai", "Dubai International Airport", "UAE"),
        new flights.AirPort("Sydney", "Sydney Kingsford Smith Airport", "Australia"),
        new flights.AirPort("Berlin", "Berlin Brandenburg Airport", "Germany"),
        new flights.AirPort("Moscow", "Sheremetyevo International Airport", "Russia"),
        new flights.AirPort("Beijing", "Beijing Capital International Airport", "China"),
        new flights.AirPort("Singapore", "Singapore Changi Airport", "Singapore")
    ];
}


const createDummyUser = (dummyFlights, purchaseId1, purchaseId2, seats1, seats2) => {
    const names       = ["Liam43", "Elijah45", "Charlotte1", "Emma12", "Sophia54", "Ava98", "William99", "Noah67", "Olivia14", "Oliver46"]
    const surnames    = ["Surname1", "Surname2", "Surname3", "Surname4", "Surname5", "Surname6", "Surname7", "Surname8", "Surname9", "Surname10"]
    const password    = ["drn088", "dob735", "ylo940", "ayn112", "bgz490", "weg593", "wog223", "yzc297", "jwx973", "znt151"]
    const nationality = ["Turkey", "England", "Dubai", "Turkey", "Turkey", "Brazil", "Turkey", "Turkey", "Turkey", "Brazil"];
    const gender      = ["Man", "Man", "Man", "Female", "Female", "Female", "Female", "Female", "Man", "Man"];
    const mail        = ["D1@outlook.com", "D2@outlook.com", "D3@outlook.com", "D4@outlook.com", "D5@outlook.com","D6@outlook.com", "D7@outlook.com", "D8@outlook.com", "D9@outlook.com", "D10@outlook.com"];
    const userType    = ["Admin", "Passanger", "Passanger", "Crew", "Crew", "Crew", "Pilot","Pilot", "Pilot", "Pilot"];
    const age         = ["18", "5", "20", "25", "30", "9", "12", "50", "85", "1"];

    const seat1 = seats1.getUnAvaliableSeats().iterateSeats()[0];
    const seat2 = seats2.getUnAvaliableSeats().iterateSeats()[0];
    // email, password, name, surname, Id, age, gender, nationality, userType, flights, canRejectFlight, pendingFlight
    return new users.UserData(
        mail[purchaseId1 / 2],
        password[purchaseId1 / 2],
        names[purchaseId1 / 2],
        surnames[purchaseId1 / 2],
        purchaseId1,
        age[purchaseId1 / 2],
        gender[purchaseId1 / 2],
        nationality[purchaseId1 / 2],
        userType[purchaseId1 / 2],
        [new users.UserFlightData(dummyFlights[purchaseId1], seat1, getRandomFutureDate(), purchaseId1), new users.UserFlightData(dummyFlights[purchaseId2], seat2, getRandomFutureDate(), purchaseId2)],
        true,
        dummyFlights[0],
    )
}


const getRandomFutureDate = () => {
    const today              = new Date();
    const randomNumberOfDays = Math.floor(Math.random() * 30);
    return new Date(today.setDate(today.getDate() + randomNumberOfDays));
}

const createDummyFlightData = () => {
    const dummyFlightData = [];
    const cities = createDummyCities();
    const airports = createDummyAirPort();
    const planeTypes = createDummyPlaneTypes();
    const airlineCompanies = createDummyAirlineCompanies();

    for (let i = 0; i < 500; i++) {
        const r1 = Math.floor(Math.random() * 10);
        let r2 = Math.floor(Math.random() * 10);
        if (r2 == r1) r2 = (r1 + 1) % 10;
        let planeTypeId = i % 10;
        let r3 = Math.floor(Math.random() * 10);
        let r4 = Math.floor(Math.random() * 10);
        if (r3 == r4) r3 = (r4 + 1) % 10;
        
        const from              = cities[r1];
        const goTo              = cities[r2];
        const departureAirport  = airports[r3];
        const landingAirport    = airports[r4];
        const departureTime     = getRandomFutureDate();
        const landingTime       = new Date(departureTime.getTime() + (2 + i) * 60 * 60 * 1000);
        const planeType         = planeTypes[i % 10];
        const flightTime        = new Date(0, 0, 0, 2 + i);
        const airlineCompany    = airlineCompanies[i % 10];
        const flightId          = "TK" + i;
        const planeId          = i;
        dummyFlightData.push(new flights.FlightData(from, goTo, departureAirport, landingAirport, departureTime, landingTime, planeType, airlineCompany, flightId, i, i.toString()));
    }
    return dummyFlightData;
}

const getStatus = () => {
    if (Math.random() < 0.5) return flights.SeatStatus.avaliable;
    return flights.SeatStatus.unAvaliable;
}

const createDummySeatData = () => {
    const seads = [];
    let seadCount = Math.floor(Math.random() * 100 + 100);
    const rowCount  = Math.floor(Math.random() * 2) + 2;
    const bussinessConsecutiveSeat = Math.floor(Math.random() * 2) + 2;
    let ecenomyConsecutiveSeat   = Math.floor(Math.random() * 2) + 2;
    if (bussinessConsecutiveSeat == 3) ecenomyConsecutiveSeat = 3;

    const BussinessCount = (Math.floor(seadCount / (rowCount * bussinessConsecutiveSeat * 10))) * rowCount * bussinessConsecutiveSeat;
    const EcenomyCount   = (Math.floor((BussinessCount * 9) / (rowCount * ecenomyConsecutiveSeat))) * rowCount * ecenomyConsecutiveSeat;
    seadCount = BussinessCount + EcenomyCount;

    const bussinessRowSeadCount = (BussinessCount / (rowCount * bussinessConsecutiveSeat));
    for (let row = 0; row < rowCount; row++) {
        for (let i = 1; i <= bussinessRowSeadCount; i++) {
            for (let j = 0; j < bussinessConsecutiveSeat; j++) {
                const userId = Math.floor(Math.random() * 10) * 2;
                const char = String(i) + String.fromCharCode(65 + row * bussinessConsecutiveSeat + j);
                seads.push(new flights.Seat(char, flights.SeatTypes.bussiness, getStatus(), userId));
            }
        }
    }

    const ecenomyRowSeadCount = (EcenomyCount / (rowCount * ecenomyConsecutiveSeat));

    for (let row = 0; row < rowCount; row++) {
        for (let i = 1 + bussinessRowSeadCount; i <= ecenomyRowSeadCount; i++) {
            for (let j = 0; j < ecenomyConsecutiveSeat; j++) {
                const char = String(i) + String.fromCharCode(65 + row * ecenomyConsecutiveSeat + j);
                const userId = Math.floor(Math.random() * 10) * 2;
                seads.push(new flights.Seat(char, flights.SeatTypes.ecenomy, getStatus(), userId));
            }
        }
    }

    return new flights.Seats(seads, rowCount, bussinessConsecutiveSeat, ecenomyConsecutiveSeat);
}   

const seats      = []
const dummyUsers = []
const dummyFlights = createDummyFlightData();
const crewData = []

for (let i = 0; i < 500; i++) { }
for (let i = 0; i < 500; i++) seats.push(createDummySeatData())
for (let i = 0; i < 20; i += 2) dummyUsers.push(createDummyUser(dummyFlights, i, i + 1, seats[i], seats[i + 1]));
for (let i = 0; i < 500; i++) {
    crewData.push([]);
    for (let j = 0; j < 10; j++) {
        const cloneUser = dummyUsers[j];
        cloneUser.userType = (j < 2) ?  UserTypes.pilotCrew : UserTypes.cabinCrew;
        crewData[crewData.length - 1].push(cloneUser);
    }
}

window.currentUser = dummyUsers[0];
window.currentFlight = dummyFlights[5];

export {createDummyAirlineCompanies, createDummyCities, createDummyPlaneTypes, createDummyAirPort, createDummyUser, createDummyFlightData, createDummySeatData, seats, dummyUsers, dummyFlights, crewData}
