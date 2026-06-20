const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export async function postContactMessage(payload) {
  return postJson("/contact", payload);
}

export async function postQuoteRequest(payload) {
  return postJson("/quote-requests", payload);
}

async function postJson(path, payload) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.detail || "Unable to submit this form right now.");
  }

  return response.json();
}
