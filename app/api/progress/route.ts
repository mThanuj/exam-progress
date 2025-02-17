import { NextResponse } from "next/server";
import { db } from "@/drizzle";
import { progress } from "@/drizzle/schema";
import { and, eq } from "drizzle-orm";
import { auth } from "@/auth";

async function getUserEmail(): Promise<string | null> {
  const session = await auth();
  return session?.user?.email ?? null;
}

export async function GET(request: Request) {
  const userEmail = await getUserEmail();
  if (!userEmail) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const subject = url.searchParams.get("subject");

  const result = await db
    .select()
    .from(progress)
    .where(eq(progress.userId, userEmail));

  if (!result.length) {
    return NextResponse.json({ error: "Progress not found" }, { status: 404 });
  }

  if (subject) {
    const found = result.find((item) => item.subject === subject);

    if (!found) {
      return NextResponse.json({ error: "Subject not found" });
    }

    return NextResponse.json(found.data);
  }

  return NextResponse.json(result);
}

export async function PUT(request: Request) {
  const userEmail = await getUserEmail();
  if (!userEmail) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  const { subject, units } = body;
  console.log(subject, units);

  await db
    .update(progress)
    .set({ data: units, updatedAt: new Date().toISOString() })
    .where(and(eq(progress.userId, userEmail), eq(progress.subject, subject)));

  return NextResponse.json({ success: true });
}
