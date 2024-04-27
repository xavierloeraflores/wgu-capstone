from Models import PostInput
from Utils import Database
from Controllers import ModelController
import json

class PostController:
  @staticmethod
  def get_posts(page=1):
      posts =[]
      last_page = (Database.db_query("SELECT COUNT(*) FROM posts")[0][0] // 10) + 1
      if last_page < page:
          return {"posts":posts, "currentPage":page, "lastPage":last_page, "message": "Posts retrieved successfully"}
      offset = (page - 1) * 10
      result = Database.db_query("SELECT * FROM posts ORDER BY created_at DESC LIMIT 10 OFFSET %s ", [offset])
      for post in result:
          post_output = {
              "id":post[0],
              "text":post[1],
              "isNSFW":post[2],
              "date":post[3],
              "tags":post[4]
          }
          posts.append(post_output)
      return {"posts":posts, "currentPage":page, "lastPage":last_page, "message": "Posts retrieved successfully"}

  @staticmethod
  def get_post_by_id(post_id):
      result = Database.db_query("SELECT * FROM posts WHERE id = %s", [post_id])[0]
      return {"post": result}
  

  @staticmethod
  def create_post(post: PostInput):
      text = post.text
      classification = ModelController.classify_post(text)
      is_nsfw = True
      if classification == "offensive":
          is_nsfw = True
      else:
          is_nsfw = False
      tags=["user"] 
      post_tags = json.dumps(tags)
      result = Database.db_insert("INSERT INTO posts (text, is_nsfw, tags) VALUES (%s, %s, %s)", (text, is_nsfw, post_tags))
      post_output = {
          "id":result[0],
          "tags":post_tags,
          "text":result[1],
          "isNSFW":result[2]
      }
      return post_output