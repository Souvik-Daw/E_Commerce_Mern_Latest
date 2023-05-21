const express = require("express");
const app=express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());

//product route
const product = require("./routes/productRoute");
//user route
const user = require("./routes/userRoute");
//order route
const order = require("./routes/orderRoute");


//product route pre map route 
app.use("/api/v1", product);
//user route
app.use("/api/v1", user);
//order route
app.use("/api/v1", order);

// Middleware for Errors
app.use(errorMiddleware);

module.exports=app;