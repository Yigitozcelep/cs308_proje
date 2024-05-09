/*document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("personal-info-form");
    const emailField = document.getElementById("email");
    const availabilitySection = document.getElementById("availability-section");

    // Mock function to get user role based on email
    function getUserRoleByEmail(email) {
        const roles = {
            "cabin@example.com": "Cabin Crew",
            "cockpit@example.com": "Cockpit Crew",
            "other@example.com": "Other",
        };
        return roles[email] || "Other";
    }

    function updateAvailability() {
        const role = getUserRoleByEmail(emailField.value);
        if (role === "Cabin Crew" || role === "Cockpit Crew") {
            availabilitySection.classList.remove("hidden");
        } else {
            availabilitySection.classList.add("hidden");
            alert("Unauthorized");
        }
    }

    emailField.addEventListener("change", updateAvailability);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log("Submitted data:", data);

        // Add your form submission logic here
    });

    updateAvailability(); // Initialize on page load
*/
    document.addEventListener('DOMContentLoaded', (event) => {
    // Help button functionality
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
