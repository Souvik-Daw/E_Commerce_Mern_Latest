const mongoose = require("mongoose");
var DB_URI="mongodb+srv://Admin:Admin@cluster0.8qwqd.mongodb.net/TestDatabase?retryWrites=true&w=majority"
const connectDatabase = () => {
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
