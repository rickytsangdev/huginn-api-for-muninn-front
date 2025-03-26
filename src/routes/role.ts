import express from "express";
import Role from "../models/Role";

const router = express.Router();

// create a new role in database
router.post("/create", async (req, res): Promise<any> => {
  try {
    if (req.body.role && req.body.role !== "") {
      const newRole = new Role(req.body);
      await newRole.save();
      return res.send("Role created successfully");
    } else {
      return res.status(400).send({ message: "Bad Request" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

export default router;
