import User from "@/models/User";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { createAccessToken } from "@/library/jwt";

export async function GET() {
  try {
    connectDB();
    const users = await User.find();
    return NextResponse.json({
      message: "register encontrado",
      data: users,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
export async function POST(request) {
  try {
    connectDB();
    const data = await request.json();
    const passwordHash = await bcrypt.hash(data.password, 10);
    data.password = passwordHash;
    const newUser = new User(data);
    const savedUser = await newUser.save();
    const token = await createAccessToken({ id: savedUser._id });
    cookies().set("token", token);
    return NextResponse.json(
      {
        message: "Usuario creado",
        data: savedUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
