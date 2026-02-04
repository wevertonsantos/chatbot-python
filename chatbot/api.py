from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from chat import resposta_bot
from pydantic import BaseModel

app = FastAPI()

app.mount("/static",StaticFiles(directory="frontend/static"),name="static")

templates = Jinja2Templates(
    directory="frontend/templates"
)

class Mensagem(BaseModel):
    mensagem: str

@app.get('/',include_in_schema=False)
@app.get('/chat',include_in_schema=False)
def home_chatbot(request: Request):
    return templates.TemplateResponse(request,"chatbot.html")

@app.post('/pegar_resposta')
def pegar_resposta(dados: Mensagem):
    return {"resposta": resposta_bot(dados.mensagem)}