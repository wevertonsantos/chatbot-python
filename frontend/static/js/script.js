const $ = document
const botaoEnviarMensagemUsuario = $.getElementById("enviar_mensagem_usuario")

botaoEnviarMensagemUsuario.addEventListener('click', (e) => {
    e.preventDefault()
    const mensagemUsuario = $.getElementById("mensagem_usuario").value

    fetch("http://127.0.0.1:8000/pegar_resposta", {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({"mensagem":mensagemUsuario})
    }).then(res => {
        if (!res.ok) {
            console.log('Problema')
            return
        }

        return res.json()
    })
        .then(data => {
        console.log(data.resposta)
    })
})