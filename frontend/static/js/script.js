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
        
        respostaBot = await respostaApi(valorMensagemUsuario)
        criarMensagemBot(respostaBot)
    })
}

const criarMensagemUsuario = (valorMensagemUsuario) => {
    const mensagemUsuarioContainer = $.createElement("div")
    mensagemUsuarioContainer.style.display = 'flex'
    mensagemUsuarioContainer.classList.add("mensagem_usuario_container")
    mensagensContainer.appendChild(mensagemUsuarioContainer)

    const mensagemUsuario = $.createElement("div")
    mensagemUsuario.classList.add("mensagem_usuario")
    mensagemUsuario.innerText = valorMensagemUsuario
    mensagemUsuarioContainer.appendChild(mensagemUsuario)
}

const criarMensagemBot = (respostaBot) => {
    const mensagemBotContainer = $.createElement("div")
    mensagemBotContainer.classList.add("mensagem_bot_container")
    mensagensContainer.appendChild(mensagemBotContainer)

    const mensagemBot = $.createElement("div")
    mensagemBot.classList.add("mensagem_bot")
    mensagemBot.innerHTML = marked.parse(respostaBot)
    mensagemBotContainer.appendChild(mensagemBot)
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