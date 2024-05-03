import express from "express";
import { connectDB } from './db/db.js';
import cors from 'cors';

// Routes
import userRoutes from './routes/User.routes.js';
import adminRoutes from './routes/Admin.routes.js';

const app = express();
const PORT = 3000;

app.use(cors({
    origin : process.env.CORS_ORIGIN
}));

connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})

// Middlewares
app.use(express.json());

// Admin Routes
app.use('/api', adminRoutes);

// User Routes
app.use('/api', userRoutes);