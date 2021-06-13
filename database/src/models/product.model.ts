import { prop, getModelForClass, Ref, mongoose } from "@typegoose/typegoose";

export class Product {
  @prop({ required: true, type: String })
  public name: string;

  @prop({ required: true, type: String })
  public description: string;

  @prop({ required: true, type: Array, default: [] })
  public images: mongoose.Types.Array<string>;

  @prop({ required: true, type: Number, min: 0 })
  public price: number;
}

const ProductModel = getModelForClass(Product);

export default ProductModel;
