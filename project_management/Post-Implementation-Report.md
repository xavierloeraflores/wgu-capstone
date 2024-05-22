# Post-implementation Report


## Solution Summary

The Social Club L.L.C. faced significant challenges in moderating the vast amount of user-generated content on its social media platform, resulting in a backlog and a decline in moderation quality. To address these issues, the company needed an efficient and scalable content moderation system. The implemented solution is a machine learning-based automated moderation system that reduces the workload on the moderation team, provides consistent and fast content filtering, and enhances user experience by reducing inappropriate content on the platform.

The new system uses a logistic regression model trained on user-generated data to categorize offensive content. Since the model is integrated into the backend of the social media platform, it enables real-time content moderation and significantly improves the efficiency of the moderation process. Additionally, the solution includes a full-stack web application that allows users to post and view auto-moderated content, preview potential content warnings before posting, and opt-in to view inappropriate content. This approach ensures the scalability of the moderation process and also offers a cost-effective way to maintain high-quality content on the platform.

The Social Club L.L.C. can handle the increasing volume of content without expanding the moderation team and save on long-term operational costs by automating content moderation. The machine learning system is supported by a responsive and mobile-friendly interface built with the Next.js framework that can be accessed on most modern web browsers. The deployment architecture is robust and scalable since it features a Next.js frontend hosted on Vercel, a FastAPI backend hosted on Railway, and a PostgreSQL database hosted via VercelDB all of which can automatically scale with traffic. In summary, the implemented solution ensures a high-quality user experience and reduces the workload on the moderation team by providing a cost-effective, accurate, and efficient way to moderate content on the Social Club L.L.C. platform.

## Data Summary

The data was sourced from two separate datasets from Kaggle. The first dataset, the training data from the Twitter Sentiment Analysis dataset(train.csv) contained over 29 thousand rows of data containing a social media post and a label indicating whether the post was racist or not. The second dataset, the Hate Speech & Offensive Language dataset(labeled_data.csv), contained over 25 thousand rows of data with a social media post and a label indicating whether the post contained hate speech, offensive language, or neither. The data was processed to map the labels to a binary classification of offensive or not offensive. The data was then split into training and testing sets for use in the machine learning model.

```python
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

def preprocess_test_data():
    data = read_csv('../datasets/test.csv')
    X = data['tweet']
    X = X.apply(clean_data)
    return X

```

The data was sourced from CSV files and loaded into pandas for processing. After loading the different datasets, the data was then preprocessed to standardize the format of the data from the different datasets. The data was then combined into a singular dataset that was cleaned and prepared for splitting into training and testing sets. 

