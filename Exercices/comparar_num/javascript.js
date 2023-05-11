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

// const entrada1 = document.getElementById('entrada1')
// const entrada2 = document.getElementById('entrada2')
// const form = document.getElementById('form_input')
// let form_val = false

// function comparar(entrada1, entrada2) {
//     const comparacao = (parseInt(entrada1) > parseInt(entrada2))
//     return comparacao
// }

// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     form_val = comparar(entrada1.value, entrada2.value)
//     if (form_val){
//         alert(`Parabéns! Você seguiu as instruções!`)
//         entrada1.value = ''
//         entrada2.value = ''
//     }else{
//         alert(`Falha! Você não seguiu as instruções!`)
//     }
// })

// entrada1.addEventListener("keyup", function(e){
    
// })
//Construir uma aplicação web para calcular a média de notas de atividades.
//Média Ponderada(MP) - recebe várias notas
//MP: 7.2/3 + 5/4 + 9/3
//