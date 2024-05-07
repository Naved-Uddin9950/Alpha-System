import { DailyTasks } from '../models/DailyTasks.model.js';
import { User } from '../models/User.model.js';

const dailyTasksController = {
    async createDailyTasks(req, res) {
        try {
            const task = req.body.task;
            const penalty = req.body.penalty;
            const reward = req.body.reward;
            const status = req.body.status;

            const today = new Date(); // Get today's date
            today.setHours(0, 0, 0, 0); // Set time to midnight

            // Check if daily task already exist
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
            });

            await newDailyTasks.save();

            // Assign created daily tasks to users
            const activeUsers = await User.find({ status: 'Active' });
            for (const user of activeUsers) {
                user.dailyTasks.push(newDailyTasks._id);
                await user.save();
            }

            res.status(201).json({ message: 'Daily tasks created and assigned successfully' });
        } catch (error) {
            console.error('Error creating daily tasks:', error);
            res.status(500).json({ error: 'An error occurred while creating daily tasks' });
        }
    },

    // Get the list of all the daily tasks
    async getAllTasks(req, res) {
        try {
            const tasks = await DailyTasks.find();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching daily tasks' });
        }
    },


    // Update daily tasks data
    async updateTasks(req, res) {
        try {
            const { task, reward, penalty, timeLimit } = req.body;

            // Find the user by username and update the data
            const updatedTask = await DailyTasks.findOneAndUpdate(
                { task: task },
                { reward, penalty, timeLimit }, 
                { new: true } 
            );

            if (!updatedTask) {
                return res.status(404).json({ error: 'Daily Task not found' });
            }

            res.status(200).json({ message: 'Daily Task updated successfully', task: updatedTask });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating daily task' });
        }
    }
};

export default dailyTasksController;
