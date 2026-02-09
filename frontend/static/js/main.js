import { respostaApi } from "./resApi.js"
import { criarMensagemUsuario, criarMensagemPensando, criarMensagemBot } from "./criarMensagem.js"
import {criarModal,fecharModal,criarConta} from "./modalLogin.js"
const $ = document
const form = $.querySelector('form')

const main = () => {
    // Chatbot
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        // Pegando mensagem usuário
        let valorMensagemUsuario = $.getElementById("caixa_mensagem_usuario").value.trim()

        if (!valorMensagemUsuario) {
            return;
        }

        criarMensagemUsuario(valorMensagemUsuario)
        const caixaMensagemUsuario = $.getElementById("caixa_mensagem_usuario")
        // Limpando caixa mensagem usuário
        caixaMensagemUsuario.value = ''
        
        // Criando elemento pensando BOT
        const pensandoElemento = criarMensagemPensando()

        // Resposta Bot API
        const respostaBot = await respostaApi(valorMensagemUsuario)

        //Criar mensagem BOT
        criarMensagemBot(pensandoElemento, respostaBot)
    })

    // Abrindo modal
    criarModal()

    // Fechar Modal
    fecharModal()

    // Criar conta
    criarConta()
}

main()