from clean import clean_data

def test_model_on_text( model, vectorizer, input_text = "test"):
    cleaned_text = [clean_data(input_text)]
    output_text = model.predict(vectorizer.transform(cleaned_text))
    print([input_text],":", cleaned_text, ":", output_text)


def test_model(model, vectorizer):
    test_model_on_text(model, vectorizer, "Test Text")
    test_model_on_text(model, vectorizer, "No swear words here")
    test_model_on_text(model, vectorizer, "Fuck, Fuck, Fuck")