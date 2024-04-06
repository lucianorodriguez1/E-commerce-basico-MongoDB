import User from "@/models/User";
import { connectDB } from "@/utils/mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createAccessToken } from "@/library/jwt";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    connectDB();
    const data = await request.json();
    const emailUser = data.email;
    const userFound = await User.findOne({ email: emailUser });
    if (!userFound)
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 400 }
      );
    const isMatch = await bcrypt.compare(data.password, userFound.password);
    if (!isMatch)
      return NextResponse.json(
        { message: "Contraseña incorrecta" },
        { status: 400 }
      );

    const token = await createAccessToken({ id: userFound._id });
    cookies().set("token", token);
    return NextResponse.json(
      {
        message: "Login correcto",
        data: userFound,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
