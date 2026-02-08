import sqlite3

conexao = sqlite3.connect("chatbot.db")
cursor = conexao.cursor()

cursor.execute("""CREATE TABLE usuarios (
               id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
               )""")