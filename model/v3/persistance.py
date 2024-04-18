import pickle

version = 'v3'

def dump_model(model):
    pickle.dump(model, open(f'model-{version}.pkl', 'wb'))

def dump_vectorizer(vectorizer):
    pickle.dump(vectorizer, open(f'vectorizer-{version}.pkl', 'wb'))

def load_model():
    return pickle.load(open(f'model-{version}.pkl', 'rb'))

def load_vectorizer():
    return pickle.load(open(f'vectorizer-{version}.pkl', 'rb'))

def persist(model, vectorizer):
    dump_model(model)
    dump_vectorizer(vectorizer)
