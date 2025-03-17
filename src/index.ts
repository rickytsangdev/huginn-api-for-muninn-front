import express, { response } from "express";
import { trainings } from "./trainings";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from processcoach server c- modify test 2🚀🔥");
});

// get all training
app.get("/trainings", (req, res) => {
  res.json({ trainings });
});
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
  console.log(id);

  if (training) {
    res.json({ training });
  } else {
    res.status(404).json({ message: "Formation non existante !" });
  }
});

// DELETE /trainings/:id

// PUT /trainings/:id

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
