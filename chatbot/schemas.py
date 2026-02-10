from pydantic import BaseModel

class Mensagem(BaseModel):
    mensagem: str

class CriarUsuario(BaseModel):
    email: str
    senha: str