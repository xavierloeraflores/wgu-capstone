from data import preprocess_data
from visualization import visualize
from test import test_model
from persistance import persist
from train import train


visualize()
X, y = preprocess_data()
model, vectorizer = train(X, y)
test_model(model, vectorizer)
persist(model, vectorizer)