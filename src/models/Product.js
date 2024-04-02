import { Schema, model, models } from "mongoose";

const productModel = new Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo es requerido"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La descripcion es requerida"],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, "El stock es requerido"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "El precio es requerido"],
      trim: true,
    },
    code: {
        type: Number,
        required: [true, "El code es requerido"],
        unique:true,
        trim: true,
      },
    category: {
      type: String,
      required: [true, "La categoria es requerida"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.products || model("products", productModel);
