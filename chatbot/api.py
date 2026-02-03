from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates
import uvicorn
from pathlib import Path

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent.parent

template = Jinja2Templates(
    directory=str(BASE_DIR / "frontend" / "templates")
)

@app.get('/chat')
def chatbot(req: Request):
    return template.TemplateResponse(
        name="chatbot.html",
        context={"request":req}
    )

if __name__ == "__api__":
    uvicorn.run("api:app")