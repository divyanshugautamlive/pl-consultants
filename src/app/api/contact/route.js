import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, company, email, phone, role, challenge, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required contact fields." },
        { status: 400 }
      );
    }

    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbzM-J7wtIhr3vraLBTvIkj3yu3gbd6o5oskyZbcwWKKSSz9i_ACUtT5gE9BG_UqE4qBhA/exec";

    if (webhookUrl && !webhookUrl.includes("placeholder")) {
      const payload = {
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        name,
        company: company || "N/A",
        email,
        phone,
        role: role || "N/A",
        challenge: challenge || "N/A",
        message: message || "N/A",
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      if (!response.ok) {
        console.error("Google Sheets webhook error status:", response.status);
      }
    } else {
      console.log("Mock Mode: Form Submission Received:", {
        name,
        company,
        email,
        phone,
        role,
        challenge,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Manufacturing assessment request submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or call +91 84396 92259." },
      { status: 500 }
    );
  }
}
