import { DailyTasks } from '../models/DailyTasks.model.js';

const dailyTasksController = {
    async createDailyTasks(req, res) {
        try {
            const task = req.body.task;
            const penalty = req.body.penalty;
            const reward = req.body.reward;
            const status = req.body.status;
            
            const today = new Date(); // Get today's date
            today.setHours(0, 0, 0, 0); // Set time to midnight

            // Check if daily tasks already exist for today
            const existingTasks = await DailyTasks.findOne({ task: task });
            if (existingTasks) {
                return res.status(400).json({ error: 'Daily tasks for today already exist' });
            }


            // Create new daily tasks
            const newDailyTasks = new DailyTasks({
                task: task,
                penalty: penalty,
                reward: reward,
                status: status,
                timeLimit: today
                // Add other fields as needed
            });

            // Save new daily tasks to the database
            await newDailyTasks.save();

            // TODO: Assign new daily tasks to all active users
            // Replace this with your logic to assign tasks to users

            res.status(201).json({ message: 'Daily tasks created and assigned successfully' });
        } catch (error) {
            console.error('Error creating daily tasks:', error);
            res.status(500).json({ error: 'An error occurred while creating daily tasks' });
        }
    }
};

export default dailyTasksController;
