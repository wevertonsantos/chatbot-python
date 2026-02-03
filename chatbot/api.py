from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI()

template = Jinja2Templates(directory="../frontend/templates")

@app.get('/chat')
def chatbot(req: Request):
    return template.TemplateResponse(
        name="chatbot.html",
        context={"request":req}
    )

if __name__ == "__api__":
    uvicorn.run("api:app")