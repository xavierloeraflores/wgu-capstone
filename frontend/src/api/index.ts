import { env } from "@/env";
const baseUrl = env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

interface backendApiPingResponse {
  message: string;
  error?: string;
}
export async function backendApiPing(): Promise<backendApiPingResponse> {
  try {
    const response = await fetch(`${baseUrl}/api`);
    const result = (await response.json()) as backendApiPingResponse;
    return result;
  } catch (error) {
    console.error("Failed to ping backend");
    return {
      message: "Failed to ping backend",
      error: "Failed to ping backend",
    };
  }
}
