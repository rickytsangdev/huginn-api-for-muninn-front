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

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
