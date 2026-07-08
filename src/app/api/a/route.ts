import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));

  const missing: string[] = [];
  if (!process.env.Analytics_API_ENDPOINT) missing.push("Analytics_API_ENDPOINT");
  if (!process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID) missing.push("NEXT_PUBLIC_UMAMI_WEBSITE_ID");

  // Don't fail the main app flow if analytics is misconfigured.
  if (missing.length > 0) {
    console.warn("⚠️ /api/a analytics env missing:", missing, {
      p: (body as any)?.p,
      hasReferrer: Boolean((body as any)?.r),
      titleLen: String((body as any)?.t ?? "").length,
    });
    return new NextResponse(null, { status: 204 });
  }

  try {
    const response = await fetch(process.env.Analytics_API_ENDPOINT as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payload: {
          website: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID as string,
          hostname: "itsniloy.vercel.app",
          language: req.headers.get("accept-language")?.split(",")[0] || "en",
          screen: "1920x1080",
          url: (body as any)?.p || "/",
          referrer: (body as any)?.r || "",
          title: (body as any)?.t || "",
        },
        type: "pageview",
      }),
    });

    // Consume body so Edge doesn't surface stream issues.
    const resText = await response.text();

    // Avoid leaking large upstream responses.
    return NextResponse.json({ ok: true, status: response.status, resText: resText?.slice(0, 200) });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    const stack = e instanceof Error ? e.stack : undefined;
    console.error("❌ /api/a forward failed:", {
      errorMessage,
      stack,
      body,
      headers: {
        acceptLanguage: req.headers.get("accept-language"),
      },
    });
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
