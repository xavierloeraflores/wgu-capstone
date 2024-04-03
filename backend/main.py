from fastapi import FastAPI
from model import classify_post

app = FastAPI()


@app.get("/api")
def read_root():
    return {"Message": "Hello World"}

@app.post("/api/model/classify")
def classify(post: str):
    return {"classification": classify_post(post)}

@app.get("/api/posts")
def read_posts():
    return {"posts": ["post1", "post2", "post3"]}

@app.get("/api/posts/{post_id}")
def read_post(post_id: int):
    return {"post_id": post_id}

@app.post("/api/posts")
def create_post():
    return {"Message": "Post created successfully"}