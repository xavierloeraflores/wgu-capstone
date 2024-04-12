# Backend

[API URL](https://wgu-capstone-production.up.railway.app)

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
uvicorn src/main:app --reload
```

# Build & Start Docker Image using Nixpacks

Nixpacks is a tool that allows you to build OCI compliant images using Docker. There is a Nixpacks file in the backend directory with the necessary configuration to build the Docker image.

Dependencies:

- [Docker](https://docs.docker.com/get-docker/)
- [Nixpacks](https://nixpacks.com/docs/install)

(From the backend directory. This file is backend/README.md.)

Build:

```
nixpacks build . --name <DOCKER_IMAGE_NAME>
```

Start

```
docker run -it <DOCKER_IMAGE_NAME>
```
