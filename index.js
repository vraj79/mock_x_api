const express = require("express");
const connectDB = require("./database/db");
const UserRoute = require("./routes/UserRoute");
const FlightRouter = require("./routes/flightRoute");
const BookingRouter = require("./routes/bookingRoute");

const app =express();

app.use(express.json());

app.use('/api',UserRoute);
app.use('/api',FlightRouter);
app.use('/api',BookingRouter);

app.listen(8080,()=>{
    connectDB();
    console.log("server started on http://localhost:8080")
})