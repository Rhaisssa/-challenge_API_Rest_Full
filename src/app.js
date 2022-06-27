import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";

/*mongoose.connect('mongodb+srv://Leonardo:<98034440>@apirestfull.1dza6.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
      if (!err) { console.log('Connection established'); }
      else { console.log('Connection error: ' + err)}
});*/

mongoose.connect(
  "mongodb://localhost:27017/",
  { useNewUrlParser: false },
  (err) => {
    if (!err) {
      console.log("Connection established");
    } else {
      console.log("Connection error: " + err);
    }
  }
);

let db = mongoose.connection;

db.on("error", console.log.bind(console, "Error 404, unable to connect."));
db.once("open", () => {
  console.log("204,successful connection.");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
