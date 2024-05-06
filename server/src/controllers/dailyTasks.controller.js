import User from '../models/User.model.js';
import DailyTask from '../models/DailyTasks.model.js';

const assignDailyTasks = async (req, res) => {
    try {
        // Fetch active users
        const activeUsers = await User.find({ status: 'Active' });

        // Fetch daily tasks (you can generate them dynamically or fetch from the database)
        const dailyTasks = await DailyTask.find();

        // Assign daily tasks to active users
        for (const user of activeUsers) {
            // Assign tasks to users as per your logic
            // For example, you can randomly assign tasks or assign them based on user's level, etc.
            const randomIndex = Math.floor(Math.random() * dailyTasks.length);
            const task = dailyTasks[randomIndex];
            
            user.dailyTasks.push(task); // Assuming dailyTasks is an array field in the User model
            await user.save();
        }

        res.status(200).json({ message: 'Daily tasks assigned successfully' });
    } catch (error) {
        console.error('Error assigning daily tasks:', error);
        res.status(500).json({ error: 'An error occurred while assigning daily tasks' });
    }
};

export { assignDailyTasks };
