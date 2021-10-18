const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')



const app = express()



dotenv.config()


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MONGODB"))
    .catch((err) => console.log(err));


app.listen(4444, () => {
    console.log("Backend is running on port 4444!")
})


