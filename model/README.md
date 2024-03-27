# Datasets

| file             | name                             | size | link                                                                                             |
| ---------------- | -------------------------------- | ---- | ------------------------------------------------------------------------------------------------ |
| test.csv         | Twitter Sentiment Analysis       | 16k  | [Kaggle](https://www.kaggle.com/datasets/arkhoshghalb/twitter-sentiment-analysis-hatred-speech)  |
| train.csv        | Twitter Sentiment Analysis       | 29k  | [Kaggle](https://www.kaggle.com/datasets/arkhoshghalb/twitter-sentiment-analysis-hatred-speech)  |
| labeled_data.csv | Hate Speech & Offensive Language | 25K  | [Kaggle](https://www.kaggle.com/datasets/mrmorj/hate-speech-and-offensive-language-dataset/data) |

# Set Up

(From the model directory. This file is model/README.md.)

Start a virtual environment:

```
python3 -m venv env
source env/bin/activate
```

Install the required packages:

```
pip install -r requirements.txt
```

Save the installed packages:

```
pip freeze > requirements.txt
```

Run the model:

```
python3 model.py
```

Close the virtual environment:

```
deactivate
```
