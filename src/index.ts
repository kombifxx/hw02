import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { setupApp } from "./setup-app";
import { runDb } from "./db/db";

const app = express();
setupApp(app);

const startApp = async () => {
  await runDb();

  const PORT = process.env.PORT || 5001;

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};
startApp().catch((error) => {
  console.error("Failed to start app:", error);
  process.exit(1);
});
