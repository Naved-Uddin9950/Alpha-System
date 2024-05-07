import { confirm } from '../utils/confirm.js';
import { updateTask } from './updateTask.js';

export const getTasks = async () => {
    try {
        const table = document.getElementById('tasks-tbody');
        const response = await fetch('http://localhost:3000/api/daily-tasks');
        if (!response.ok) {
            throw new Error('Failed to fetch daily tasks');
        }
        const tasks = await response.json();

        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i].task ?? 'Unknown';
            let reward = tasks[i].reward ?? 'Unknown';
            let penalty = tasks[i].penalty ?? 'Unknown';
            let timeLimit = tasks[i].timeLimit ?? 'Unknown';
            let edit = `<i class="fa-solid fa-pen-to-square"></i>`;
            let remove = `<i class="fa-solid fa-ban"></i>`;

            const row = document.createElement('tr');
            row.innerHTML += `
                <tr>
                    <td>${task}</td>
                    <td>
                        <input type="text" class="rewardBox">
                    </td>
                    <td>
                        <input type="text" class="penaltyBox">
                    </td>
                    <td>
                        <input type="datetime-local" class="timeBox">
                    </td>
                    <td>
                        <button class="editBtn">${edit}</button> 
                        <button> ${remove} </button>
                    </td>
                </tr>
            `;

            table.appendChild(row);

            // Reward update
            const rewardBox = row.querySelector('.rewardBox');
            rewardBox.value = reward;
            rewardBox.addEventListener('change', () => {
                reward = rewardBox.value.split(',').map(item => item.trim());
                if (reward.length === 0 || reward.every(item => item === '')) {
                    reward = ['NONE'];
                }
            });
            // Reward update ends here

            // Penlaty update
            const penaltyBox = row.querySelector('.penaltyBox');
            penaltyBox.value = penalty;
            penaltyBox.addEventListener('change', () => {
                penalty = penaltyBox.value.split(',').map(item => item.trim());;
                if (penalty.length === 0 || penalty.every(item => item === '')) {
                    penalty = ['NONE'];
                }
            });
            // Penalty update ends here

            // timeLimit update
            const dateTimeObject = new Date(timeLimit);
            const timeBox = row.querySelector('.timeBox');
            const timeLimitValue = dateTimeObject.toISOString().slice(0, 16);
            timeBox.value = timeLimitValue;
            timeBox.addEventListener('change', () => {
                timeLimit = timeBox.value;
            });
            // timeLimit update ends here

            // Submit / Edit
            let editBtn = row.querySelector('.editBtn');
            editBtn.addEventListener('click', () => {
                let message = `Do you want to save changes for task : ${task} ?`
                const yes = document.querySelector('.yesOption');

                confirm(message);
                yes.addEventListener('click', () => {
                    updateTask(task, reward, penalty, timeLimit);
                    const box = document.querySelector('.confirmBox');
                    box.style.display = 'none';
                });

            });
            // Submit / Edit ends here
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};