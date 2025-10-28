// app/api/user/route.ts
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authProvider } from "../../lib/route";
import { prisma } from "@repo/db/client";

export async function GET() {
  const session = await getServerSession(authProvider);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
  });

  return NextResponse.json(user);
}
