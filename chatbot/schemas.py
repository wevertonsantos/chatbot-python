from pydantic import BaseModel

class Mensagem(BaseModel):
    mensagem: str

class CriarUsuario(BaseModel):
    nome_usuario: str
    email: str
    senha: str