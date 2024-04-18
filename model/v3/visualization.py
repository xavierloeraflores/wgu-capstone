from wordcloud import WordCloud, STOPWORDS , ImageColorGenerator
from data import preprocess_data


def generate_wordcloud(words_data):
    wordcloud = WordCloud(max_font_size=50, max_words=100, background_color="white")
    wordcloud.generate(' '.join(tweet for tweet in words_data))
    wordcloud.to_file("wordcloud.png")

def visualize_raw_data():
    X, y = preprocess_data()
    generate_wordcloud(X)

def visualize():
    visualize_raw_data()