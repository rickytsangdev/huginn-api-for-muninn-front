import express from "express";

const router = express.Router();

import {
  createRole,
  modifyRole,
  getAllRoles,
  deleteRole,
} from "../controllers/role.controller.js";

// create a new role in database
router.post("/create", createRole);

// Update role in Database
router.put("/update/:id", modifyRole);

// Get all roles
router.get("/", getAllRoles);

// delete a role
router.delete("/delete/:id", deleteRole);

export default router;
