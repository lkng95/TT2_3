const mongoose = require("mongoose");
const logger = require("../logger/api.logger");

const MONGO_CONNECTION_STRING = require("./keys.js").mongoURI;
const connect = () => {
  const url = process.env.MONGO_CONNECTION_STRING;
  logger.info(
    "process.env.MONGO_CONNECTION_STRING :::" +
      process.env.MONGO_CONNECTION_STRING
  );

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", async () => {
    logger.info("Connected to database");
  });

  mongoose.connection.on("error", (err) => {
    logger.error("Error connecting to database  ", err);
  });
};

const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.once("close", async () => {
    console.log("Diconnected  to database");
  });
};
