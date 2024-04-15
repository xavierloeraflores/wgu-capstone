import psycopg2
import os
DSN = os.getenv('DB_CONNECTION')
parse_dsn = psycopg2.extensions.parse_dsn(DSN)



def db_query(query, params=None):
    connection = psycopg2.connect(dsn=DSN)
    cursor = connection.cursor()
    cursor.execute(query, params)
    connection.commit()
    result = cursor.fetchall()
    cursor.close()
    connection.close()
    return result

def db_insert(query, params=None):
    connection = psycopg2.connect(dsn=DSN)
    cursor = connection.cursor()
    cursor.execute(query + ' RETURNING *', params)
    connection.commit()
    result = cursor.fetchone()
    cursor.close()
    connection.close()
    return result