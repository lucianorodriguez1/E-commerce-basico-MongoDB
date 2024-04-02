import "dotenv/config";
import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};
export async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect(process.env.URL_MONGODB);
  conn.isConnected = true;
}
connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error", err);
});
