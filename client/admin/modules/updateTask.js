export const updateTask = async (task, reward, penalty, timeLimit) => {
    // const errorScreen = document.querySelector('.error');
    // const errorMessage = document.querySelector('.errorMessage');

    // const URI = 'https://alpha-system.onrender.com/api/admin';
    const URI = `http://localhost:3000/api/daily-tasks`;
    const response = await fetch(URI, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task: task,
            reward: reward,
            penalty: penalty,
            timeLimit: timeLimit
        })
    });

    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
        // If there was an error, log the error message
        const error = await response.text();
        // errorMessage.textContent = error;
        // errorScreen.style.display = 'flex';
        console.error('Failed to update daily task:', error);
    } else {
        alert('Task updated successfully!');
    }
}
