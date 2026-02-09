const usuarioContainer = document.getElementById("usuario_container")
const modalLogin = document.getElementById("modal_login")
const telaLoginFormulario = document.querySelector(".modal_login_form")
const telaRegistrarFormulario = document.querySelector(".modal_registrar_form")
const spanRegistrar = document.querySelector(".span_registrar")
const pFazerLogin = document.querySelector(".span_fazer_login")

export const criarModal = () => {
    // Abrindo modal
    usuarioContainer.addEventListener("click", () => {
        modalLogin.classList.add("abrir")
    })
}

export const fecharModal = () => {
    // Fechando modal
    modalLogin.addEventListener("click", (e) => {
        if (e.target === modalLogin) {
            modalLogin.classList.remove("abrir")
        }
    })
}

export const criarConta = () => {
    spanRegistrar.addEventListener("click", () => {
        telaLoginFormulario.style.display = "none"
        telaRegistrarFormulario.style.display = "flex"
    })

    pFazerLogin.addEventListener("click", () => {
        telaLoginFormulario.style.display = "flex"
        telaRegistrarFormulario.style.display = "none"
    })
}