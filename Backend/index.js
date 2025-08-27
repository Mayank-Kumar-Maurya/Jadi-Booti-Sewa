require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 9999;
const cors = require('cors');
const AIRouter = require("./routers/AIRouter");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));


app.use("/mediReach/api/v1", AIRouter);

// // TODO error handling 


app.listen(port, ()=>
{
    console.log("Successfully Connected at port:", port);
});