const $ = document
const botaoEnviarMensagemUsuario = $.getElementById("botao_enviar")
const caixaMensagemUsuario = $.getElementById("caixa_mensagem_usuario")
const body = $.querySelector("body")
const chatContainer = $.querySelector("chat_container")
const mensagensContainer = $.querySelector('.mensagens_container')
const form = $.querySelector('form')

const main = () => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        valorMensagemUsuario = $.getElementById("caixa_mensagem_usuario").value.trim()

        if (!valorMensagemUsuario) {
            return;
        }

        criarMensagemUsuario(valorMensagemUsuario)
        caixaMensagemUsuario.value = ''
        
        const pensandoElemento = criarMensagemPensando()

        const respostaBot = await respostaApi(valorMensagemUsuario)

        substituirPorResposta(pensandoElemento, respostaBot)

        respostaBot = await respostaApi(valorMensagemUsuario)
        criarMensagemBot(respostaBot)
    })
}

const substituirPorResposta = (elementoPensando, respostaBot) => {

    const divMensagemBot = document.createElement("div")
    divMensagemBot.classList.add("mensagem_bot")

    divMensagemBot.innerHTML = marked.parse(respostaBot)

    elementoPensando.replaceWith(divMensagemBot)
}

const criarMensagemUsuario = (valorMensagemUsuario) => {
    const mensagemUsuarioContainer = $.createElement("div")
    mensagemUsuarioContainer.style.display = 'flex'
    mensagemUsuarioContainer.classList.add("mensagem_usuario_container")
    mensagensContainer.appendChild(mensagemUsuarioContainer)

    const mensagemUsuario = $.createElement("div")
    mensagemUsuario.classList.add("mensagem_usuario")
    pMensagemUsuario = $.createElement("p")
    pMensagemUsuario.innerText = valorMensagemUsuario
    mensagemUsuarioContainer.appendChild(mensagemUsuario)
    mensagemUsuario.appendChild(pMensagemUsuario)
}

const criarMensagemPensando = () => {
    const mensagemBotContainer = $.createElement("div")
    mensagemBotContainer.classList.add("mensagem_bot_container")
    mensagensContainer.appendChild(mensagemBotContainer)

    const divPensandoBot = $.createElement("div")
    divPensandoBot.classList.add("bot_pensando")
    divPensandoBot.innerText = "Pensando..."
    mensagemBotContainer.appendChild(divPensandoBot)
    return divPensandoBot
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