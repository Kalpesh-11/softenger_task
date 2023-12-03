import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({});
  }
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/user_pictures/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({ message: path, success: true });
}
