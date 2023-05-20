const express = require("express");
const app=express();
const errorMiddleware = require("./middleware/error");


app.use(express.json());

//product route
const product = require("./routes/productRoute");
//user route
const user = require("./routes/userRoute");


//product route pre map route 
app.use("/api/v1", product);
//user route
app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports=app;