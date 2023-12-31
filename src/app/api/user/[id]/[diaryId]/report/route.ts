import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface RequestBody {
  id: number;
  reportBy: string;
}

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: { id: string; diaryId: string };
  }
) {
  const body: RequestBody = await request.json();
  const diaryId = Number(params.diaryId);

  const diary = await prisma.report.create({
    data: {
      diary: { connect: { id: diaryId } },
      author: { connect: { id: body.id } },
      reportBy: body.reportBy,
    },
  });

  return new Response(JSON.stringify(diary));
}
