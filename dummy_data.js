import { AirPort, FlightData, Seat, SeatTypes, Seats, SeatStatus, UserData, UserFlightData } from "./backend_communication.js";

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
        new AirPort("New York", "John F. Kennedy International Airport", "USA"),
        new AirPort("London", "Heathrow Airport", "United Kingdom"),
        new AirPort("Tokyo", "Tokyo International Airport (Haneda)", "Japan"),
        new AirPort("Paris", "Charles de Gaulle Airport", "France"),
        new AirPort("Dubai", "Dubai International Airport", "UAE"),
        new AirPort("Sydney", "Sydney Kingsford Smith Airport", "Australia"),
        new AirPort("Berlin", "Berlin Brandenburg Airport", "Germany"),
        new AirPort("Moscow", "Sheremetyevo International Airport", "Russia"),
        new AirPort("Beijing", "Beijing Capital International Airport", "China"),
        new AirPort("Singapore", "Singapore Changi Airport", "Singapore")
    ];
}

const createDummyUser = (dummyFlights, purchaseId1, purchaseId2, seats1, seats2) => {
    const usernames = ["Liam43", "Elijah45", "Charlotte1", "Emma12", "Sophia54", "Ava98", "William99", "Noah67", "Olivia14", "Oliver46"]
    const password  = ["drn088", "dob735", "ylo940", "ayn112", "bgz490", "weg593", "wog223", "yzc297", "jwx973", "znt151"]
    const seat1 = seats1.getUnAvaliableSeats().iterateSeats()[0];
    const seat2 = seats2.getUnAvaliableSeats().iterateSeats()[0];

    return new UserData(usernames[purchaseId1 / 2], password[purchaseId1 / 2], purchaseId1 / 2, [new UserFlightData(dummyFlights[purchaseId1], seat1, getRandomFutureDate(), purchaseId1), new UserFlightData(dummyFlights[purchaseId2], seat2, getRandomFutureDate(), purchaseId2)])
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
        
        let r3 = Math.floor(Math.random() * 10);
        let r4 = Math.floor(Math.random() * 10);
        if (r3 == r4) r3 = (r4 + 1) % 10;
        
        const from              = cities[r1];
        const goTo              = cities[r2];
        const departureAirport  = airports[r3];
        const landingAirport    = airports[r4];
        const departureTime     = getRandomFutureDate();
        const landingTime       = new Date(departureTime.getTime() + (2 + i) * 60 * 60 * 1000);
        const planeType         = planeTypes[i];
        const flightTime        = new Date(0, 0, 0, 2 + i);
        const airlineCompany    = airlineCompanies[i % 10];
        const flightId          = "TK" + i;
        dummyFlightData.push(new FlightData(from, goTo, departureAirport, landingAirport, departureTime, landingTime, planeType, flightTime, airlineCompany, flightId));
    }
    return dummyFlightData;
}

const getPrice = (isBussiness) => {
    if (isBussiness) return  Math.floor(Math.random() * 500) + 500;
    return  Math.floor(Math.random() * 200) + 200;
}

const getStatus = () => {
    if (Math.random() < 0.5) return SeatStatus.avaliable;
    return SeatStatus.unAvaliable;
}

const createDummySeatData = () => {
    const seads = [];
    let seadCount = Math.floor(Math.random() * 300 + 130);
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
                const char = String(i) + String.fromCharCode(65 + row * bussinessConsecutiveSeat + j);
                seads.push(new Seat(char, SeatTypes.bussiness, getPrice(true), getStatus()));
            }
        }
    }

    const ecenomyRowSeadCount = (EcenomyCount / (rowCount * ecenomyConsecutiveSeat));

    for (let row = 0; row < rowCount; row++) {
        for (let i = 1 + bussinessRowSeadCount; i <= ecenomyRowSeadCount; i++) {
            for (let j = 0; j < ecenomyConsecutiveSeat; j++) {
                const char = String(i) + String.fromCharCode(65 + row * ecenomyConsecutiveSeat + j);
                seads.push(new Seat(char, SeatTypes.ecenomy, getPrice(false), getStatus()));
            }
        }
    }

    return new Seats(seads, rowCount, bussinessConsecutiveSeat, ecenomyConsecutiveSeat);
}   

export {createDummyAirlineCompanies, createDummyCities, createDummyPlaneTypes, createDummyAirPort, createDummyUser, createDummyFlightData, createDummySeatData}