const BASE_URL = "http://127.0.0.1:8000";

export async function analyzeDispatch(data: {
  location: string;
  emergency_type: string;
  severity: string;
  patients: number;
}) {
  const response = await fetch(`${BASE_URL}/dispatch/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Backend request failed");
  }

  return response.json();
}