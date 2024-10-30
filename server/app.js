import Fastify from "fastify";
import "dotenv/config";
import connectDB from "./src/config/db.js";
import { PORT } from "./src/config/config.js";

const start = async () => {
  const app = Fastify();
  connectDB();
  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Server started on http://localhost:${PORT}`);
    }
  });
};

start();
