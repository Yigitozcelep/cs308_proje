window.addEventListener('load', function() {
    document.getElementById('searchType').dispatchEvent(new Event('change'));
});


document.getElementById('searchType').addEventListener('change', function() {
    let selectedOption = this.value;
    let inputFields = document.querySelectorAll('.input-field');
    
    

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

    let selectedOption = document.getElementById('searchType').value;

    if (selectedOption === 'flightNo') 
    {
        let flightNo = document.getElementById('flightNo').value;
    } 
    else if (selectedOption === 'route') 
    {
        let departure = document.getElementById('departure').value;
        let arrival = document.getElementById('arrival').value;
        let depDate = document.getElementById('depTime').value;
        
    }
    else if (selectedOption === 'airportAndDate')
    {
        let airport = document.getElementById('airport').value;
        let depDate2 = document.getElementById('depDate').value;
    }
    
});

/*
document.addEventListener("DOMContentLoaded", function() {
    let helpButton = document.getElementById("helpButton");
    helpButton.addEventListener("click", function(event) {
        event.preventDefault();

        alert("This is a help pop-up!"); 
        
       
    });
});*/

document.addEventListener('DOMContentLoaded', (event) => {
    var helpButton = document.getElementById('helpButton');
    var helpPopup = document.getElementById('helpPopup');
    var closeSpan = document.getElementsByClassName('close')[0];

    // When the help button is clicked, show the pop-up
    helpButton.onclick = function() {
        helpPopup.style.display = "flex";
    }

    // When the close button (x) inside the pop-up is clicked, hide the pop-up
    closeSpan.onclick = function() {
        helpPopup.style.display = "none";
    }

    // When the user clicks anywhere outside of the pop-up, close it
    window.onclick = function(event) {
        if (event.target == helpPopup) {
            helpPopup.style.display = "none";
        }
    }
});
