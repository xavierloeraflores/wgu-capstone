import { env } from "@/env";
const baseUrl = env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";
import { type PostInput, type Post } from "@/types";

export interface CreatePostResponse {
  message: string;
  post?: Post;
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
  lastPage: number;
  currentPage: number;
  error?: string;
}
export async function getPosts(page = 1): Promise<GetPostsResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/posts?page=${page}`);
    const result = (await response.json()) as GetPostsResponse;
    return result;
  } catch (error) {
    console.error("Failed to get posts");
    return {
      message: "Failed to get posts",
      posts: [],
      lastPage: 0,
      currentPage: 0,
      error: "Failed to get posts",
    };
  }
}
export interface ClassifyPostResponse {
  classification?: string;
  error?: string;
}
export async function classifyPost(
  post: PostInput,
): Promise<ClassifyPostResponse> {
  try {
    const response = await fetch(`${baseUrl}/api/model/classify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const result = (await response.json()) as ClassifyPostResponse;
    return result;
  } catch (error) {
    console.error("Failed to create post");
    return {
      error: "Failed to create post",
    };
  }
}
