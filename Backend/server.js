require("dotenv").config();
const express = require("express");
const app = express();
const {dbConnect} = require("./config/database");

const PORT = process.env.PORT || 3000;

dbConnect();

app.listen(PORT, ()=>{
    console.log(`Server started successfully at PORT ${PORT}`);
})
