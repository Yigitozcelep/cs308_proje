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

    if (selectedOption === 'flightNo') {
        inputValue = document.getElementById('flightNo').value;
        document.getElementById('flightNo').value = ''; 
    } else if (selectedOption === 'route') {
        var departure = document.getElementById('routeDep').value;
        var arrival = document.getElementById('routeArr').value;
        inputValue = departure + ' to ' + arrival;
        document.getElementById('routeDep').value = ''; 
        document.getElementById('routeArr').value = ''; 
    } else if (selectedOption === 'arrival') {
        inputValue = document.getElementById('arrival').value;
        document.getElementById('arrival').value = ''; 
    } else if (selectedOption === 'departure') {
        inputValue = document.getElementById('departure').value;
        document.getElementById('departure').value = ''; 
    } else if (selectedOption === 'date') {
        inputValue = document.getElementById('fdate').value;
        document.getElementById('fdate').value = ''; 
    }
    
 
        alert(inputValue);
});
