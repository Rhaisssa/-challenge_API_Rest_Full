import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://apirestfull.1dza6.mongodb.net/ApiRestFull",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Connection established");
    } else {
      console.log("Connection error: " + err);
    }
  }
);

let db = mongoose.connection;

export default db;
