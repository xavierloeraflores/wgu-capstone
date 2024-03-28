from sklearn import svm
import pickle

model = pickle.load(open('model.pkl', 'rb'))

def classify_post(post):
    return True