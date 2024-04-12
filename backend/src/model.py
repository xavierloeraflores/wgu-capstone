import pickle
from Utils import clean_text

print('Loading model and vectorizer...')
model = pickle.load(open('./src/model.pkl', 'rb'))
vectorizer = pickle.load(open('./src/vectorizer.pkl', 'rb'))
print('Model and vectorizer loaded.')

def model_health():
    text = 'test'
    vectorized_text = vectorizer.transform([text])  
    prediction = model.predict(vectorized_text)
    if prediction[0] == "safe" or prediction[0] == "offensive":
        return {
            "message":'Model service is active and running.', 
            "status":"ok", 
            "model_status":"active", 
            "text":text,
            "prediction":prediction[0]
            }
    else:
        return {
            "message":'Model service not is active and running.', 
            "status":"ok", 
            "model_status":"inactive"
            }

def classify_post(post):
    cleaned_post = clean_text(post)
    vectorized_post = vectorizer.transform([cleaned_post])
    prediction = model.predict(vectorized_post)
    return prediction[0]