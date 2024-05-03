import express from 'express';

const router = express.Router();
import userController from '../controllers/user.controller.js';

router.post('/users', userController.createUser);

export default router;