const formRegistrar = document.querySelector(".modal_registrar_form")
let emailRegistrar = ""
let senhaRegistrar = ""

export const criarConta = async () => {
    formRegistrar.addEventListener("submit", async (e) => {
        e.preventDefault()

        emailRegistrar = document.getElementById("input_email_registrar").value
        senhaRegistrar = document.getElementById("input_senha_registrar").value

        if (!emailRegistrar && !senhaRegistrar) {
            return
        }
    })

    try {
        const res = await fetch("http://127.0.0.1:8000/registrar", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email: emailRegistrar,
                senha: senhaRegistrar
            })
        })

        const data = await res.json()
        if (data.sucesso === true) {
            window.location.reload()
        }
    } catch (err) {
        console.error(err)
    }
    
}

export const fazerLogin = () => {
    
}