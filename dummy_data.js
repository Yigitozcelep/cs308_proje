const cities = ["Bangkok", "London", "Paris", "Dubai", "Singapore", "New York City", "Istanbul", "Tokyo", "Seoul", "Barcelona", "Amsterdam", "Milan", "Taipei", "Rome", "Osaka", "Bali", "Hong Kong", "Mumbai", "Berlin", "Beijing", "Shanghai", "Madrid", "Las Vegas", "Miami", "Orlando", "San Francisco", "Los Angeles", "Kuala Lumpur", "Vienna", "Prague", "Sydney", "Venice", "Mexico City", "Lisbon", "Bangkok", "Johannesburg", "Cairo", "Athens", "Moscow", "Dubai", "Toronto", "Vancouver", "Istanbul", "Rio de Janeiro", "Buenos Aires", "Santiago", "Lima", "Stockholm", "Copenhagen", "Budapest"]

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

function generateRandomSeat() {
    const randomNumber30To100 = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
    
}

function generateRandomSeats(numberOfSeats) {
    let seats = [];
    for (let i = 0; i < numberOfSeats; i++) {
        seats.push(generateRandomSeat());
    }
    return new Seats(seats);
}

const flightsData = [];

for (let i = 0; i < 10; i++) {
    
}