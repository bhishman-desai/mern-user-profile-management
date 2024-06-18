import mongoose from "mongoose";

import ENV from "../config.js";

async function connect() {
  /* In memory MongoDB */
  /* const mongoDB = await MongoMemoryServer.create();
    const getUri = mongoDB.getUri(); */

  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(ENV.MONGO_URI);
  console.log("Database Connected!");
  return db;
}

export default connect;
