from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Routers import posts_router, model_router
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

app.include_router(posts_router)
app.include_router(model_router)