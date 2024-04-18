import nltk
import re

stopword = ['i', 'u', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "youre", "you've", "youve", "you'll", "youll", "you'd", "youd",'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", "shes" 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", "thatll",  'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", "dont", 'should', "should've", "shouldve" 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", "arent", 'couldn', "couldn't", "couldnt", 'didn', "didn't", "didnt", 'doesn', "doesn't", "doesnt", 'hadn', "hadn't", "hadnt", 'hasn', "hasn't", "hasnt", 'haven', "haven't", "havent", 'isn', "isn't", "isnt", 'ma', 'mightn', "mightn't", "mightnt", 'mustn', "mustn't", "mustnt", 'needn', "needn't", "neednt", 'shan', "shan't", "shant", 'shouldn', "shouldn't", "shouldnt", 'wasn', "wasn't", "wasnt", 'weren', "weren't", "werent", 'won', "won't", "wont", 'wouldn', "wouldn't", "wouldnt"]

terms = ['user', 'link', 'rt', 'amp', 'via', '...']

stemmer = nltk.SnowballStemmer('english')

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



