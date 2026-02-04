const $ = document
const botaoEnviarMensagemUsuario = $.getElementById("enviar_mensagem_usuario")

const pegarMensagemUsuario = () => {
    botaoEnviarMensagemUsuario.addEventListener('click', (e) => {
        e.preventDefault()
        const valorMensagemUsuario = $.getElementById("mensagem_usuario").value
        respostaApi(valorMensagemUsuario)
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
    console.log(data.resposta)
}

pegarMensagemUsuario()