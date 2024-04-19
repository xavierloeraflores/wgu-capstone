from fastapi import APIRouter
from Models import PostInput
from Controllers import ModelController

model_router = APIRouter()

@model_router.get("/api/model")
def model_health_route():
    return ModelController.model_health()

@model_router.post("/api/model/classify")
def classify(post: PostInput):
    return {"classification": ModelController.classify_post(post.text)}