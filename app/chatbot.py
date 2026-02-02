import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

mensagem = "Olá"

response = client.chat.completions.create(
    model="google/gemma-3-27b-it:free",
    messages=[
        {"role": "system", "content": ""},
        {"role": "user", "content": mensagem}
    ]
)

print(response.choices[0].message.content)