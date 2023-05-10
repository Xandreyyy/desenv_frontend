const nomeBeneficiario = document.getElementById('nome_beneficiario');
let formValido = false;
const form = document.getElementById('form_dep');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');

    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){

    e.preventDefault(); 

    const numeroContaBeneficiario = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');

    const MensagemSucesso = `Valor de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`

    formValido = validaNome(nomeBeneficiario.value);

    if(formValido){
        const ContainermensagemSucesso = (".mensagem_sucesso")
        ContainermensagemSucesso.innerHTML = MensagemSucesso
        ContainermensagemSucesso.style.display = "block"

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    }else{
        nomeBeneficiario.style.border = "1px solid red"
        document.querySelector(".mensagem_erro").style.display = "block"
    }
});

nomeBeneficiario.addEventListener("keyup", function(e){
    console.log(e.target.value)
    formValido = validaNome(e.target.value)

    if (formValido){
        nomeBeneficiario.classList.remove("error")
        document.querySelector(".mensagem_erro").style.display = "none"
    }else{
        nomeBeneficiario.classList.add("error")
        document.querySelector(".mensagem_erro").style.display = "block"
    }
})