import { setCookie } from '../utils/setCookie.js';

export const getAdmin = async (username, password) => {
    const errorScreen = document.querySelector('.error');
    const errorMessage = document.querySelector('.errorMessage');
    
    // const URI = 'https://alpha-system.onrender.com/api/admin';
    const URI = `http://localhost:3000/api/getadmin`;
    const response = await fetch(URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide the data for creating the admin account here
            // For example:
            username: username,
            password: password
        })
    });

    // Check if the request was successful (status code 200-299)
    if (response.ok) {
        // const json = await response.json();
        setCookie('username', username, 10);
        setCookie('password', password, 10);
        
        window.location.href = './pages/dashboard.html';
    } else {
        // If there was an error, log the error message
        const error = await response.text();
        errorMessage.textContent = error;
        errorScreen.style.display = 'flex';
        console.error('Failed to create admin account:', error);
    }
}
