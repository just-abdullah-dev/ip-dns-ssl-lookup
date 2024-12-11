import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const domain = searchParams.get("domain");
    if (!domain) {
      return NextResponse.json(
        { success: false, message: "Domain is required" },
        { status: 400 }
      );
    }

    const response = await fetch(`https://crt.sh/?q=${domain}&output=json`);
    const data = await response.json();

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: error?.status }
    );
  }
}
