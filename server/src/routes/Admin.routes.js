import express from 'express';

const router = express.Router();
import adminController from '../controllers/admin.controller.js';

router.post('/admin', adminController.createUser);

export default router;
