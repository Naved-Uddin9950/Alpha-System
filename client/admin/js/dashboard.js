import { deleteCookie } from '../utils/deleteCookie.js';
import { isLogin } from '../utils/isLogin.js';

const logoutBtn = document.querySelector('.logout');

// Checking if user is logged in
if(!isLogin()) {
    window.location.href = '../index.html';
}

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteCookie('username');
    deleteCookie('password');
    window.location.href = '../index.html';
});