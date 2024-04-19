from Models import PostInput, PostOutput
import random
from database import db_query, db_insert
from Controllers.model_controller import classify_post

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
def get_posts(page=1):
    posts =[]
    last_page = (db_query("SELECT COUNT(*) FROM posts")[0][0] // 10) + 1
    if last_page < page:
        return {"posts":posts, "currentPage":page, "lastPage":last_page, "message": "Posts retrieved successfully"}
    offset = (page - 1) * 10
    result = db_query("SELECT * FROM posts ORDER BY created_at DESC LIMIT 10 OFFSET %s ", [offset])
    for post in result:
        tags = []
        post_tags = db_query("SELECT * FROM post_tags INNER JOIN tags on tags.id=post_tags.tag_id WHERE post_id = %s", [post[0]])
        for tag in post_tags:
            tags.append(tag[3])
        post_output = {
            "id":post[0],
            "text":post[1],
            "isNSFW":post[2],
            "tags":tags
        }
        posts.append(post_output)
    return {"posts":posts, "currentPage":page, "lastPage":last_page, "message": "Posts retrieved successfully"}

def get_post_by_id(post_id):
    result = db_query("SELECT * FROM posts WHERE id = %s", [post_id])[0]
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
    tags = []
    post_id = result[0]
    post_tags=[]
    if len(tags) !=0:
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