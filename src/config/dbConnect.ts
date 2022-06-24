import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Leonardo:98034440@apirestfull.1dza6.mongodb.net/Api-RestFull");

let db = mongoose.connection;

export default db;