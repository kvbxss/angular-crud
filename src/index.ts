import express from 'express'
import mongoose from 'mongoose'
import router from './routes';
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors());

const MONGO_URL = 'mongodb+srv://jakubroot:jakubroot@crud.3qq4mg1.mongodb.net/?retryWrites=true&w=majority&appName=crud';
mongoose.connect(MONGO_URL, {
    dbName: "node-typescript-app",
}).then(()=>{
    console.log('Database connected');
    
}).catch((error)=> console.log(error));

app.use('/', router);


app.listen(4000, ()=>{
    console.log('Server running on http://localhost:4000');
    
})