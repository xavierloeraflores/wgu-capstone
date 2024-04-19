from fastapi import APIRouter
from Models import PostInput
from posts import get_posts, get_post_by_id, create_post

posts_router = APIRouter()


@posts_router.get("/api/posts")
def read_posts(page: int = 1):
    result = get_posts(page)
    return result

@posts_router.get("/api/posts/{post_id}")
def read_post(post_id: int):
    return get_post_by_id(post_id)

@posts_router.post("/api/posts")
def create_post_route(post: PostInput):
    return {"message": "Post created successfully", "post": create_post(post)}