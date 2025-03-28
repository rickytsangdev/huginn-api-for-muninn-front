import Role from "../models/Role.js";

export const createRole = async (req, res) => {
  try {
    if (req.body.role && req.body.role !== "") {
      const newRole = new Role(req.body);
      await newRole.save();
      return res.send("Role created successfully");
    } else {
      return res.status(400).send({ message: "Bad Request" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Ezdzdzdrror" });
  }
};

export const modifyRole = async (req, res) => {
  console.log("im here");
  try {
    const role = await Role.findById({ _id: req.params.id });
    if (role) {
      console.log("role find !!!!!");
      const newData = await Role.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).send("Role Updated");
    } else {
      return res.status(404).send("Role not found");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error !");
  }
};
