


window.addEventListener('load', function() {
    document.getElementById('searchType').dispatchEvent(new Event('change'));
});


document.getElementById('searchType').addEventListener('change', function() {
    var selectedOption = this.value;
    var inputFields = document.querySelectorAll('.input-field');
    
    inputFields.forEach(function(inputField) {
        if (inputField.id === selectedOption + 'Input') {
            inputField.style.display = 'block';
                   
        } else {
            inputField.style.display = 'none';
        }
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var selectedOption = document.getElementById('searchType').value;
    var inputValue = '';

    if (selectedOption === 'flightNo') 
    {
        inputValue = document.getElementById('flightNo').value;
        document.getElementById('flightNo').value = ''; 
    } 
    else if (selectedOption === 'route') 
    {
        var departure = document.getElementById('departure').value;
        var arrival = document.getElementById('arrival').value;
        var depTime = document.getElementById('depTime').value;
        var arrTime = document.getElementById('arrTime').value;
        BackEndController.getFlightsData(departure, arrival, depTime, arrTime)
        
    }
    
 
        alert(inputValue);
});
