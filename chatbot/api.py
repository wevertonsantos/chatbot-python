from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from chat import resposta_bot

app = FastAPI()

app.mount("/static",StaticFiles(directory="frontend/static"),name="static")

templates = Jinja2Templates(
    directory="frontend/templates"
)

@app.get('/',include_in_schema=False)
@app.get('/chat',include_in_schema=False)
def home_chatbot(request: Request):
    return templates.TemplateResponse(request,"chatbot.html")

@app.get('/api/resposta_bot')
def pegar_resposta():
    return resposta_bot()
    '''
    return template.TemplateResponse(
        name="chatbot.html",
        context={"request":req}
    )
    '''