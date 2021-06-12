import express from "express";
import { ProductModel } from "../models";

const app = express();

app.get("/product/:id", async (request, response) => {
  const { id } = request.params;
  const product = await ProductModel.findById(id);

  try {
    response.send(product);
  } catch (error) {
    response.status(500).send(product);
  }
});

app.get("/products", async (request, response) => {
  const product = await ProductModel.find({});

  try {
    response.send(product);
  } catch (error) {
    response.status(500).send(product);
  }
});

app.post("/product", async (request, response) => {
  const product = new ProductModel(request.body);

  try {
    await product.save();
    response.send(product);
  } catch (error) {
    response.status(500).send(product);
  }
});

export default app;
