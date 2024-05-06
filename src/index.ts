import express from 'express'
import mongoose from 'mongoose'
import router from './routes';
import cors from 'cors'

const app = express();
app.use(express.json());

<<<<<<< HEAD
app.use(cors());
=======
const MONGO_URL = '';
>>>>>>> e116af50826a9242072241040cb82c6b1894adc1
mongoose.connect(MONGO_URL, {
    dbName: "node-typescript-app",
}).then(()=>{
    console.log('Database connected');
    
}).catch((error)=> console.log(error));

app.use('/', router);


app.listen(4000, ()=>{
    console.log('Server running on http://localhost:4000');
    
})
