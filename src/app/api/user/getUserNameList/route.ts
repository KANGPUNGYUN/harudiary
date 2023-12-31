import { verifyJwt } from "@/app/lib/jwt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface RequestBody {
  name: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const users = await prisma.user.findMany({
    where: {
      name: { contains: body.name },
    },
    select: {
      id: true,
      name: true,
      email: true,
      auth: true,
      _count: {
        select: {
          diarys: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(users));
}
