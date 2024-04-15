from pydantic import BaseModel

class PostInput(BaseModel):
    text: str

class PostOutput(BaseModel):
    id: int
    isNSFW: bool
    text: str
    tags: list[str]