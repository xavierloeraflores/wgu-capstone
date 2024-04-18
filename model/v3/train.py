from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score


def print_metrics(model, x_test_vec, y_test):
    y_pred = model.predict(x_test_vec)
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)


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



def train(x,y):
    x_train, x_test, y_train, y_test =split_data(x,y)
    vectorizer, x_train_vec, x_test_vec = fit_vectorizer(x_train, x_test)
    model = fit_model(x_train_vec, y_train)
    print_metrics(model, x_test_vec, y_test)

    return model, vectorizer