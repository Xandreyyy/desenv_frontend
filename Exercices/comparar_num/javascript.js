const num1 = document.getElementById("entrada1")
const num2 = document.getElementById("entrada2")
const form = document.getElementById("form_input")
const MensagemMenor = document.querySelector(".mensagem_erro")
const MensagemIgual = document.querySelector(".mensagem_igual")
const MensagemSucesso = document.querySelector(".mensagem_sucesso")
let entrada1, entrada2

function comparar(entrada1, entrada2) {
    if (entrada1 > entrada2){
        return 1
    }else if (entrada1 == entrada2){
        return 0
    }else if (entrada1 < entrada2){
        return -1
    }
}

function imprimir(comparar) {
    if (comparar(entrada1, entrada2) == 1){
        MensagemMenor.style.display = "none"
        MensagemIgual.style.display = "none"
    }else if (comparar(entrada1, entrada2) == 0){
        MensagemSucesso.style.display = "none"
        MensagemMenor.style.display = "none"
        MensagemIgual.style.display = "block"
        MensagemIgual.innerHTML = "As entradas não podem ser iguais!"
    }else if (comparar(entrada1, entrada2) == -1){
        MensagemSucesso.style.display = "none"
        MensagemIgual.style.display = "none"
        MensagemMenor.style.display = "block"
        MensagemMenor.innerHTML = "A segunda entrada é maior que esta."
    }
}

num1.addEventListener("keyup", function(e){
    entrada1 = parseInt(e.target.value)
    comparar(entrada1, entrada2)
    imprimir(comparar)
})

num2.addEventListener("keyup", function(e){
    entrada2 = parseInt(e.target.value)
    comparar(entrada1, entrada2)
    imprimir(comparar)
})

form.addEventListener("submit", function(e){
    e.preventDefault()
    if (comparar(entrada1, entrada2) == 1){
        MensagemSucesso.style.display = "block"
        MensagemSucesso.innerHTML = "Parabéns! Você seguiu as instruções!"
        num1.value = ""
        num2.value = ""
        setTimeout(function(){
            MensagemSucesso.style.display = "none"
        }, 3000 )
    }
})
