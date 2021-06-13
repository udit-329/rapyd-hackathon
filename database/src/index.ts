import express from "express";
import mongoose from "mongoose";

import { productRoute } from "./routes";

const app = express();

app.use(express.json());

const uri =
  "mongodb+srv://hackathon:hackathon@cluster0.gt9xh.mongodb.net/rapyd?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(productRoute);

app.get("/", (_, res) => {
  res.status(200).send();
});

app.listen(2001, () => console.log(`Running on port ${2001}`));
