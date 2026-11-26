export class ConsultationTimeoutError extends Error {
  constructor() {
    super("Consultation request timed out");
    this.name = "ConsultationTimeoutError";
  }
}

export async function submitConsultation(payload: unknown): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);

  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const result = await response.json() as { ok?: boolean };
    if (!response.ok || !result.ok) throw new Error("Submission failed");
  } catch (error) {
    if (controller.signal.aborted) throw new ConsultationTimeoutError();
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
