import prisma from "@/lib/db";

export async function GET() {
  const res = await prisma.project.findMany();

  return Response.json({ res }, { status: 200 });
}
