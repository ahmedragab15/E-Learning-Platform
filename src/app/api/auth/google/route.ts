import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { generateJWT } from "@/lib/generateJWT";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, email, name, avatar, googleId } = body;

    if (!email || !googleId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          id,
          email,
          fullname: name,
          avatarUrl: avatar,
          googleId,
          provider: "google",
          username: name.split(" ")[0],
          password: "",
          role: "USER",
        },
      });
    }

    const token = generateJWT({
      id: user.id,
      fullName: user.fullname,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatarUrl,
    });

    return NextResponse.json({ token });
  } catch (err) {
    console.error("Google Auth Error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
