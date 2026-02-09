import sqlite3

def conectar_db():
    conexao_db = sqlite3.connect("chatbot.db")
    return conexao_db

def criar_usuario():
    conexao_db = conectar_db()
    cursor = conexao_db.cursor()

    cursor.execute("""
        INSERT INTO usuarios
        ()
    """)

    conexao_db.commit()