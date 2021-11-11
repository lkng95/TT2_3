const mongoose = require("mongoose");
const logger = require("../logger/api.logger");

// const MONGO_CONNECTION_STRING = require("./keys.js").mongoURI;
const MONGO_CONNECTION_STRING = "mongodb+srv://dbsuser:dbs123@cluster0.u7kfp.mongodb.net/data?retryWrites=true&w=majority"
const connect = () => {
  const url = MONGO_CONNECTION_STRING;
  logger.info(
    "process.env.MONGO_CONNECTION_STRING :::" +
      MONGO_CONNECTION_STRING
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

module.exports = {
    connect,
    disconnect
}