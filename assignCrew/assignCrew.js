import { FlightsCommunication } from "../backend_communication/flights/flights_communication.js";
import { UserCommunication } from "../backend_communication/users/users_communication.js";
import { getText } from "../dictionary.js";

async function fetchAvailableMembers() {

    console.log(localStorage.getItem("flightIdView"));
    
    // let availableMembers = await UserCommunication.getAvailableMembers();
    // For now, using dummy data
    const availableMembers = [
        {
            Id: '1',
            name: 'John',
            surname: 'Doe',
            age: 30,
            gender: 'Male',
            nationality: 'American',
            email: 'john.doe@outlook.com',
            seniority: 'Senior',
            seatNum: 'A1'
        },
    ];
    return availableMembers;
}

async function addMemberToFlight(memberId) {
    const flightId = localStorage.getItem("flightIdView");
    const user = await UserCommunication.getUserById(memberId);
    
    if (user) {
        // Update user's flight data to include the new flight
        const newFlight = {
            flightData: flightId,
            //userSeat: { seatPosition: user.seatNum }, // This is a placeholder
            boughtTime: new Date(),
            purchaseId: Date.now(),
            role: user.userType
        };
        user.flights.push(newFlight);
        console.log(`Updated user data to save: `, user);  
        await UserCommunication.updateUser(user);
        alert(`Member ${user.name} ${user.surname} has been added to the flight.`);
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    handleLanguageChange();
    const availableMembers = await FlightsCommunication.getPilotData();
    console.log(availableMembers);
    
    buildTable(availableMembers);

    document.querySelector('#table-body-available-members').addEventListener('click', async function (event) {
        if (event.target.classList.contains('add-member')) {
            const memberId = event.target.getAttribute('data-member-id');
            await addMemberToFlight(memberId);
            event.target.closest('tr').remove();
        }
    });
});

function handleLanguageChange() {
    let lang = document.getElementById('language').value;
    localStorage.setItem("language", lang);

    const logo = document.getElementById('logo');
    const apply = document.getElementById('apply');

    apply.innerHTML = getText("apply");
    logo.innerHTML = getText("AIR308 Airlines");

    const placeholders = {
        name_search: 'name_search',
        surname_search: 'surname_search',
        id_search: 'id_search',
        age_search: 'age_search',
        nationality_search: 'nationality_search',
        seniority_search: 'seniority_search',
        seat_search: 'seat_search',
        email_search: 'email_search'
    };

    for (const key in placeholders) {
        const element = document.getElementById(key);
        if (element) {
            element.setAttribute('placeholder', getText(placeholders[key]));
        }
    }
}

document.getElementById('language').addEventListener('change', handleLanguageChange);

function buildTable(members) {
    const tableBody = document.querySelector(`#table-body-available-members`);
    tableBody.innerHTML = '';
    
    members.forEach(member => {
        const row = `<tr>
            <td>${member.name}</td>
            <td>${member.surname}</td>
            <td>${member.Id}</td>
            <td>${member.age}</td>
            <td>${member.gender}</td>
            <td>${member.nationality}</td>
            <td>${member.email}</td>
            <td>${member.seniority}</td>
            <td><button class="add-member" data-member-id="${member.Id}">ADD</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}
