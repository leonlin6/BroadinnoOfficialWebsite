interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  GOOGLE_SCRIPT_URL?: string;
  GOOGLE_SCRIPT_SECRET?: string;
}

const topics = new Set([
  "資料治理與數據應用",
  "客戶分析與行銷應用",
  "風險與信用評分",
  "營運優化與數位轉型",
  "其他",
]);

function json(ok: boolean, status: number): Response {
  return Response.json({ ok }, { status, headers: { "Cache-Control": "no-store" } });
}

function field(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.trim();
  return cleaned.length <= max ? cleaned : null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname !== "/api/consultation") {
      return env.ASSETS.fetch(request);
    }
    if (request.method !== "POST") return json(false, 405);

    const origin = request.headers.get("Origin");
    if (origin && origin !== url.origin) return json(false, 403);
    if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) return json(false, 415);
    if (Number(request.headers.get("Content-Length") || 0) > 10_000) return json(false, 413);

    let data: Record<string, unknown>;
    try {
      const body = await request.text();
      if (body.length > 10_000) return json(false, 413);
      const parsed: unknown = JSON.parse(body);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return json(false, 400);
      data = parsed as Record<string, unknown>;
    } catch {
      return json(false, 400);
    }

    // Do not tell automated form fillers that their honeypot submission was discarded.
    if (data.website) return json(true, 201);

    const requestId = field(data.requestId, 36);
    const name = field(data.name, 80);
    const email = field(data.email, 254);
    const phone = field(data.phone, 40);
    const preferredTime = field(data.preferredTime, 16);
    const timeZone = field(data.timeZone, 80);
    const topic = field(data.topic, 80);
    const description = field(data.description, 500);
    if (
      !requestId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(requestId) ||
      !name || /[\r\n]/.test(name) ||
      !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      phone === null || /[\r\n]/.test(phone) ||
      !preferredTime || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(preferredTime) ||
      !timeZone || /[\r\n]/.test(timeZone) ||
      !topic || !topics.has(topic) ||
      !description || description.length < 20 ||
      data.consent !== true
    ) return json(false, 400);

    if (!env.GOOGLE_SCRIPT_URL || !env.GOOGLE_SCRIPT_SECRET) return json(false, 503);
    let scriptUrl: URL;
    try {
      scriptUrl = new URL(env.GOOGLE_SCRIPT_URL);
      if (scriptUrl.protocol !== "https:" || scriptUrl.hostname !== "script.google.com" || !scriptUrl.pathname.endsWith("/exec")) return json(false, 503);
    } catch {
      return json(false, 503);
    }

    try {
      const upstream = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: env.GOOGLE_SCRIPT_SECRET, requestId, name, email, phone, preferredTime, timeZone, topic, description, consent: true }),
        signal: AbortSignal.timeout(20_000),
      });
      const result = await upstream.json() as { ok?: boolean };
      if (!upstream.ok || result.ok !== true) return json(false, 502);
      return json(true, 201);
    } catch {
      return json(false, 502);
    }
  },
};
