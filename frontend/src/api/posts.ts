const baseUrl = "http://localhost:3000";

export async function createPost(text: string) {
  const response = await fetch(`${baseUrl}/api/post/classify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  return response.json();
}
