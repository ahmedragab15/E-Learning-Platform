import { NextResponse } from "next/server";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const REDIRECT_URI = process.env.GOOGLE_CALLBACK_URL!;

export async function GET() {
  const googleAuthUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  const params = {
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: ["openid", "email", "profile"].join(" "),
    prompt: "consent",
    access_type: "offline",
  };

  Object.entries(params).forEach(([key, value]) => {
    googleAuthUrl.searchParams.set(key, value);
  });

  return NextResponse.redirect(googleAuthUrl.toString());
}
