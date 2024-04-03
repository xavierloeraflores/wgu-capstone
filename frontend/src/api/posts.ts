import { env } from "@/env";
const baseUrl = env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

export interface CreatePostResponse {
  message: string;
  post: {
    text: string;
  };
}
export async function createPost(text: string): Promise<CreatePostResponse> {
  const response = await fetch(`${baseUrl}/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  const result = (await response.json()) as CreatePostResponse;
  return result;
}
