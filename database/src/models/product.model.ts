import { prop, getModelForClass, Ref } from "@typegoose/typegoose";

export class Product {
  @prop({ type: () => String })
  public name: string;

  @prop({ type: () => String })
  public description: string;

  @prop({ type: () => [String] })
  public images: string[];

  @prop({ type: () => Number, min: 0})
  public price: number;
}

const ProductModel = getModelForClass(Product);

export default ProductModel