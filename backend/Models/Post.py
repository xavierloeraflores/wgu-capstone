from pydantic import BaseModel

class Post(BaseModel):
    text: str
    def __init__(self,  text):
        self.text = text 
