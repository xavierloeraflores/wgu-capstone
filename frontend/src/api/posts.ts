import { env } from "@/env";
const baseUrl = env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

export interface CreatePostResponse {
  message: string;
  post?: {
    text: string;
  };
  error?: string;
}
export async function createPost(text: string): Promise<CreatePostResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const result = (await response.json()) as CreatePostResponse;
    return result;
  } catch (error) {
    console.error("Failed to create post");
    return {
      message: "Failed to create post",
      error: "Failed to create post",
    };
  }
}
