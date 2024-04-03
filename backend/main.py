from fastapi import FastAPI
from model import classify_post

app = FastAPI()


@app.get("/api")
def read_root():
    return {"Message": "Hello World"}

@app.post("/post/classify")
def classify(post: str):
    return {"classification": classify_post(post)}