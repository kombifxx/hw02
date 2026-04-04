import express, { Express } from "express";
import { BlogsRouter } from "./routes/blogs.routes";
import { PostsRouter } from "./routes/posts.routes";
import { testingRouter } from "./routes/testing.routes";

export const setupApp = (app: Express) => {
  app.use(express.json()); // middleware для парсинга JSON в теле запроса

  // основной роут
  app.get("/", (_, res) => {
    res.status(200).send("Hello world!");
  });

  app.use("/blogs", BlogsRouter);
  app.use("/posts", PostsRouter);
  app.use("/testing", testingRouter);

  return app;
};
