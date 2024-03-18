document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    

    var flightNo = document.getElementById("fno").value;
    var flightDate = document.getElementById("fdate").value;
    var arrival = document.getElementById("arr").value;
    
    alert("Flight No: " + flightNo + "\nFlight Date: " + flightDate + "\nArrival: " + arrival);
});