import express from 'express';

const router = express.Router();
import userController from '../controllers/user.controller.js';

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.put('/users/:username', userController.updateUser);

export default router;
