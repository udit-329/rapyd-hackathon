import express from "express";
import cors from "cors";

import { checkoutRoute } from "./routes";

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).send();
});

app.use(checkoutRoute);

app.listen(2002, () => console.log(`Running on port ${2002}`));
