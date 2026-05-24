from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def optimize_query(query):

    prompt = f"""
    Analyze this SQL query.
    Suggest:
    1. Bottlenecks
    2. Better indexes
    3. Optimized query
    4. Expected performance gain

    Query:
    {query}
    """

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role":"user","content":prompt}
        ]
    )

    return response.choices[0].message.content