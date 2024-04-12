from Models import Post

dummy_post1 = {
    "id": 1,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }

dummy_post2 = {
    "id": 2,
    "isNSFW": True,
    "text": "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }

dummy_post3 = {
    "id": 3,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }
dummy_post4 = {
    "id": 4,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }

dummy_post5 = {
    "id": 5,
    "isNSFW": True,
    "text": "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }

dummy_post6 = {
    "id": 6,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }
dummy_post7 = {
    "id": 7,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }

dummy_post8 = {
    "id":8 ,
    "isNSFW": True,
    "text": "NSFW Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }

dummy_post9 = {
    "id": 9,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
  }
dummy_post10 = {
    "id": 10,
    "isNSFW": False,
    "text": "Post Content: This is an example of post content that will appear in the post component. Posts can be up to 144 characters as originally designed by Twitter"
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
def get_all_posts(page=0):
    if page == 0:
        return dummy_posts
    return dummy_posts

def get_post_by_id(post_id):
    return {"post_id": post_id}

def create_post(post: Post):
    return {"Message": "Post created successfully", "post": post}