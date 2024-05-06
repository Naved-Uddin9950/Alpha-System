import { deleteCookie } from '../utils/deleteCookie.js';
import { isLogin } from '../utils/isLogin.js';
import { updateUser } from '../modules/updateUser.js';
import { errorHandler } from '../utils/errorHandler.js';

const logoutBtn = document.querySelector('.logout');

// Checking if user is logged in
if (!isLogin()) {
    window.location.href = '../index.html';
}

// Logout logic
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteCookie('username');
    deleteCookie('password');
    window.location.href = '../index.html';
});


// Fetch users data from the backend
const getUsers = async () => {
    try {
        const table = document.querySelector('tbody');
        const response = await fetch('http://localhost:3000/api/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();

        for (let i = 0; i < users.length; i++) {
            let name = users[i].fullname ?? 'Unknown';
            let user = users[i].username ?? 'Unknown';
            let level = users[i].level ?? 1;
            let status = users[i].status ?? 'Unknown';
            let edit = `<i class="fa-solid fa-pen-to-square"></i>`;
            let remove = `<i class="fa-solid fa-ban"></i>`;

            const row = document.createElement('tr');

            row.innerHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${user}</td>
                    <td class="input-group">
                        <button class="decrease">-</button>
                        <input type="number" class="value" value="${level}">
                        <button class="increase">+</button>
                    </td>
                    <td>
                    <select class='statusBox'>
                    <option value='Active'>Active</option>
                    <option value='Inactive'>Inactive</option>
                    </select>
                    </td>
                    <td>
                        <button id='edit_id${i}'>${edit}</button> 
                        <button> ${remove} </button>
                    </td>
                </tr>
            `;

            table.appendChild(row);

            // Level Update
            let decreaseButton = row.querySelector('.decrease');
            let increaseButton = row.querySelector('.increase');
            let valueInput = row.querySelector('.value');

            decreaseButton.addEventListener('click', function () {
                valueInput.value = parseInt(valueInput.value) - 1;
                level = valueInput.value;
            });

            increaseButton.addEventListener('click', function () {
                valueInput.value = parseInt(valueInput.value) + 1;
                level = valueInput.value;
            });
            // Level Update ends here


            // Status Update
            let statusBox = row.querySelector('.statusBox');
            statusBox.value = status;

            statusBox.addEventListener('change', () => {
                status = statusBox.value;
            });
            // Status Update ends here


            // Submit / Edit
            let editBtn = document.getElementById(`edit_id${i}`);
            editBtn.addEventListener('click', () => {

                updateUser(name, user, level, status);
            });
            // Submit / Edit ends here
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// Call the fetchUsers function to initiate the fetch operation
getUsers();
