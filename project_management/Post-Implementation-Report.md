# Post-implementation Report

Create a post-implementation as outlined below. Provide sufficient detail so that a reader knowledgeable
in computer science but unfamiliar with your project can understand what you have accomplished. Using
examples and visualizations (including screenshots) beyond the three required is recommended (but not
required). Write everything in the past tense.

## Solution Summary

• Summarize the problem and solution.
• Describe how the application provides a solution to the problem from parts A and B.

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

```

The data was sourced from CSV files and loaded into pandas for processing. After loading the different datasets, the data was then preprocessed to standardize the format of the data from the different datasets. The data was then combined into a singular dataset that was cleaned and prepared for splitting into training and testing sets. 

```python

# Issue: #186
# CODE BLOCK: Data Cleaning

```

To develop the model, the data was first vectorized using a TF-IDF vectorizer. The vectorized data was then used to train a logistic regression model. After evaluating the model using the testing data to determine its accuracy, the model was then saved to a PKL file for use in the backend server application.

```python

# Issue: #185
# CODE BLOCK: Data Vectorization

```

```python

# Issue: #184
# CODE BLOCK: Model Training

```
A separate module then uses those saved models and vectorizers to classify the posts from the dataset. After classifying the posts, the data and classifications are then saved to a PostgreSQL database.

## Machine Learning

For each employed method (at least one is required) provide the following:
• Identify the method and what it does (the “what”).
• Describe how the method was developed (the “how”).
• Justify the selection and development of the method (the “why”).

## Validation

For each employed method described in the section above provide the following:
• An appropriate validation method.An appropriate validation method.
• Results of the validation method or a future plan to obtain those results.

## Visualizations

Identify the location of at least three unique visualizations. They can additionally included here.

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