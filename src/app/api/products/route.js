import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";
import Product from "@/models/Product";

export async function GET() {
  try {
    connectDB();
    const products = await Product.find();
    return NextResponse.json(products);
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
    const newProduct = new Product(data);
    const savedProduct = await newProduct.save();
    return NextResponse.json({ status: "succes", data: savedProduct });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
