from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI()

template = Jinja2Templates(directory="templates")