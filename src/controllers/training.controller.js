import Training from "../models/Training.js";

export const createTraining = async (req, res) => {
  try {
    // Check if the request body contains the required fields
    // and that they are not empty
    if (
      req.body.title &&
      req.body.description &&
      req.body.duration &&
      req.body.price &&
      req.body.image
    ) {
      // Create a new training document
      const newTraining = new Training(req.body);
      // Save the document to the database
      await newTraining.save();
      return res.status(201).send("Training created successfully");
    } else {
      return res.status(400).send({ message: "Bad Request" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const modifyTraining = async (req, res) => {
  try {
    const training = await Training.findById(req.params.id);
    if (training) {
      const updatedTraining = await Training.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).send("Training Updated");
    } else {
      return res.status(404).send("Training not found");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error!");
  }
};

export const getAllTrainings = async (req, res) => {
  try {
    const trainings = await Training.find();
    if (trainings) {
      return res.status(200).send(trainings);
    } else {
      return res.status(404).send("Trainings not found");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error!");
  }
};

export const getOneTraining = async (req, res) => {
  try {
    const training = await Training.findById(req.params.id);
    if (training) {
      return res.status(200).send(training);
    } else {
      return res.status(404).send("Training not found");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error!");
  }
};

export const deleteTraining = async (req, res) => {
  try {
    const training = await Training.findByIdAndDelete(req.params.id);
    if (training) {
      return res.status(200).send("Training deleted");
    } else {
      return res.status(404).send("Training not found");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error!");
  }
};
