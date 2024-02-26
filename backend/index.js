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



//Schema for creating products

const Product = mongoose.model("product", {
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }
    
})

app.post('/addproduct',async (req,res)=>{

    //id auto generate
    let products = await Product.find({id:req.body.id});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id=last_product.id+1;
    }else{
        id =  1;
    }
    const product = new Product({
        id: id , //         req.body.id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        old_price:req.body.old_price,
        new_price:req.body.new_price,
        available:req.body.available
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:1,
        name:req.body.name
    });
})

















app.listen(port, (error) => {
    if(!error){
        console.log(`Server is running at port ${port}`);
    }else{
        console.log("Error :" + error);
    }
});





