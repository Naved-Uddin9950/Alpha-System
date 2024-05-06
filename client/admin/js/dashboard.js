import { deleteCookie } from '../utils/deleteCookie.js';
import { isLogin } from '../utils/isLogin.js';
import { updateUser } from '../modules/updateUser.js';

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
                    <td>
                        <button id="decrease">-</button>
                        <input type="number" id="value" value="0">
                        <button id="increase">+</button>
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

            let statusBox = row.querySelector('.statusBox');  
            statusBox.value = status;

            statusBox.addEventListener('change', () => {
                status = statusBox.value;            
            });

            let editBtn = document.getElementById(`edit_id${i}`);
            editBtn.addEventListener('click', () => {
                updateUser(name, user, level, status);
            });
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// Call the fetchUsers function to initiate the fetch operation
getUsers();
