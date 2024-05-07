// import { updateUser } from '../modules/updateUser.js';
import { confirm } from '../utils/confirm.js';

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
                    <td>${reward}</td>
                    <td>${penalty}</td>
                    <td>${timeLimit}</td>
                    <td>
                        <button id='edit_id${i}'>${edit}</button> 
                        <button> ${remove} </button>
                    </td>
                </tr>
            `;

            table.appendChild(row);

            // Submit / Edit
            // let editBtn = document.getElementById(`edit_id${i}`);
            // editBtn.addEventListener('click', () => {
            //     let message = `Do you want to save changes for user ${user} ?`
            //     const yes = document.querySelector('.yesOption');

            //     confirm(message);
            //     yes.addEventListener('click', () => {
            //         updateUser(name, user, level, status);
            //         const box = document.querySelector('.confirmBox');
            //         box.style.display = 'none';
            //     });

            // });
            // Submit / Edit ends here
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};