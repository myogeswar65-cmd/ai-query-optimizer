from faker import Faker
import psycopg2
import random

fake = Faker()

conn = psycopg2.connect(
    host="localhost",
    database="optimizerdb",
    user="postgres",
    password="yogi1234"
)

cur = conn.cursor()

for i in range(100000):

    cur.execute("""
        INSERT INTO users(name,email,created_at)
        VALUES(%s,%s,NOW())
    """, (
        fake.name(),
        fake.email()
    ))

conn.commit()
cur.close()
conn.close()