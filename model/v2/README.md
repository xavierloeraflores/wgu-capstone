- linear_model: Logistic Regression
- model_selection: train_test_split
- feature_extraction: TfidfVectorizer
- cleaning: Stopwords
- stemmer: SnowballStemmer
- metrics: accuracy_score
- dataset: [Twitter Sentiment Analysis], [Hate Speech & Offensive Language]
- accuracy: 0.9422128259337562
- time(s) on 10000 copies of test data: 0.6921260356903076

Combines the two datasets by mapping classifications of "hate speech"/"offensive"/"safe" from Hate Speech & Offensive Language(HSOL) to the binary results of "offensive"/"safe" of Twitter Sentiment Analysis(TSA).

| HSOL # | HSOL        | TSA # | TSA       | Model     |
| ------ | ----------- | ----- | --------- | --------- |
| 0      | hate speech | 1     | offensive | offensive |
| 1      | offensive   | 1     | offensive | offensive |
| 2      | safe        | 0     | safe      | safe      |
