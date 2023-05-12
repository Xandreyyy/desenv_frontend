//nomeBeneficiario.addEventListener('keyup', function(e) {
//console.log(e); - Exibindo todos os atributos do elemento.
//console.log(e.target.value);
//O e.target acessa o elemento que acionou o "keyup", no caso é o input do "nomeBeneficiario", e .value para acessar o valor, no caso, a letra

//Adicionaremos os objs de acordo com a necessidade
const entrada1 = document.getElementById("entrada1")
const entrada2 = document.getElementById("entrada2")
const form = document.getElementById("form_input")
const MensagemErro = document.querySelector(".mensagem_erro")
const MensagemSucesso = document.querySelector(".mensagem_sucesso")

//Function principal (FP) (IMPORTANTE: adicionar o ".value" no final dos objs, porque senão irá ler como um obj do HTML, e não como o valor inserido)
function comparacao(entrada1, entrada2) {
    return parseInt(entrada1.value) > parseInt(entrada2.value)
}

//Colocar o EventListener no 1º input para que imprima a letra digitada
entrada1.addEventListener("keyup", function(e){
    console.log(e.target.value)
})

//Mesmo evento neste input, porém, a comparação só será feita caso este input for preenchido, porque assim a FP terá valores a serem comparados
entrada2.addEventListener("keyup", function(e) {
    console.log(e.target.value)
    if (!comparacao(entrada1, entrada2)){
        MensagemErro.style.display = "block"
        MensagemErro.innerHTML = "A segunda entrada é maior que esta."
    }else{
        MensagemErro.style.display = "none"
    }
})

//Ao clicar no botão de enviar, caso a FP seja true, mostrará a msg de sucesso
form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(comparacao(entrada1, entrada2))
    if (comparacao(entrada1, entrada2)){
        MensagemSucesso.style.display = "block"
        MensagemSucesso.innerHTML = "Parabéns! Você seguiu as instruções!"
        entrada1.value = ""
        entrada2.value = ""
    }else{
        MensagemSucesso.style.display = "none"
    }
})
