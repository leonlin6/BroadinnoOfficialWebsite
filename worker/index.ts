import { handleConsultation } from "./consultation.mjs";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  GOOGLE_SCRIPT_URL?: string;
  GOOGLE_SCRIPT_SECRET?: string;
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (new URL(request.url).pathname === "/api/consultation") return handleConsultation(request, env);
    return env.ASSETS.fetch(request);
  },
};

export default worker;
