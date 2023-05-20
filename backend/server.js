const app=require("./app");
const connectDatabase = require("./config/database");

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