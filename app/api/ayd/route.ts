import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {

  const { url } = await fetch("https://www.askyourdatabase.com/api/chatbot/v2/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.AYD_API_KEY}`
    },
    body: JSON.stringify({
      "chatbotid": process.env.AYD_CHATBOT_ID,
      "name": "Sheldon",
      "email": "test@gmail.com"
    }),
  }).then((res) => res.json());

  return NextResponse.json({ url });
}