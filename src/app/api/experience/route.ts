import prisma from "@/lib/db";

export async function GET() {
  const res = await prisma.experience.findMany();

  return Response.json({ res }, { status: 200 });
}
