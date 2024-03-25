import 'dotenv/config'
import express from 'express'
import connectDB from './db/index.js';

// read about express listeners 
// app.on("error")

// const app = express();

connectDB();

/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT ${process.env.PORT}`)
        })
    } catch(error) {
        console.log(error);
        throw error;
    }
})()
*/

