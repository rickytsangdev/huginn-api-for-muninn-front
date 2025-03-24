import express, { request, response } from "express";
import { trainings } from "./trainings";
import { Database } from "sqlite3";

const app = express();
const port = 3000;
app.use(express.json());

// sqlite3 Database configuration
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./process.db", (err: Error | null) => {
  if (err) {
    console.error("Erreur de connexion à la base", err.message);
  } else {
    console.log("Connecté à la base de donneé sqlite3");
  }
});

// create Table if not exist
db.run(`CREATE TABLE IF NOT EXISTS trainings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL ,
  coach TEXT NOT NULL,
  price INTEGER,
  picture TEXT NOT NULL,
  location TEXT NOT NULL
)`);

app.get("/", (req, res) => {
  res.send("Hello World from processcoach server c- modify test 2🚀🔥");
});

// get all training
app.get("/trainings", (req, res) => {
  db.all("SELECT * FROM trainings", (err: any, trainings: any) => {
    res.json({ trainings });
  });
});

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

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
