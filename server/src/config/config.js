import fastifySession from "@fastify/session";
import ConnectMongoDBSession from "connect-mongodb-session";
import "dotenv/config";

const MongoDBStore = ConnectMongoDBSession(fastifySession);

export const sessionStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

sessionStore.on("error", (error) => {
  console.log("Session store error", error);
});

export const authenticate = async (email, password) => {
  if (email == "mujahid@gmail.com" && password == "123456") {
    return Promise.resolve({ email, password });
  } else {
    return null;
  }
};

export const PORT = process.env.PORT || 8080;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;
