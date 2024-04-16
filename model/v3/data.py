from pandas import read_csv, concat
from clean import clean_data



def preprocess_data():
    data = read_csv('../datasets/train.csv')
    data2 = read_csv('../datasets/labeled_data.csv')
    X = concat([data['tweet'], data2['tweet']])
    X = X.apply(clean_data)
    raw_y1 = data['label']
    raw_y2 = data2['class']
    categorized_y1 = raw_y1.map({1: 'offensive',  0: 'safe'})
    categorized_y2 = raw_y2.map({0: 'offensive', 1: 'offensive', 2: 'safe'})
    y = concat([categorized_y1, categorized_y2])
    return X, y