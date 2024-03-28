import pickle

model = pickle.load(open('model.pkl', 'rb'))
vectorizer = pickle.load(open('vectorizer.pkl', 'rb'))

def classify_post(post):
    _post = vectorizer.transform([post])
    prediction = model.predict(_post)
    print(prediction)
    return prediction

classify_post("Test Text")