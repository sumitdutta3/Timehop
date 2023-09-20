import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

//connect to a database (MongoDB: https://www.mongodb.com/atlas/database)

//const CONNECTION_URL = 'mongodb+srv://callsumitdutta:sumitdutta123@cluster0.gicvkpx.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
.catch((error)=> console.log(error.message));
