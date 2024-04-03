from Models import Post

def get_all_posts(page=0):
    if page == 0:
        return ["post01", "post02", "post03"]
    return ["post1", "post2", "post3"]

def get_post_by_id(post_id):
    return {"post_id": post_id}

def create_post(post: Post):
    return {"Message": "Post created successfully", "post": post}