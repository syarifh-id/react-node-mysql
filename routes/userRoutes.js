import express from "express";
import {
  getUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/userControlers.js";

const router = express.Router();
router.get("/users", getUser);
router.get("/users/:id", getUserById);
router.post("/users", addUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;
