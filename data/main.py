from os import getenv
from pandas import read_csv, concat
import psycopg2

DB_CONNECTION = getenv('DB_CONNECTION')

def read_csv_data():
    dataset1 = read_csv('./datasets/train.csv')
    dataset2 = read_csv('./datasets/labeled_data.csv')
    return dataset1, dataset2

def format_datasets(dataset1, dataset2):
    print("Formatting datasets")
    formatted_dataset1_X, formatted_dataset1_y = format_first_dataset(dataset1)
    formatted_dataset2_X, formatted_dataset2_y = format_second_dataset(dataset2)
    print(formatted_dataset1_X)
    print(formatted_dataset1_y)
    print(formatted_dataset2_X)
    print(formatted_dataset2_y)
    X = concat([formatted_dataset1_X, formatted_dataset2_X])
    y = concat([formatted_dataset1_y, formatted_dataset2_y])
    print(X)
    print(y)
    return X, y

def format_first_dataset(dataset):
    print("Formatting first dataset")
    X = dataset['tweet']
    raw_y = dataset['label']
    y = raw_y.map({1: 'offensive',  0: 'safe'})
    return X,y 

def format_second_dataset(dataset):
    print("Formatting second dataset")
    X = dataset['tweet']
    raw_y = dataset['class']
    y = raw_y.map({0: 'offensive', 1: 'offensive', 2: 'safe'})
    return X,y 

def seed_data(X, y):
    print("Seeding data")
    print(len(X))
    print("Seeding data")
    print(len(y))
    for i in range(len(X)):
        try:
            text = X[i]
            classification = y[i]
            create_post(text, classification)
        except Exception as e:
            print(e)

def db_insert(query, params=None):
    connection = psycopg2.connect(dsn=DB_CONNECTION)
    cursor = connection.cursor()
    cursor.execute(query + ' RETURNING *', params)
    connection.commit()
    result = cursor.fetchone()
    cursor.close()
    connection.close()
    return result

def create_post(text, classification):
    try:
        is_nsfw = True
        if classification == "safe":
            is_nsfw = False
        result = db_insert('INSERT INTO posts (text, is_nsfw) VALUES (%s, %s)', (text, is_nsfw))
    except Exception as e:
        print(e)



## Main
dataset1, dataset2 = read_csv_data()
X, y = format_datasets(dataset1=dataset1, dataset2=dataset2)
seed_data(X, y)
