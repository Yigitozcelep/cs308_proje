import { getText } from "../dictionary.js";
import { FligtsCommunication } from "../backend_communication/flights/flights_comminucation.js";
import { seats } from "../backend_communication/dummy_data.js";


const initializeFlightImg = async () => {
    const res = await FligtsCommunication.getSeatsData(window.currentFlight);
    console.log(res);
}

initializeFlightImg();