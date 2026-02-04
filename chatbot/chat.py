import os
from dotenv import load_dotenv
from openai import OpenAI
load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

def resposta_bot():
    resposta = client.chat.completions.create(
        model="stepfun/step-3.5-flash:free",
        messages=[
            {"role":"user","content":"Olá"}
        ]
    )

    return resposta.choices[0].message