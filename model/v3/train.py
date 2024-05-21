from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import time


def print_accuracy_metrics(model, x_test_vec, y_test):
    y_pred = model.predict(x_test_vec)
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)

def print_speed_metrics(model, test_vec):
    print("Measuring Time...")
    start_time = time.time()
    for _ in range(10000):
        model.predict(test_vec)
    end_time = time.time()
    elapsed_time = end_time - start_time
    print("Elapsed Time:", elapsed_time)

def fit_vectorizer(x_train, x_test):
    vectorizer = TfidfVectorizer()  
    x_train_vec = vectorizer.fit_transform(x_train)
    x_test_vec = vectorizer.transform(x_test)
    return vectorizer, x_train_vec, x_test_vec

def fit_model(x_train_vec, y_train):
    model = LogisticRegression()
    model.fit(x_train_vec, y_train)
    return model

def split_data(x,y):
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.05, random_state=64)
    return x_train, x_test, y_train, y_test



def train(x,y, test):
    x_train, x_test, y_train, y_test =split_data(x,y)
    vectorizer, x_train_vec, x_test_vec = fit_vectorizer(x_train, x_test)
    model = fit_model(x_train_vec, y_train)
    print_accuracy_metrics(model, x_test_vec, y_test)
    test_vec = vectorizer.transform(test)
    print_speed_metrics(model, test_vec)

    return model, vectorizer