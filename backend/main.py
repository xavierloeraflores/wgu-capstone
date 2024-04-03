from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import classify_post, model_health
from posts import get_all_posts, get_post_by_id, create_post
from Models import Post
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:8000",
    "http://localhost:5000",
]
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
def classify(post: str):
    return {"classification": classify_post(post)}

@app.get("/api/posts")
def read_posts():
    return get_all_posts()

@app.get("/api/posts/{post_id}")
def read_post(post_id: int):
    return get_post_by_id(post_id)

@app.post("/api/posts")
def create_post_route(post: Post):
    return {"Message": "Post created successfully", "post": post}