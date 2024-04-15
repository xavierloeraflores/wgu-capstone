from os import getenv
from pandas import read_csv

DB_CONNECTION = getenv('DB_CONNECTION')

def read_csv_data():
    dataset1 = read_csv('./datasets/train.csv')
    dataset2 = read_csv('./datasets/labeled_data.csv')
    return dataset1, dataset2

def format_datasets(dataset1, dataset2):
    print("Formatting datasets")
    formatted_dataset1_X, formatted_dataset1_y = format_first_dataset(dataset1)
    print(formatted_dataset1_X)
    print(formatted_dataset1_y)

def format_first_dataset(dataset):
    print("Formatting first dataset")
    X = dataset['tweet']
    raw_y = dataset['label']
    y = raw_y.map({1: 'offensive',  0: 'safe'})
    return X,y 

## Main
dataset1, dataset2 = read_csv_data()
format_datasets(dataset1=dataset1, dataset2=dataset2)