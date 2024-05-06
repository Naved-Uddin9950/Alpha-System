import { deleteCookie } from '../utils/deleteCookie.js';
import { isLogin } from '../utils/isLogin.js';

const logoutBtn = document.querySelector('.logout');

// Checking if user is logged in
if(!isLogin()) {
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
        
        for(let i=0; i<users.length; i++) {
            let name = users[i].fullname ?? 'Unknown';
            let user = users[i].username ?? 'Unknown';
            let level = users[i].level ?? 1;
            let status = users[i].status ?? 'Unknown';
            let edit = `<i class="fa-solid fa-pen-to-square"></i>`;
            let remove = `<i class="fa-solid fa-ban"></i>`;
            
            table.innerHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${user}</td>
                    <td>${level}</td>
                    <td>${status}</td>
                    <td>${edit} ${remove}</td>
                </tr>
            `;
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// Call the fetchUsers function to initiate the fetch operation
getUsers();
