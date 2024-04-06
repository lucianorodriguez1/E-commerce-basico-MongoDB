import {NextResponse} from "next/server";

export async function GET(){
    try {
        return NextResponse.json({message:"Profile soy"},{status:200});
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
          });
    }
}