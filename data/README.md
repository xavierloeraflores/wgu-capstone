# Data

This directory contains scripts for seeding the database with data from the dataset. The dataset is included in the form csv files in the `data` directory. The scripts are written in Python and use the `pandas` library to read the csv files and insert the data into the database.

# Set Up

(From the data directory. This file is data/README.md.)

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

# Seed the Database

```
python3 main.py
```
