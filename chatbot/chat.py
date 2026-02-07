import os
from dotenv import load_dotenv
import requests
load_dotenv()

api_key=os.getenv("APIFREELLM_API_KEY")
base_url="https://openrouter.ai/api/v1"

def resposta_bot(mensagem):
    url = "https://apifreellm.com/api/v1/chat"

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    payload = {
        "message": mensagem
    }
     
    resposta = requests.post(url, headers=headers, json=payload)

    data = resposta.json()
    return data['response']