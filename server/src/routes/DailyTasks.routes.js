import express from 'express';
import { assignDailyTasks } from './controllers/dailyTasksController.js';

const router = express.Router();

// Route to assign daily tasks to active users
router.post('/assign-daily-tasks', assignDailyTasks);

export default router;
