import express from "express";
import TaskController from "../controllers/taskController.js";

const router = express.Router();

router
  .get("/api/v1/task", TaskController.getTask)
  .get("/api/v1/task/:id", TaskController.getTaskById)
  .post("/api/v1/task", TaskController.setTask)
  .put("/api/v1/task/:id", TaskController.updateTask)
  .delete("/api/v1/task/:id", TaskController.deleteTask);

export default router;
