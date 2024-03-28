# Model

Current model: model/v1 - model.pkl

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
