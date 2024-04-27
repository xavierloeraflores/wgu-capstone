from Models import PostInput
from Utils import Database
from Controllers import ModelController

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
  def create_post_tag(post_id, tag_id):
      result = Database.db_insert("INSERT INTO post_tags (post_id, tag_id) VALUES (%s, %s)", (post_id, tag_id))
      return {"post_tag": result}

  @staticmethod
  def create_post(post: PostInput):
      text = post.text
      classification = ModelController.classify_post(text)
      is_nsfw = True
      if classification == "offensive":
          is_nsfw = True
      else:
          is_nsfw = False
      result = Database.db_insert("INSERT INTO posts (text, is_nsfw) VALUES (%s, %s)", (text, is_nsfw))
      tags = []
      post_id = result[0]
      post_tags=[]
      if len(tags) !=0:
        for tag in tags:
            tag_result = Database.db_query("SELECT * FROM tags WHERE tag = %s", [tag])
            tag_id = tag_result[0][0]
            Database.db_insert("INSERT INTO post_tags (post_id, tag_id) VALUES (%s, %s)", (post_id, tag_id))
            post_tag=tag_result[0][1]
            post_tags.append(post_tag)
      post_output = {
          "id":result[0],
          "tags":post_tags,
          "text":result[1],
          "isNSFW":result[2]
      }
      return post_output