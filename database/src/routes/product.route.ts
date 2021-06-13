import express from "express";
import { ProductModel } from "../models";

const app = express();

app.get("/product/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const product = await ProductModel.findById(id);
    response.send({success: true, product});
  } catch (error) {
    response.status(500).send({success: false, ...error});
  }
});

app.get("/products", async (request, response) => {
  try {
    const product = await ProductModel.find({});
    response.send({success: true, product});
  } catch (error) {
    response.status(500).send({success: false, ...error});
  }
});

app.post("/product", async (request, response) => {
  try {
    const product = new ProductModel(request.body);
    await product.save();
    response.send({success: true, product});
  } catch (error) {
    response.status(500).send({success: false, ...error});
  }
});

export default app;
