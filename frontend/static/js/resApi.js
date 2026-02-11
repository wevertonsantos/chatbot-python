export const respostaApi = async (mensagemUsuario) => {
    try {
        const res = await fetch("http://127.0.0.1:8000/pegar_resposta_bot", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mensagem: mensagemUsuario })
        })

        const data = await res.json()
        return data.resposta
    } catch (err) {
        console.log(err)
    }
    
}