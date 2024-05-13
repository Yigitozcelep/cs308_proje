import { getText } from "../dictionary.js";
import { FligtsCommunication } from "../backend_communication/flights/flights_comminucation.js";
import { dummyFlights, seats } from "../backend_communication/dummy_data.js";

const airPlaineDiv = document.getElementById("airplaine");
const airPlaineLeft = 280;
const airPlaineTop  = 70 + 240;


const initializeFlightImg = async () => {
    const mainDiv = document.getElementById("seats");
    const res = await FligtsCommunication.getSeatsData(window.currentFlight);
    let maxSeatNum = 0;
    res.iterateSeats().forEach(s => {
        if (maxSeatNum < s.getSeatNumber() - "0")  maxSeatNum = s.getSeatNumber() - "0";
    })
    
    const airPlaineWidth  = 800;
    const airPlaineHeight = 200;
    const bussinessHeight = airPlaineHeight / (res.getRowCount() * res.getBussinessConsecutiveSeat() + res.getRowCount() - 1);
    const ecenomyHeight   = airPlaineHeight / (res.getRowCount() * res.getEcenomyConsecutiveSeat() + res.getRowCount() - 1);
    const width = airPlaineWidth / (maxSeatNum * 1.8);
    res.iterateSeats().forEach(seat => {
        const row = seat.getSeatLetter().charCodeAt() - 'A'.charCodeAt();
        const column = seat.getSeatNumber() - "1";
        const img = document.createElement("img");
        if (seat.isSeatBussiness()) {
            img.src = (seat.isSeatAvaliable()) ? "svgs/bussinessSeatAvaliable.svg" : "svgs/bussinessSeatUnAvaliable.svg"
            img.style.height = bussinessHeight + "px";
            img.style.width = width + "px";
            img.style.top = (airPlaineTop + (row + Math.floor(row / res.getBussinessConsecutiveSeat())) * bussinessHeight) + "px";
            img.style.position = "absolute";
            img.style.left = (airPlaineLeft + width * 1.8 * column) + "px";
        }
        else {
            img.src = (seat.isSeatAvaliable()) ? "svgs/normalSeatAvaliable.svg" : "svgs/normalSeatUnAvaliable.svg"
            img.style.height = ecenomyHeight + "px";
            img.style.width = width + "px";
            img.style.top = (airPlaineTop + (row + Math.floor(row / res.getEcenomyConsecutiveSeat())) * ecenomyHeight) + "px";
            img.style.position = "absolute";
            img.style.left = (airPlaineLeft + width * 1.8 * column) + "px";
        }
        mainDiv.appendChild(img);

    });
    
}
console.log(dummyFlights)
initializeFlightImg();