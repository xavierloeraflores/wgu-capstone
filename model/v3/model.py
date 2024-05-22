from data import preprocess_data, preprocess_test_data
from visualization import visualize
from test import test_model
from persistence import persist
from train import train


visualize()
X, y = preprocess_data()
test = preprocess_test_data()
model, vectorizer = train(X, y, test)
test_model(model, vectorizer)
persist(model, vectorizer)