const form = document.getElementById("formulario")

function comparar(num_a, num_b){
    num_a = parseInt(num_a)
    num_b = parseInt(num_b)
    let resultado = true

    if (num_a > num_b){
        saida = `O número ${num_a} é maior que o número ${num_b}.`
    }else if (num_a < num_b){
        saida = `O número ${num_b} é maior que o número ${num_a}.`
    }else{
        saida = `O número ${num_a} é igual ao número ${num_b}.`
    }
    return saida
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const num_a = document.getElementById('prim_num')
    const num_b = document.getElementById('seg_num')
    const MensagemSucesso = comparar(num_a.value, num_b.value)
    const ContainerMensagemSucesso = document.querySelector(".mensagem_retorno")
    ContainerMensagemSucesso.innerHTML = MensagemSucesso
    ContainerMensagemSucesso.style.display = "block"

    num_a.value = ""
    num_b.value = ""
})