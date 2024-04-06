import { cookies } from "next/headers";
import {NextResponse} from "next/server";
import { connectDB } from "@/utils/mongoose";

export async function POST(request) {
  try {
    connectDB();
    cookies().set("token", "", {
      expires: new Date(0),
    });
    return NextResponse.json({message:"Logout exitoso"},{status:200});
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
