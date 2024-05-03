const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

secondForm.addEventListener("submit", (e) => e.preventDefault());

fistForm.addEventListener("submit", (e) => e.preventDefault());



const createAdmin = async () => {
  const URI = 'https://alpha-system.onrender.com/api/admin';
  const res = (await fetch(URI)).text;
  // const data = res.text();
  const json = res.json();
  console.log(res);
}

createAdmin();