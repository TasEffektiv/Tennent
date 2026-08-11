import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, telephone, email, message } = body ?? {};

  if (!name || !telephone || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // No email backend is configured for this demo build; the enquiry is
  // accepted and logged server-side instead of being emailed out.
  console.log("New enquiry:", { name, telephone, email, message });

  return NextResponse.json({ success: true });
}
