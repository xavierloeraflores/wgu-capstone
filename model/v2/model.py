from pandas import read_csv, concat
import nltk
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from wordcloud import WordCloud, STOPWORDS , ImageColorGenerator
import pickle
import time

data = read_csv('../datasets/train.csv')
data2 = read_csv('../datasets/labeled_data.csv')
stemmer = nltk.SnowballStemmer('english')
stopword = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]

def clean(text):
    text = text.lower()
    text = [word for word in text.split(' ') if word not in stopword]
    text = " ".join(text)
    text = [stemmer.stem(word) for word in text.split(' ')]
    text = " ".join(text)
    return text

X = concat([data['tweet'], data2['tweet']])
X = X.apply(clean)

raw_y1 = data['label']
raw_y2 = data2['class']
categorized_y1 = raw_y1.map({1: 'offensive',  0: 'safe'})
categorized_y2 = raw_y2.map({0: 'offensive', 1: 'offensive', 2: 'safe'})
y = concat([categorized_y1, categorized_y2])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.05, random_state=64)

vectorizer = TfidfVectorizer() #Test: max_features=1000 
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

model = LogisticRegression()
model.fit(X_train_vec, y_train)

y_pred = model.predict(X_test_vec)

accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
print("Coefficients:", model.coef_)
print("Intercept:", model.intercept_)
print("Classes:", model.classes_)
print("Number of iterations:", model.n_iter_)

test_data = read_csv('../datasets/test.csv')
test_X = data['tweet']
test_X = test_X.apply(clean)
test_vec = vectorizer.transform(test_data)
print("Measuring Time...")
start_time = time.time()
for _ in range(10000):
        model.predict(test_vec)
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time:", elapsed_time)

text= "Test Text"
input = [clean(text)]
output = model.predict(vectorizer.transform(input))
print([text],":", input, ":", output)

_wordcloud = WordCloud(max_font_size=50, max_words=100, background_color="white").generate(' '.join(tweet for tweet in data2['tweet']))
_wordcloud.to_file("wordcloud.png")

pickle.dump(model, open('model-v2.pkl', 'wb'))
pickle.dump(vectorizer, open('vectorizer-v2.pkl', 'wb'))