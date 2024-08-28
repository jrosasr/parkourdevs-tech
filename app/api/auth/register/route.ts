import { db } from '@/lib/db'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
      const { email, password, username } = await req.json();
      const hashedPassword = await hash(password, 10);

      if (!email || !password || !username) {
        return new NextResponse("Missing required fields", { status: 400 });
      }

      const exists = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (exists) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 500 }
        );
      }

      const user = await db.user.create({
        data: {
          email,
          password: hashedPassword,
          username,
        },
      });

      return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}