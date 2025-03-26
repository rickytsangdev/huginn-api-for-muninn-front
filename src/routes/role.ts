import express from "express";
import Role from "../models/Role";

const router = express.Router();

// create a new role in database
router.post("/", async (req, res): Promise<any> => {
  try {
    if (req.body.role && req.body.role !== "") {
      const newRole = new Role();
      return res.status(400).json({ message: "Name is required" });
    }
    res.send("Hello World from processcoach server c- modify test 2🚀🔥");
  } catch (error) {}
});
