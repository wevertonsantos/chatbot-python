import os
from dotenv import load_dotenv
import requests
load_dotenv()

api_key=os.getenv("APIFREELLM_API_KEY")

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

    if resposta.status_code != 200:
        return "Erro ao conectar com a API"

    data = resposta.json()
    if not data.get("success"):
        return "Erro na resposta do modelo"
    
    return data['response']