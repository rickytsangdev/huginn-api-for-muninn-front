import express, { request, response } from "express";
import { trainings } from "./trainings";
import dotenv from "dotenv";
import roleRoute from "./routes/role";

dotenv.config();

// import mongoose ORM to connect mongodb to our backend
import mongoose from "mongoose";

const app = express();
const port = 3000;
app.use(express.json());

// DB mongoDB Connection
const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.Mongo_URL;
    if (!mongoUrl) {
      throw new Error("Mongo_URL is not defined in the environment variables");
    }
    await mongoose.connect(mongoUrl);
    console.log("Connecté à la base de donnée MongoDB");
  } catch (error) {
    console.error("Erreur de connexion à la base de donnée MongoDB", error);
    throw error;
  }
};

app.use("/api/role", roleRoute);

app.get("/", (req, res) => {
  res.send("Hello World from processcoach server c- modify test 2🚀🔥");
});

// get all training
app.get("/trainings", (req, res) => {});

// Créer une ressource trainings ici ICI
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// post a training
app.post("/trainings", (req, res) => {
  // create new trainings
  // return new training);
  const training = req.body;
  trainings.push(training);
  res.json({ training });
});

// GET /trainings/:id
app.get("/trainings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const training = trainings.find((t) => t.id === id);

  if (training) {
    res.json({ training });
  } else {
    res.status(404).json({ message: "Formation non existante !" });
  }
});

// DELETE /trainings/:id
app.delete("/trainings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const trainingIndex = trainings.findIndex((t) => t.id === id);

  if (trainingIndex === -1) {
    res.sendStatus(404);
  }
  const training = trainings[trainingIndex];
  trainings.splice(trainingIndex, 1);
  res.json({ training });
});

// PUT /trainings/:id
app.put("/trainings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const trainingIndex = trainings.findIndex((t) => t.id === id);

  if (trainingIndex === -1) {
    response.sendStatus(404);
  }
  const training = trainings[trainingIndex];
  const newData = req.body;
  const updateTraining = { ...training, ...newData };
  trainings.splice(trainingIndex, 1, updateTraining);
  response.json({ training });
});

const startServer = async () => {
  try {
    await connectMongoDB();
    console.log("MongoDB connection established. Starting server...");
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (error) {
    console.error(
      "Failed to start server due to MongoDB connection error",
      error
    );
  }
};

startServer();
