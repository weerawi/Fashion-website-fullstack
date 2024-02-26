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


// Image storage engine

const storage = multer.diskStorage({
    destination: './upload/images', //path.join(__dirname, 'upload', 'images'), // Use absolute path instead of this  destination: './upload/images',
    filename:  (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage:storage})



// creating upload endpoint for images

app.use('/images',express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`}
    );
});



app.listen(port, (error) => {
    if(!error){
        console.log(`Server is running at port ${port}`);
    }else{
        console.log("Error :" + error);
    }
});





