const formRegistrar = document.querySelector(".modal_registrar_form")
const abaUsuario = document.querySelector(".aba_usuario")
const modalLogin = document.querySelector(".modal_login")
const usuarioContainerSpan = document.querySelector(".usuario_container span")

export const criarConta = async () => {
    formRegistrar.addEventListener("submit", async (e) => {
        e.preventDefault()

        const emailRegistrar = document.getElementById("input_email_registrar").value
        const senhaRegistrar = document.getElementById("input_senha_registrar").value
        const nomeUsuarioRegistrar = document.getElementById("input_usuario_registrar").value

        if (!emailRegistrar && !senhaRegistrar && !nomeUsuarioRegistrar) {
            return
        }

        apiRegistrar(emailRegistrar,senhaRegistrar,nomeUsuarioRegistrar)
    })
}

const apiRegistrar = async (emailRegistrar,senhaRegistrar,nomeUsuarioRegistrar) => {
    try {
            const res = await fetch("http://127.0.0.1:8000/registrar", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    nome_usuario: nomeUsuarioRegistrar,
                    email: emailRegistrar,
                    senha: senhaRegistrar
                })
            })

            const data = await res.json()
            if (data.sucesso) {
                abaUsuario.innerText = "usuario"
                modalLogin.style.display = "none"
                usuarioContainerSpan.style.display = "none"
            }

        } catch (err) {
            console.error(err)
        }
}

export const fazerLogin = () => {
    
}