import { getText } from "../dictionary.js";
import { FligtsCommunication } from "../backend_communication/flights/flights_comminucation.js";
import { seats } from "../backend_communication/dummy_data.js";

console.log(window.currentUser);
console.log(window.currentFlight);

FligtsCommunication.getSeatsData();
