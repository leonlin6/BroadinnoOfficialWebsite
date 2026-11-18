export interface ConsultationEnv {
  GOOGLE_SCRIPT_URL?: string;
  GOOGLE_SCRIPT_SECRET?: string;
}

export function handleConsultation(request: Request, env: ConsultationEnv): Promise<Response>;
