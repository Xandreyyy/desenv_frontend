const entrada1 = document.getElementById('entrada1')
const entrada2 = document.getElementById('entrada2')
const form = document.getElementById('form_input')
let form_val = false
function comparar(entrada1, entrada2) {
    const comparacao = (parseInt(entrada1) > parseInt(entrada2))
    return comparacao
}

entrada1.addEventListener("keyup", function(e){
    form_val = comparar(e.value.comparacao)
    if (form_val){
        mensagem_erro.style.display = "none"
    }else{
        const mensagem_erro = document.querySelector(".mensagem_erro")
        mensagem_erro.style.display = "block"
        mensagem_erro.innerHTML = "A segunda entrada é maior que esta."
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    if (form_val){
        const Sucesso = document.querySelector(".mensagem_sucesso")
        Sucesso.style.display = "block"
        Sucesso.innerHTML = "Parabéns! Você seguiu as instruções!"
        entrada1.value = ''
        entrada2.value = ''
    }else{
        document.querySelector(".mensagem_erro").style.display = "block"
    }
})