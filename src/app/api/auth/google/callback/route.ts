import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { generateJWT } from "@/lib/generateJWT";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = process.env.GOOGLE_CALLBACK_URL!;

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Authorization code is missing" }, { status: 400 });
  }

  try {
    //Exchange code for access token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      console.error("Failed to get access token:", tokenData);
      return NextResponse.json({ error: "Failed to get access token" }, { status: 500 });
    }

    //Get user info
    const userInfoRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    const profile = await userInfoRes.json();

    if (!profile.email) {
      return NextResponse.json({ error: "Failed to fetch user profile" }, { status: 500 });
    }

    //Check if user exists
    let user = await prisma.user.findUnique({
      where: { email: profile.email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: profile.email,
          fullname: profile.name,
          avatarUrl: profile.picture,
          googleId: profile.sub,
          provider: "google",
          username: profile.email.split("@")[0],
          password: "",
          role: "USER",
        },
      });
    }

    //Generate JWT
    const token = generateJWT({
      id: user.id,
      fullName: user.fullname,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatarUrl,
    });

    //Redirect to frontend with token
    const response = NextResponse.redirect(`${process.env.FRONTEND_URL || "http://localhost:3000"}/home`);
    response.cookies.set("jwtToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 10,
    });
    return response;
  } catch (err) {
    console.error("Google Callback Error:", err);
    return NextResponse.json({ error: "Something went wrong during Google callback" }, { status: 500 });
  }
}
