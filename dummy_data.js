const cities = ["Bangkok", "London", "Paris", "Dubai", "Singapore", "New York City", "Istanbul", "Tokyo", "Seoul", "Barcelona", "Amsterdam", "Milan", "Taipei", "Rome", "Osaka", "Bali", "Hong Kong", "Mumbai", "Berlin", "Beijing", "Shanghai", "Madrid", "Las Vegas", "Miami", "Orlando", "San Francisco", "Los Angeles", "Kuala Lumpur", "Vienna", "Prague", "Sydney", "Venice", "Mexico City", "Lisbon", "Bangkok", "Johannesburg", "Cairo", "Athens", "Moscow", "Dubai", "Toronto", "Vancouver", "Istanbul", "Rio de Janeiro", "Buenos Aires", "Santiago", "Lima", "Stockholm", "Copenhagen", "Budapest"]
const planeTypes = [ "Boeing 737", "Airbus A320", "Embraer E190", "Bombardier CRJ200", "Cessna Citation X", "Gulfstream G650", "Airbus A380", "Boeing 777", "Learjet 45", "ATR 72" ];
const airlineCompanies = [ "American Airlines", "Delta Air Lines", "United Airlines", "Southwest Airlines", "Air Canada", "British Airways", "Lufthansa", "Emirates", "Qatar Airways", "Singapore Airlines" ];

const airports = [
    new AirPort("New York", "John F. Kennedy International Airport", "USA"),
    new AirPort("London", "Heathrow Airport", "United Kingdom"),
    new AirPort("Tokyo", "Tokyo International Airport (Haneda)", "Japan"),
    new AirPort("Paris", "Charles de Gaulle Airport", "France"),
    new AirPort("Dubai", "Dubai International Airport", "UAE"),
    new AirPort("Sydney", "Sydney Kingsford Smith Airport", "Australia"),
    new AirPort("Berlin", "Berlin Brandenburg Airport", "Germany"),
    new AirPort("Moscow", "Sheremetyevo International Airport", "Russia"),
    new AirPort("Beijing", "Beijing Capital International Airport", "China"),
    new AirPort("São Paulo", "São Paulo–Guarulhos International Airport", "Brazil")
];


const users = [
    { userName: "JaneDoe", password: "securePassword123",      id: 1 },
    { userName: "JohnSmith", password: "anotherGreatPass88",   id: 2 },
    { userName: "AliceJones", password: "passwordAlice2024",   id: 3 },
    { userName: "CharlieBrown", password: "charliePass!2024",  id: 4 },
    { userName: "DianaPrince", password: "wonderfulDiana$",    id: 5 },
    { userName: "EthanHunt", password: "missionPossible2024",  id: 6 },
    { userName: "FionaGallagher", password: "fionaShameless",  id: 7 },
    { userName: "GeorgeLucas", password: "starWarsFan1977",    id: 8 },
    { userName: "HannahBaker", password: "bakerHannah13",      id: 9 },
    { userName: "IanMalcolm", password: "jurassicPark1993",    id: 10}
];



function getRandomFutureDate() {
    const today              = new Date();
    const randomNumberOfDays = Math.floor(Math.random() * 30);
    return new Date(today.setDate(today.getDate() + randomNumberOfDays));
}

const dummyFlightData = [];
const dummySeads      = [];

for (let i = 0; i < 10; i++) {
    const from              = cities[i];
    const goTo              = cities[(i + 1) % 10];
    const departureAirport  = airports[i];
    const landingAirport    = airports[(i + 1) % 10];
    const departureTime     = getRandomFutureDate();
    const landingTime       = new Date(departureTime.getTime() + (2 + i) * 60 * 60 * 1000);
    const planeType         = planeTypes[i];
    const flightTime        = new Date(0, 0, 0, 2 + i);
    const airlineCompany    = airlineCompanies[i];
    const flightId          = i;
    dummyFlightData.push(new FlightData(from, goTo, departureAirport, landingAirport, departureTime, landingTime, planeType, flightTime, airlineCompany, flightId));
}


for (let i = 0; i < 10; i++) {

}