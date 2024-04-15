from os import getenv
from pandas import read_csv

DB_CONNECTION = getenv('DB_CONNECTION')

def read_csv_data():
    data = read_csv('./datasets/train.csv')
    data2 = read_csv('./datasets/labeled_data.csv')
    return data, data2
