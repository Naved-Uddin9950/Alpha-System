import express from "express";
import { connectDB } from './db/db.js';
import cors from 'cors';

// Routes
import userRoutes from './routes/User.routes.js';
import adminRoutes from './routes/Admin.routes.js';

const app = express();
const PORT = 3000;

app.use(cors({
    // origin : process.env.CORS_ORIGIN
    origin: 'http://127.0.0.1:5500'
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