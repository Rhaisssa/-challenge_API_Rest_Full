import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
  .get("/api/v1/user", UserController.getUser)
  .get("/api/v1/user/:id", UserController.getUserById)
  .post("/api/v1/user", UserController.setUser)
  .put("/api/v1/user/:id", UserController.updateUser)
  .delete("/api/v1/user/:id", UserController.deleteUser);

export default router;
