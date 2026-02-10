from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from chat import resposta_bot
from schemas import Mensagem, CriarUsuario

app = FastAPI()

app.mount("/static",StaticFiles(directory="frontend/static"),name="static")

templates = Jinja2Templates(
    directory="frontend/templates"
)

@app.get('/',include_in_schema=False)
@app.get('/chat',include_in_schema=False)
def home_chatbot(request: Request):
    return templates.TemplateResponse(request,"chatbot.html")

@app.post('/pegar_resposta_bot')
def pegar_resposta_bot(dados: Mensagem):
    return {"resposta": resposta_bot(dados.mensagem)}

@app.post("/registrar")
def registrar_usuario(usuario: CriarUsuario):
    return {"resposta": "usuario recebido","sucesso":True}