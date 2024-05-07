// export const createTask = async (task, reward, penalty, timeLimit) => {
//     const URI = `http://localhost:3000/api/daily-tasks`;
//     const response = await fetch(URI, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             task : task,
//             reward : reward,
//             penalty : penalty,
//             timeLimit : timeLimit
//         })
//     });

//     // Check if the request was successful (status code 200-299)
//     if (response.ok) {
//         console.log('Daily task created successfully');
//     } else {
//         // If there was an error, log the error message
//         const error = await response.text();
//         errorMessage.textContent = error;
//         errorScreen.style.display = 'flex';
//         console.error('Failed to create admin account:', error);
//     }
// }


export const createTask = async () => {
    const form = document.querySelector('.creation-form');
    const addRewardButton = document.getElementById('addreward');
    const addPenaltyButton = document.getElementById('addpenalty');
    const close = form.querySelector('.close');
    const createBtn = document.getElementById('createTaskBtn');
    
    const firstReward = document.getElementById('reward');
    const firstPenalty = document.getElementById('penalty');

    let rewards = [];
    let penalties = [];
    
    firstReward.addEventListener('change', () => {
        rewards = [firstReward[0].value];
    });

    firstPenalty.addEventListener('change', () => {
        penalty = [firstPenalty[0].value];
    });

    close.addEventListener('click', () => {
        form.style.display = 'none';
    });

    createBtn.addEventListener('click', () => {
        form.style.display = 'block';
    });

    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        formObject.reward = rewards;
        formObject.penalty = penalties;

        console.log(formObject)

        try {
            const response = await fetch('http://localhost:3000/api/daily-tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObject)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            console.log('Form submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });

    addRewardButton.addEventListener('click', () => {
        const rewardInput = document.createElement('input');
        rewardInput.type = 'text';
        rewardInput.name = 'reward';
        rewardInput.placeholder = 'Reward';
        rewardInput.classList.add('reward-input');

        form.insertBefore(rewardInput, addRewardButton);
        
        rewardInput.addEventListener('change', () => {
            rewards.push(rewardInput.value);
        });
    });

    addPenaltyButton.addEventListener('click', () => {
        const penaltyInput = document.createElement('input');
        penaltyInput.type = 'text';
        penaltyInput.name = 'penalty';
        penaltyInput.placeholder = 'Penalty';
        penaltyInput.classList.add('penalty-input');

        form.insertBefore(penaltyInput, addPenaltyButton);
        
        penalties.push(penaltyInput.value);
    });
}

