import { NextResponse } from "next/server";
import { productData } from "@/constants/data";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Products loaded successfully",
      success: true,
      productData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Loading products has been failed.",
      },
      { status: 500 }
    );
  }
};
