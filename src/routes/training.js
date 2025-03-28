import express from "express";
const router = express.Router();

// import controller here
import {
  createTraining,
  modifyTraining,
  getAllTrainings,
  getOneTraining,
  deleteTraining,
} from "../controllers/training.controller.js";
import { get } from "mongoose";

// get all training
router.get("/all", getAllTrainings);

// post a training
router.post("/create", createTraining);

// PUT /trainings/:id
router.put("/modify/:id", modifyTraining);

// GET /trainings/:id
router.get("/:id", getOneTraining);

// DELETE /trainings/:id
router.delete("/delete/:id", deleteTraining);

export default router;
