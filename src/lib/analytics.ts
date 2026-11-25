type LeadFormType = "consultation" | "wealth_index" | "ai_prediction";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function trackLeadSubmission(formType: LeadFormType) {
  if (typeof window === "undefined") return;

  try {
    window.dataLayer?.push({ event: "lead_submit_success", form_type: formType });
  } catch {
    // Analytics must not change the result shown after a successful submission.
  }
}
