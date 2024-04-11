import { Schema, model, models } from "mongoose";

const userCollection = "users";
const userModel = new Schema(
  {
    username: {
      type: String,
      required: [true, "El username es requerido"],
      trim: true,
      minLength:[4,"Username no puede ser menor a 4 cracteres"],
      maxLength:[20,"Username no puede ser mas de 20 caracteres"]
    },
    email: {
      type: String,
      required: [true, "El email es requerido"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "El password es requerido"],
      trim: true,
      select:false
    },
  },
  {
    timestamps: true,
  }
);

export default models.users || model(userCollection, userModel);
