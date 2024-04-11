import User from "@/models/User";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { createAccessToken } from "@/library/jwt";

export async function GET() {
  try {
    await connectDB();
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
    await connectDB();
    const { username, email, password } = await request.json();
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: passwordHash });
    const savedUser = await newUser.save();
    // const token = await createAccessToken({ id: savedUser._id });
    // cookies().set("token", token);
    return NextResponse.json(
      {
        savedUser,
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
