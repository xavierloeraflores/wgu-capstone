from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import classify_post, model_health
from posts import get_all_posts, get_post_by_id, create_post
from Models import Post
app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api")
def read_root():
    return {"Message": "Hello World"}


@app.get("/api/model")
def model_health_route():
    return model_health()

@app.post("/api/model/classify")
def classify(post: Post):
    return {"classification": classify_post(post.text)}

@app.get("/api/posts")
def read_posts():
    posts = get_all_posts()
    return {"message": "Posts retrieved successfully", "posts": posts}

@app.get("/api/posts/{post_id}")
def read_post(post_id: int):
    return get_post_by_id(post_id)

@app.post("/api/posts")
def create_post_route(post: Post):
    return {"Message": "Post created successfully", "post": post}