const $ = document
const botaoEnviarMensagemUsuario = $.getElementById("botao_enviar")
const caixaMensagemUsuario = $.getElementById("caixa_mensagem_usuario")
const body = $.querySelector("body")
const chatContainer = $.querySelector('.chat_container')

const main = () => {
    botaoEnviarMensagemUsuario.addEventListener('click', async (e) => {
        e.preventDefault()

        const valorMensagemUsuario = $.getElementById("caixa_mensagem_usuario").value

        if (!valorMensagemUsuario) {
            return;
        }

        respostaBot = await respostaApi(valorMensagemUsuario)

        const mensagemUsuarioContainer = $.createElement("div")
        mensagemUsuarioContainer.style.display = 'flex'
        mensagemUsuarioContainer.classList.add("mensagem_usuario_container")
        chatContainer.prepend(mensagemUsuarioContainer)
        const pMensagemUsuario = $.createElement("p")
        pMensagemUsuario.innerText = valorMensagemUsuario
        mensagemUsuarioContainer.appendChild(pMensagemUsuario)
        
        const mensagemBotContainer = $.createElement("div")
        mensagemBotContainer.classList.add("mensagem_bot_container")
        chatContainer.prepend(mensagemBotContainer)
        const pMensagemBot = $.createElement("p")
        pMensagemBot.classList.add("mensagem_bot")
        pMensagemBot.innerText = respostaBot
        mensagemBotContainer.appendChild(pMensagemBot)
    
        caixaMensagemUsuario.value = ''
        chatContainer.scrollTop = chatContainer.scrollHeight;
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