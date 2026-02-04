from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates
import uvicorn
from pathlib import Path
from chat import resposta_bot

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent.parent

template = Jinja2Templates(
    directory=str(BASE_DIR / "frontend" / "templates")
)

@app.get('/')
def pegar_resposta():
    return resposta_bot()
    '''
    return template.TemplateResponse(
        name="chatbot.html",
        context={"request":req}
    )
    '''