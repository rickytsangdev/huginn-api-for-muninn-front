import express, { request, response } from "express";
// import { trainings } from "./trainings";
import dotenv from "dotenv";
import roleRoute from "./routes/role.js";

const trainings = [
  {
    id: 1,
    title: "Coaching en développement personnel",
    description:
      "Séances de coaching individuel pour vous aider à atteindre vos objectifs personnels et professionnels.",
    coach: "coach.expert@gmail.com",
    price: 2000,
    picture:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    location: "En ligne",
    duration: "2 heures",
    level: "Débutant",
    format: "vidéo à la demande",
    rating: 3,
  },
  {
    id: 2,
    title: "Formation en gestion du stress",
    description:
      "Programme complet pour apprendre à mieux gérer le stress et améliorer votre bien-être au quotidien.",
    coach: "formation.stress@gmail.com",
    price: 850,
    picture:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    location: "En ligne",
    duration: "10 heures",
    level: "Intermédiaire",
    format: "Présentiel",
    rating: 4,
  },
  {
    id: 3,
    title: "Atelier sur la confiance en soi",
    description:
      "Atelier interactif pour renforcer votre estime de soi et booster votre confiance au quotidien.",
    coach: "atelier.confiance@gmail.com",
    price: 900,
    picture:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    location: "En ligne",
    duration: "3 heures",
    level: "Intermédiaire",
    format: "live",
    rating: 3.5,
  },
  {
    id: 4,
    title: "Cours en ligne : Leadership et communication",
    description:
      "Apprenez à devenir un leader inspirant et à améliorer vos compétences en communication.",
    coach: "leader.coach@gmail.com",
    price: 2500,
    picture:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    location: "En présentiel",
    duration: "13 heures",
    level: "Intermédiaire",
    format: "Présentiel",
    rating: 4,
  },
  {
    id: 5,
    title: "Formation : Gestion du temps efficace",
    description:
      "Apprenez à organiser vos journées pour maximiser votre productivité sans stress.",
    coach: "coach.time@gmail.com",
    price: 180,
    picture:
      "https://images.unsplash.com/photo-1515165562835-c4c3b06c2b40?auto=format&fit=crop&w=800&q=80",
    location: "En ligne",
    duration: "3 heures",
    level: "Intermédiaire",
    format: "masterclass",
    rating: 4.8,
    tags: ["productivité", "organisation", "gestion du emps"],
  },
];

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
