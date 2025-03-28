import express from "express";
import Role from "../models/Role.js";

const router = express.Router();

import { createRole, modifyRole } from "../controllers/role.controller.js";

// create a new role in database
router.post("/create", createRole);

// Update role in Database
router.put("/update/:id", modifyRole);

export default router;
