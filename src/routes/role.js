import express from "express";
import Role from "../models/Role.js";

const router = express.Router();

import {
  createRole,
  modifyRole,
  getAllRoles,
} from "../controllers/role.controller.js";
import { get } from "mongoose";

// create a new role in database
router.post("/create", createRole);

// Update role in Database
router.put("/update/:id", modifyRole);

// Get all roles
router.get("/", getAllRoles);

export default router;
