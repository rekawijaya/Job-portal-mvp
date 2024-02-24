const mongoose = require("mongoose");
const logger = require("./logging");

const dbURI = process.env.DATABASE;

const connectToMongoDB = async () => {
     try {
          await mongoose.connect(dbURI);
          logger.info("Connected!");
     } catch (error) {
          logger.info(error);
     }
};
connectToMongoDB();

const db = mongoose.connection;

db.on("error", logger.error.bind(console, "connection error:"));
db.once("open", () => {
     logger.info("Database connected");
});

module.exports = db;
