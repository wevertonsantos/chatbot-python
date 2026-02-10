import { respostaApi } from "./resApi.js"
import { criarMensagemUsuario, criarMensagemPensando, criarMensagemBot } from "./criarMensagem.js"
import { abrirModal, fecharModal, trocandoTelaLoginRegistrar } from "./modalLogin.js"
import { criarConta, fazerLogin } from "./loginCriarConta.js"
const $ = document
const formChatContainer = $.querySelector('.form_chat_container')

const main = async () => {
    // Chatbot
    formChatContainer.addEventListener('submit', async (e) => {
        e.preventDefault()
        // Pegando mensagem usuário
        const valorMensagemUsuario = $.getElementById("caixa_mensagem_usuario").value.trim()

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
    abrirModal()

    // Fechar Modal
    fecharModal()

    // Trocando entre login e registrar
    trocandoTelaLoginRegistrar()

    // Criar conta
    criarConta()
}

main()