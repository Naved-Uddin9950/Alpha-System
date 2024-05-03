const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const close = document.querySelector(".close");
const errorScreen = document.querySelector('.error');
const errorMessage = document.querySelector('.errorMessage');

const createAdmin = async () => {
  const URI = 'https://alpha-system.onrender.com/api/admin';
  const response = await fetch(URI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // Provide the data for creating the admin account here
      // For example:
      username: 'admin',
      password: 'adminpassword'
    })
  });

  // Check if the request was successful (status code 200-299)
  if (response.ok) {
    const json = await response.json();
    console.log(json);
  } else {
    // If there was an error, log the error message
    const error = await response.text();
    errorMessage.textContent = error;
    errorScreen.style.display = 'flex';
    console.error('Failed to create admin account:', error);
  }
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

secondForm.addEventListener("submit", (e) => e.preventDefault());

fistForm.addEventListener("submit", (e) => {
  createAdmin();
  e.preventDefault()
});

