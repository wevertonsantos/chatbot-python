const $ = document
const botaoEnviarMensagemUsuario = $.getElementById("enviar_mensagem_usuario")
const body = $.querySelector("body")

const main = () => {
    botaoEnviarMensagemUsuario.addEventListener('click', async (e) => {
        e.preventDefault()

        const valorMensagemUsuario = $.getElementById("mensagem_usuario").value

        respostaBot = await respostaApi(valorMensagemUsuario)

        const p = $.createElement("p")
        p.innerText = respostaBot
        body.appendChild(p)

    })
}

const respostaApi = async (mensagemUsuario) => {
    const res = await fetch("http://127.0.0.1:8000/pegar_resposta", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mensagem: mensagemUsuario })
    })

    const data = await res.json()
    return data.resposta
}

main()