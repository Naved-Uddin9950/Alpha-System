import { deleteCookie } from '../utils/deleteCookie.js';
import { isLogin } from '../utils/isLogin.js';
import { errorHandler } from '../utils/errorHandler.js';
import { getUsers } from '../modules/getUsers.js';
import { getTasks } from '../modules/getTasks.js';

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


// Modules calls
getUsers();
getTasks();

