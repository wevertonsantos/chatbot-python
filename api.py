from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from chatbot.chat import resposta_bot
import hashlib
from chatbot.schemas import Mensagem, CriarUsuario
from chatbot.sqlite import criar_usuario_db

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
    try:
        usuario.senha = hashlib.sha256(usuario.senha.encode('utf-8')).hexdigest()
        criar_usuario_db(usuario)
        print("usuario criado com sucesso")
        return {"resposta": "usuario criado com sucesso","sucesso":True}
    except Exception as err:
        print("erro ao criar usuario")
        return {"resposta": "erro ao criar usuario","sucesso":False,"erro":err}