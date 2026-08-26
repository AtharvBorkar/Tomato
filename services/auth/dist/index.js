import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/df.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const apple = "apple";
console.log(apple);
app.listen(PORT, () => {
    console.log(`Auth servics is running on port ${PORT}`);
    connectDB();
});
