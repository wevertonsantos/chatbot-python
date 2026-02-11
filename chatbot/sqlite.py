import sqlite3

def conectar_db():
    conexao_db = sqlite3.connect("chatbot.db")
    return conexao_db

def criar_tabela_usuarios():
    conexao_db = conectar_db()
    cursor = conexao_db.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_usuario TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            senha_hash TEXT NOT NULL
        )
    """)
    conexao_db.commit()
    conexao_db.close()
    print("Tabela 'usuarios' verificada/criada com sucesso.")

def listar_tabelas_db():
    conexao_db = conectar_db()
    cursor = conexao_db.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tabelas = cursor.fetchall()
    conexao_db.close()
    return [t[0] for t in tabelas]

def criar_usuario_db(usuario):
    conexao_db = conectar_db()
    cursor = conexao_db.cursor()
    try:
        cursor.execute("""
                INSERT INTO usuarios
                (nome_usuario, email, senha_hash)
                VALUES
                (?,?,?)
            """,(usuario.nome_usuario, usuario.email, usuario.senha))
        conexao_db.commit()
        print(f"Usuário '{usuario.nome_usuario}' inserido com sucesso no banco de dados.")
    except sqlite3.IntegrityError as e:
        print(f"Erro de integridade ao inserir usuário: {e}")
        raise ValueError("Erro ao criar usuário: e-mail já cadastrado ou outro problema de integridade.") from e
    except Exception as e:
        print(f"Erro inesperado ao inserir usuário: {e}")
        raise ValueError(f"Erro inesperado ao criar usuário: {e}") from e
    finally:
        conexao_db.close()