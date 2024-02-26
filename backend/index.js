const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer  = require('multer');
const path  = require("path");
const cors  = require("cors");

app.use(express.json());
app.use(cors());


// Databse connection with Mongodb
mongoose.connect("mongodb+srv://Fashion-website:Nopasswordispassword%40@cluster0.5msgj9h.mongodb.net/ ")

// API creation

app.get("/", (req, res) => {
    res.send("Welcome to Fashion Website Express");
});

app.listen(port, (error) => {
    if(!error){
        console.log(`Server is running at port ${port}`);
    }else{
        console.log("Error :" + error);
    }
});





 