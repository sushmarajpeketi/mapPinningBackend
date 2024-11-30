const express = require('express');
const Pinrouter = require('./routes/pinRoutes')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { UserRouter } = require('./routes/userRoutes');

// console.log(express)
dotenv.config();
app.use(express.json())

mongoose.connect("mongodb+srv://sushmaraj4:1234@mappinningcluster.z7yil.mongodb.net/pin?retryWrites=true&w=majority&appName=MapPinningCluster").then(()=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log(err)

});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.error('MongoDB disconnected. Possible network issue.');
});
app.listen( 8000,()=>{
console.log(`server is running on 8000`)
})

app.use("/api/pins",Pinrouter)
app.use("/api/users",UserRouter)