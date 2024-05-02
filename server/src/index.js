import express from "express";
import { connectDB } from './db/db.js';

const app = express();
const PORT = 3000;
connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})
