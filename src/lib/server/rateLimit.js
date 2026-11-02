import "server-only";

// Simple in-memory sliding window. Effective on a single Node process
// (Hostinger); best-effort on serverless (Vercel), where the honeypot and
// timing checks still apply.
const hits = new Map();

export function rateLimit(key, { limit = 5, windowMs = 10 * 60 * 1000 } = {}) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((time) => now - time < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (!times.some((time) => now - time < windowMs)) hits.delete(k);
    }
  }
  return true;
}
