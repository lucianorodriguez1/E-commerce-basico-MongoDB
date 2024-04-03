import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";
import Product from "@/models/Product";

export async function GET(request,{ params }) {
  try {
    connectDB();
    const product = await Product.findById(params.productId);
    return NextResponse.json({ status: `Obtengo el params id: ${params.id}`, data: product });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 500,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    connectDB();
    const data = await request.json();
    const updateProduct = await Product.findByIdAndUpdate(
      params.productId,
      data,
      {
        new: true,
      }
    );
    return NextResponse.json({ status: "succes", data: updateProduct });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
export async function DELETE(request,{ params }) {
  try {
    connectDB();
    const product = await Product.findByIdAndDelete(params.productId);
    return NextResponse.json({ status: "succes", message: "Product deleted" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
