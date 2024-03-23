const express = require("express");
const app = express();

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://safiul:aFmysREG6pM2Q4ud@practice0.5krg1xu.mongodb.net/Product_API?retryWrites=true&w=majority&appName=practice0")
.then(()=>{console.log("mongodb db connected")})
.catch(()=>{console.log("mondodb db connection failed");
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const productRoute = require("./routes/product.route")
app.use("/api/products",productRoute);



app.listen(3000,()=>{
    console.log("server is connected");
})