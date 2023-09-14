const app=require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});

// Config env
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}

// Database connection
connectDatabase();

cloudinary.config({
    cloud_name: 'dopwofurl',
    api_key: '127136761529161',
    api_secret: 'XXiyyqJFGHqcsBrydqD6tY57lHc',
  });

// Server running
var port=4000;
const server = app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
});
  
// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
console.log(`Error: ${err.message}`);
console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
server.close(() => {
    process.exit(1);
});
});