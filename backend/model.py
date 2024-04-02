import pickle

print('Loading model and vectorizer...')
model = pickle.load(open('model.pkl', 'rb'))
vectorizer = pickle.load(open('vectorizer.pkl', 'rb'))
print('Model and vectorizer loaded.')

def classify_post(post):
    _post = vectorizer.transform([post])
    prediction = model.predict(_post)
    print(prediction)
    return prediction[0]