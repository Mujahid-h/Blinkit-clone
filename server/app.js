import Fastify from "fastify";
import "dotenv/config";
import connectDB from "./src/config/db.js";
import { PORT } from "./src/config/config.js";
import { admin, buildAdminRouter } from "./src/config/admin.js";
import { registerRoutes } from "./src/routes/index.js";

const start = async () => {
  connectDB();

  const app = Fastify();

  await buildAdminRouter(app);

  await registerRoutes(app);

  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `Server started on http://localhost:${PORT}${admin.options.rootPath}`
      );
    }
  });
};

start();
