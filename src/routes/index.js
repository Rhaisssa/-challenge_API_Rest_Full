import express from "express";
import users from "./userRoutes.js";
import tasks from "./taskRoutes.js";

const routes = (app) => {
  app.route("/").get((res) => {
    res.status(204).send({ title: "List of Users - API" });
  });

  app.use(express.json(), users, tasks);
};

export default routes;