```python

from nltk import SnowballStemmer
import re

stopword = ['i', 'u', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "youre", "you've", "youve", "you'll", "youll", "you'd", "youd",'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", "shes" 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", "thatll",  'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", "dont", 'should', "should've", "shouldve" 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", "arent", 'couldn', "couldn't", "couldnt", 'didn', "didn't", "didnt", 'doesn', "doesn't", "doesnt", 'hadn', "hadn't", "hadnt", 'hasn', "hasn't", "hasnt", 'haven', "haven't", "havent", 'isn', "isn't", "isnt", 'ma', 'mightn', "mightn't", "mightnt", 'mustn', "mustn't", "mustnt", 'needn', "needn't", "neednt", 'shan', "shan't", "shant", 'shouldn', "shouldn't", "shouldnt", 'wasn', "wasn't", "wasnt", 'weren', "weren't", "werent", 'won', "won't", "wont", 'wouldn', "wouldn't", "wouldnt"]

terms = ['user', 'link', 'rt', 'amp', 'via', '...']

stemmer = SnowballStemmer('english')

def remove_special_terms(text):
    text = [word for word in text.split(' ') if word not in terms]
    text = " ".join(text)
    return text

def remove_emojis(text):
    regex_pattern = re.compile("["
                               u"\U0001F600-\U0001F64F"  
                               u"\U0001F300-\U0001F5FF"  
                               u"\U0001F680-\U0001F6FF"  
                               u"\U0001F1E0-\U0001F1FF"  
                               u"\U00002500-\U00002BEF"  
                               u"\U00002702-\U000027B0"
                               u"\U00002702-\U000027B0"
                               u"\U000024C2-\U0001F251"
                               u"\U0001f926-\U0001f937"
                               u"\U00010000-\U0010ffff"
                               u"\u2640-\u2642"
                               u"\u2600-\u2B55"
                               u"\u200d"
                               "]+", flags=re.UNICODE)
    text = regex_pattern.sub(r'', text)
    return text

def remove_markdown(text):
    result = re.sub("<[a][^>]*>(.+?)</[a]>", 'link ', text)
    result = re.sub('ð', '', result) 
    result = re.sub('â', '', result)
    result = re.sub('&#x27;', "'", result) # apostrophe
    result = re.sub('&quot;', '"', result) 
    result = re.sub('&amp;', '&', result)
    result = re.sub('&#x2F;', ' ', result)
    result = re.sub('<p>', ' ', result)
    result = re.sub('<i>', ' ', result) 
    result = re.sub('&#62;', '', result)
    result = re.sub('&gt;', "", result) # >
    result = re.sub('&lt;', "", result) # <
    result = re.sub("\n", '', result) # newline 
    return result

def remove_stopwords(text):
    text = [word for word in text.split(' ') if word not in stopword]
    text = " ".join(text)
    return text

def stem_text(text):
    text = [stemmer.stem(word) for word in text.split(' ')]
    text = " ".join(text)
    return text

def remove_punctuation(text):
    text = re.sub(r'[^\w\s]', '', text)
    return text

def clean_data(text, markdown=True, stopwords=True, special_terms=True, stem=True, punctuation=True, emojis=True):
    text = text.lower()
    if markdown:
        text = remove_markdown(text)
    if emojis:
        text = remove_emojis(text)
    if punctuation:
        text = remove_punctuation(text)
    if special_terms:
        text = remove_special_terms(text)
    if stopwords:
        text = remove_stopwords(text)
    if stem:
        text = stem_text(text)
    return text

```

To develop the model, the data was first vectorized using a TF-IDF vectorizer. The vectorized data was then used to train a logistic regression model. After evaluating the model using the testing data to determine its accuracy, the model was then saved to a PKL file for use in the backend server application.

```python

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

```

```python

from data import preprocess_data, preprocess_test_data
from visualization import visualize
from test import test_model
from persistance import persist
from train import train

visualize()
X, y = preprocess_data()
test = preprocess_test_data()
model, vectorizer = train(X, y, test)
test_model(model, vectorizer)
persist(model, vectorizer)

```
A separate module then uses those saved models and vectorizers to classify the posts from the dataset. After classifying the posts, the data and classifications are then saved to a PostgreSQL database.

## Machine Learning
What: Logistic Regression is a statistical method that can be well suited for binary classification problems. It serves as the project's primary algorithm for identifying and categorizing offensive content in user-generated posts by classifying whether a post is offensive or not.

How:  The development of the logistic regression model involved several key steps. First, the user-generated labeled content dataset was preprocessed to clean, stem, and standardize the text by removing stop words, normalizing cases, and using tokenization. The cleaned text data was then vectorized using the TF-IDF (Term Frequency-Inverse Document Frequency) vectorizer to transform the text into numerical features which were used to train the logistic regression model on the labeled dataset. After evaluating the model on accuracy and efficiency, the trained model was saved and persisted as a PKL (Pickle) file for integration into the backend server application.

Why: Logistic Regression was chosen because of its effectiveness in binary classification and natural language processing problems. The logistic regression implementation from the SciKit-Learn library provides a probabilistic approach that is easy to understand and implement. Additionally, logistic regression is computationally efficient which is suitable for real-time moderation on the server while demonstrating a capability to accurately identify offensive content. Logistic regression aligns with the Social Club L.L.C's goal of providing a reliable, fast, and scalable content moderation system.

The following code snippet shows the implementation of the logistic regression model using the SciKit-Learn library in Python.
```python

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

```

## Validation

Upon the completion of the machine learning project for the Social Club L.L.C. project, we carried out a comprehensive validation process as outlined in our project proposal. The primary metrics used for evaluation were model accuracy and processing speed, with the objective of enhancing customer satisfaction and easing the workload of the moderation team. Three models were tested: Model 1, Model 2, and Model 3.

