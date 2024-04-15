from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import classify_post, model_health
from posts import get_posts, get_post_by_id, create_post
from Models import PostInput, PostOutput
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
def classify(post: PostInput):
    return {"classification": classify_post(post.text)}

@app.get("/api/posts")
def read_posts(page: int = 1):
    result = get_posts(page)
    return result

@app.get("/api/posts/{post_id}")
def read_post(post_id: int):
    return get_post_by_id(post_id)

@app.post("/api/posts")
def create_post_route(post: PostInput):
    return {"Message": "Post created successfully", "post": create_post(post)}