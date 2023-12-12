import { Resend } from "resend";
import React from "react";
import EmailTemplate from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Fausto Zaruma <fazatojuni@gmail.com>",
      to: ["fazatojuni@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "PLAIN TEXT CONTENT",
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
