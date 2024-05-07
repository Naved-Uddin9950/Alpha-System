import express from 'express';

const router = express.Router();
import adminController from '../controllers/admin.controller.js';
import dailyTasksController from '../controllers/dailyTasks.controller.js';

// Admin account routes
router.post('/admin', adminController.createUser);
router.post('/getadmin', adminController.getAdminInfo);

// daily tasks routes
router.post('/daily-tasks', dailyTasksController.createDailyTasks);

export default router;
