from Models import PostInput, PostOutput
import random
from database import db_query, db_insert
from model import classify_post

dummy_post1 = {
    "id": 1,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": ["classic", "v1", "v2"]
  }

dummy_post2 = {
    "id": 2,
    "isNSFW": True,
    "text": "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": ["classic", "v1"]
  }

dummy_post3 = {
    "id": 3,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": ["classic"]
  }
dummy_post4 = {
    "id": 4,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": [ "v2"]
  }

dummy_post5 = {
    "id": 5,
    "isNSFW": True,
    "text": "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": []
  }

dummy_post6 = {
    "id": 6,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": [ "v1", "v2"]
  }
dummy_post7 = {
    "id": 7,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": ["classic", "v2"]
  }

dummy_post8 = {
    "id":8 ,
    "isNSFW": True,
    "text": "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": ["v1", "v2"]
  }

dummy_post9 = {
    "id": 9,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": ["classic", "v2"]
  }
dummy_post10 = {
    "id": 10,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter",
    "tags": ["classic"]
  }

dummy_posts =[
    dummy_post1,
    dummy_post2,
    dummy_post3,
    dummy_post4,
    dummy_post5,
    dummy_post6,
    dummy_post7,
    dummy_post8,
    dummy_post9,
    dummy_post10,
]
def get_all_posts(page=1):
    random.shuffle(dummy_posts)
    return dummy_posts

def get_post_by_id(post_id):
    result = db_query("SELECT * FROM posts WHERE id = 1")[0]
    return {"post": result}

def create_post(post: PostInput):
    text = post.text
    classification = classify_post(text)
    isNSFW = True
    if classification == "offensive":
        isNSFW = True
    else:
        isNSFW = False
    result = db_insert("INSERT INTO posts (text, is_nsfw) VALUES (%s, %s)", (text, isNSFW))
    tags = ["v1"]
    post_id = result[0]
    post_tags=[]
    for tag in tags:
        tag_result = db_query("SELECT * FROM tags WHERE tag = %s", [tag])
        tag_id = tag_result[0][0]
        db_insert("INSERT INTO post_tags (post_id, tag_id) VALUES (%s, %s)", (post_id, tag_id))
        post_tag=tag_result[0][1]
        post_tags.append(post_tag)
    post_output = {
        "id":result[0],
        "tags":post_tags,
        "text":result[1],
        "isNSFW":result[2]
    }
    return post_output