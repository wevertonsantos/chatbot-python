const $ = document
const mensagensContainer = $.querySelector('.mensagens_container')

export const criarMensagemUsuario = (valorMensagemUsuario) => {
    const mensagemUsuarioContainer = $.createElement("div")
    mensagemUsuarioContainer.style.display = 'flex'
    mensagemUsuarioContainer.classList.add("mensagem_usuario_container")
    mensagensContainer.appendChild(mensagemUsuarioContainer)

    const mensagemUsuario = $.createElement("div")
    mensagemUsuario.classList.add("mensagem_usuario")
    const pMensagemUsuario = $.createElement("p")
    pMensagemUsuario.innerText = valorMensagemUsuario
    mensagemUsuarioContainer.appendChild(mensagemUsuario)
    mensagemUsuario.appendChild(pMensagemUsuario)
}

export const criarMensagemPensando = () => {
    const mensagemBotContainer = $.createElement("div")
    mensagemBotContainer.classList.add("mensagem_bot_container")
    mensagensContainer.appendChild(mensagemBotContainer)
    mensagensContainer.scrollTo({
        top: mensagensContainer.scrollHeight,
        behavior: "smooth"
    });

    const divPensandoBot = $.createElement("div")
    divPensandoBot.classList.add("bot_pensando")
    divPensandoBot.innerText = "Pensando..."
    mensagemBotContainer.appendChild(divPensandoBot)
    return divPensandoBot
}

export const criarMensagemBot = (elementoPensando, respostaBot) => {

    const divMensagemBot = document.createElement("div")
    divMensagemBot.classList.add("mensagem_bot")

    divMensagemBot.innerHTML = marked.parse(respostaBot.replace(/\n/g, "\n\n"))

    elementoPensando.replaceWith(divMensagemBot)
}