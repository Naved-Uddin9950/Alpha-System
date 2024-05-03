import { getCookie } from '../utils/getCookie.js';
import { createAdmin } from '../modules/createAdmin.js';
import { getAdmin } from '../modules/getAdmin.js';

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const close = document.querySelector(".close");
const errorScreen = document.querySelector('.error');

// Check if user is logged in
const username = getCookie('username') || null;
const password = getCookie('password') || null;

if(username != null) {
  getAdmin(username, password);
}


close.addEventListener('click', () => {
  errorScreen.style.display = 'none';
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

secondForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = secondForm.elements["username"].value;
  let password = secondForm.elements["password"].value;
  getAdmin(username, password);
});

fistForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = fistForm.elements["username"].value;
  let password = fistForm.elements["password"].value;
  createAdmin(username, password);
});

