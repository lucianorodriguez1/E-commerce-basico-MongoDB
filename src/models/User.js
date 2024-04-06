import { Schema, model, models } from "mongoose";

const userCollection = "users";
const userModel = new Schema(
  {
    username: {
      type: String,
      required: [true, "El username es requerido"],
      trim: true,
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
    },
  },
  {
    timestamps: true,
  }
);

export default models.users || model(userCollection, userModel);
