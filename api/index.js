import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
       console.log("Connected to MongoDB !");
     }).catch((err)=>{
        console.log("Some error occured in connecting to Database : " + err);
     })

const app = express();

app.listen(3000 , ()=>{
    console.log('Server is running on PORT 3000 !');
});  