const $ = document
const botaoEnviarMensagemUsuario = $.getElementById("botao_enviar")
const body = $.querySelector("body")
const mensagemUsuarioContainer = $.querySelector(".mensagem_usuario_container")
const mensagemBotContainer = $.querySelector(".mensagem_bot_container")

const main = () => {
    botaoEnviarMensagemUsuario.addEventListener('click', async (e) => {
        e.preventDefault()

        const valorMensagemUsuario = $.getElementById("caixa_mensagem_usuario").value

        if (!valorMensagemUsuario) {
            return;
        }

        respostaBot = await respostaApi(valorMensagemUsuario)

        mensagemUsuarioContainer.style.display = 'flex'
        const pMensagemUsuario = $.createElement("p")
        pMensagemUsuario.classList.add("mensagem_usuario")
        pMensagemUsuario.innerText = valorMensagemUsuario
        mensagemUsuarioContainer.appendChild(pMensagemUsuario)

        const pMensagemBot = $.createElement("p")
        pMensagemBot.classList.add("mensagem_bot")
        pMensagemBot.innerText = respostaBot
        mensagemBotContainer.appendChild(pMensagemBot)

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