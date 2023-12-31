import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import * as bcrypt from "bcrypt";

interface RequestBody {
  nickname: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.nickname,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      auth: "credentials",
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
