import { env } from "@/env";
const baseUrl = env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";
import { type PostInput, type Post } from "@/types";

export interface CreatePostResponse {
  message: string;
  post?: PostInput;
  error?: string;
}
export async function createPost(post: PostInput): Promise<CreatePostResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
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
export interface GetPostsResponse {
  message: string;
  posts: Post[];
  error?: string;
}
export async function getPosts(): Promise<GetPostsResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/posts`);
    const result = (await response.json()) as GetPostsResponse;
    return result;
  } catch (error) {
    console.error("Failed to get posts");
    return {
      message: "Failed to get posts",
      posts: [],
      error: "Failed to get posts",
    };
  }
}

export async function validatePost(
  post: PostInput,
): Promise<CreatePostResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
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
