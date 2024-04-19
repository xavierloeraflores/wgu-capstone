from Models import PostInput
from database import db_query, db_insert
from Controllers import ModelController

class PostController:
  @staticmethod
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

  @staticmethod
  def get_post_by_id(post_id):
      result = db_query("SELECT * FROM posts WHERE id = %s", [post_id])[0]
      return {"post": result}

  @staticmethod
  def create_post(post: PostInput):
      text = post.text
      classification = ModelController.classify_post(text)
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