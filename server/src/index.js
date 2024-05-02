import express from "express";
import { connectDB } from './db/db.js';
import userRoutes from './routes/User.routes.js';

const app = express();
const PORT = 3000;
connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})

app.use(express.json());

app.use('/api', userRoutes);