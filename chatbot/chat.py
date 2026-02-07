import os
from dotenv import load_dotenv
from openai import OpenAI
load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)

models = client.models.list()
for m in models:
    print(m.id)

#nousresearch/hermes-3-llama-3.1-405b:free
#stepfun/step-3.5-flash:free
def resposta_bot(mensagem):
    resposta = client.chat.completions.create(
        model="stepfun/step-3.5-flash:free",
        messages=[
            {"role":"user","content":mensagem}
        ]
    )

    return resposta.choices[0].message.content