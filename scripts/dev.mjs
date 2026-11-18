import { createServer } from "node:http";
import { Readable } from "node:stream";
import next from "next";
import nextEnv from "@next/env";
import { handleConsultation } from "../worker/consultation.mjs";

const projectDir = process.cwd();
nextEnv.loadEnvConfig(projectDir, true);

const port = Number.parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: true, dir: projectDir, hostname: "127.0.0.1", port });
const handlePage = app.getRequestHandler();
await app.prepare();

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || `localhost:${port}`}`);
    if (url.pathname !== "/api/consultation") {
      await handlePage(req, res);
      return;
    }

    const method = req.method || "GET";
    const hasBody = method !== "GET" && method !== "HEAD";
    const request = new Request(url, {
      method,
      headers: req.headers,
      body: hasBody ? Readable.toWeb(req) : undefined,
      ...(hasBody ? { duplex: "half" } : {}),
    });
    const response = await handleConsultation(request, {
      GOOGLE_SCRIPT_URL: process.env.GOOGLE_SCRIPT_URL,
      GOOGLE_SCRIPT_SECRET: process.env.GOOGLE_SCRIPT_SECRET,
    });
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    console.error("Local consultation request failed:", error);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "application/json", "Cache-Control": "no-store" });
      res.end(JSON.stringify({ ok: false }));
    } else {
      res.end();
    }
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Local site and consultation API: http://localhost:${port}`);
});
