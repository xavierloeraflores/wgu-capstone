# Backend

[Live Deployment](https://wgu-capstone-xavier-loera-flores.vercel.app)

[API Docs](https://wgu-capstone-docs.vercel.app/)

Built with:

- [FastAPI](https://fastapi.tiangolo.com/)
- [Python](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Uvicorn](https://www.uvicorn.org/)
- [Insomnia](https://insomnia.rest/)
- [Railway](https://railway.app/)


# Model & Vectorizer

Current model: v2 - model.pkl
Current vectorizer: v2/TfidfVectorizer - vectorizer.pkl

# Set Up

(From the backend directory. This file is backend/README.md.)

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

# Start the Server

(From the backend directory. This file is backend/README.md.)

Start the server:

```
uvicorn main:app --reload
```
