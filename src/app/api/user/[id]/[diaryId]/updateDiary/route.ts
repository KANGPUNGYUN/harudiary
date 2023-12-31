import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface RequestBody {
  title: string;
  content: string;
  isPublic: boolean;
}

export async function POST(
  request: Request,
  { params }: { params: { id: string; diaryId: string } }
) {
  const body: RequestBody = await request.json();

  const diaryId = Number(params.diaryId);

  const diary = await prisma.diary.update({
    where: {
      id: diaryId,
    },
    data: {
      title: body.title,
      content: body.content,
      isPublic: body.isPublic,
    },
  });

  return new Response(JSON.stringify(diary));
}
