import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 422 });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  // TODO: forward to Flodesk / email provider here
  console.log("New lead:", { name, email, ts: new Date().toISOString() });

  return NextResponse.json({ ok: true }, { status: 200 });
}