Model Accuracy and Efficiency Evaluation:
Model 1 demonstrated the highest accuracy at 0.9498, followed by Model 2 at 0.9422, and Model 3 at 0.9383. While all three models performed well in terms of accuracy, Model 1 outperformed the others, indicating its superior capability in accurately categorizing content. However, upon using the model in real-world tests, it appeared as if Model 3 performed the best from a subjective perspective since the first two models failed to recognize very clear cases of offensive content. In terms of efficiency, Model 1 processed requests at a speed of 0.7006 seconds per request, which is slightly slower than Model 2's 0.6921 seconds but significantly faster than Model 3, which took 4.4584 seconds per request. Although Model 2 was slightly faster than Model 1, the difference was negligible, meaning Model 1 would be the optimal choice given its higher accuracy. Model 3 was however chosen due because of its subjective performance. These validation tests need to be revisited and more data is needed to determine the best model.

Post-Implementation Verification:
Following the deployment of the machine learning system, extensive A/B testing will be conducted with a segment of users to compare the user experience of the new system against the previous one. Additionally, continuous monitoring will be needed to ensure there are no significant issues and that the system maintains high performance even under intense loads. The business team will need to consult and measure the efficiency gains in processing speed and accuracy directly contributed to reduced moderation workload.

The following code snippet shows how accuracy and speed were measured and displayed in the validation process. 
```python
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

```
## Visualizations

Below are visualizations of the data and the machine-learning model. Some of the visualizations are sourced from the development process and the screenshots are sourced from the final web application and can be viewed in the final application. The web application features high-resolution images and interactive charts on the analysis pages that can be accessed via the navigation bar.

## User Guide

The following user guide provides instructions on how to access and use the application either via the hosted web application or via a self hosting the development environment.

### Accessing the website
To access the website, follow the steps below:

1. Open a web browser on your desktop or mobile device. The site is built to be responsive and should work on most devices but works best on desktop.
2. Enter the URL of the website [wgu-capstone-xavier-loera-flores.vercel.app](wgu-capstone-xavier-loera-flores.vercel.app) in the address bar and press enter to navigate to the website.
3. Modules of the site may take a few seconds to load as they are set to sleep during periods with low activity. Once the website loads, you will be presented with the homepage.
4. Once the website loads, you will be presented with the homepage.


### Navigating the Website

Once you are on the home page, you can navigate the website using the following steps:

1. Use the navigation menu at the top of the page to access different sections of the website.
2. Click on the links to navigate to specific pages or click on the toggle buttons to perform actions.
3. The following pages are available on the website:
    - Home: The main landing page of the website where users can view the timeline or make a post.
    - About: View supplemental information about the site and its creation.   
    - Analysis: View data analysis or visualizations related to the data or the machine learning solution.
    - Docs: Access documentation for the api.
4. The following actions can be performed via the toggle buttons on the nav bar. 
    - Dark Mode: Toggle between light and dark mode.
    - Content Filter: Filter the content on the page based for offensive content.

### Using the Main Application

To use the application, follow these steps:

1. On the homepage, you can scroll and view posts that other users have made. You can navigate between pages of posts using the navigation buttons at the bottom of the page.
2. Using the text box at the top of the page, you can create a compose a post by entering your text.  
3. You now have the option to either submit your post or to simply see how the model would classify your post.
4. After submitting to classifying a post, you will see notifications about your post pop up on the bottom right of the screen.

### Viewing Analysis

To view analysis, follow these steps:

1. Navigate to the Analysis tab using the navigation bar and select a specific analysis page to view.
2. You can view visualizations and analysis of the data or machine learning model on the analysis page.
3. You can also download raw files relating to the page using the the dropdown menu near the top of the page.

### Accessing Documentation and Other Information

There are other pages on the site which are purely informational. You can access these pages by clicking on the links in the navigation bar.
1. To access the API documentation, click on the Docs link in the navigation bar.
2. To access information about the site and its creation, click on the About tab in the navigation bar and select the specific about page you would like to view.

### Running the Application Locally
Alternatively, you can run modules of the entire program locally using the instructions in the README.md file each of the modules directly.
Once you have downloaded the entire repository, you will see the following directories:
- backend
- frontend
- data
- database
- model
- project_management
- docs

You can run the backend, frontend, database, model, and data modules locally by following the instructions in the README.md file in each of the directories. The only modules needed to run the application are the backend, database, and frontend modules. The other modules are used for data processing, model training, project management, and documentation. Once you have the database, backend, and frontend modules running, you should be able to access the site locally by navigating to the localhost address provided by the frontend module.