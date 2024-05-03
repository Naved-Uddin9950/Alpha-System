import express from 'express';

const router = express.Router();
import adminController from '../controllers/admin.controller.js';

router.post('/admin', adminController.createUser);
router.post('/getadmin', adminController.getAdminInfo);

export default router;
