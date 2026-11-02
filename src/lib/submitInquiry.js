/**
 * Sends an inquiry to the site's own API route (/api/inquiry), which emails it
 * over SMTP. Throws when the server could not accept the request.
 */
export async function submitInquiry(payload) {
  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = "Request failed";
    try {
      const data = await response.json();
      message = data?.error || message;
    } catch {
      /* non-JSON response */
    }
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return response.json().catch(() => ({}));
}
