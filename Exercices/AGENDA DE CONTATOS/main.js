const botaoAdd = document.getElementById("btn_add")
const menuPadrao = document.getElementById("opcoes_padrao")
const menuAdd = document.querySelector(".addContato")
const formAdd = document.getElementById("form_add")
const botaoCancelarAdd = document.querySelector("#cancelar_add")


botaoAdd.addEventListener("click", function(e){
    e.preventDefault()
    menuPadrao.style.display = "none"
    menuAdd.style.display = "block"
})

botaoCancelarAdd.addEventListener("click", function(e){
    e.preventDefault()
    menuAdd.style.display = "none"
    menuPadrao.style.display = "block"
    //adicionar valor dos inputs do form como nulos
})

let nome = prompt("NOME: ");
let numero = parseInt(prompt("NÚMERO: "));
let dados = [];

let salvarNome = {nome: numero};
dados.push(salvarNome);

console.log(dados);

