const botaoAdd = document.getElementById("btn_add")
const menuPadrao = document.getElementById("opcoes_padrao")
const menuAdd = document.querySelector(".addContato")
const formAdd = document.getElementById("form_add")
const semSoma = document.querySelector("#num_semsoma")

let nomeContato, numeroCelular, entradas = []

//abre menu para add
botaoAdd.addEventListener("click", function(e){
    e.preventDefault()
    menuPadrao.style.display = "none"
    menuAdd.style.display = "block"
})

//botao cancelar faz voltar
const botaoCancelarAdd = document.querySelector("#cancelar_add")
botaoCancelarAdd.addEventListener("click", function(e){
    e.preventDefault()
    menuAdd.style.display = "none"
    menuPadrao.style.display = "block"
})

//pega o nome da entrada do tipo text
const nomeContato_obj = document.getElementById("nomeContato")
nomeContato_obj.addEventListener("keyup", function(e){
    nomeContato = e.target.value
})

//pega o núm. da entrada do tipo tel
const numeroCelular_obj = document.getElementById("numeroCelular")
numeroCelular_obj.addEventListener("keyup", function(e) {
    numeroCelular = e.target.value
})

//insere número automaticamente um ddd
const select_paises = document.getElementById("select_paises")
select_paises.addEventListener("change", function(e){
    let ddd = e.target.value
    if (ddd == ""){
        alert(`Selecione um país!`)
    }else{
        numeroCelular_obj.value = `${ddd} `
    }
})


formAdd.addEventListener("submit", function(e){
    e.preventDefault()
    tabela_obj = document.querySelector("#tBody")
    linha_tabela = document.createElement("tr")
    tabela_obj.appendChild(linha_tabela)
    celula_tabela = document.createElement("td")
    linha_tabela.appendChild(celula_tabela)
    nomearContato = document.createTextNode(nomeContato)
    celula_tabela.appendChild(nomearContato)
    celula_tabela = document.createElement("td")
    linha_tabela.appendChild(celula_tabela)
    numContato = document.createTextNode(numeroCelular)
    celula_tabela.appendChild(numContato)

    nomeContato_obj.value= ""
    numeroCelular_obj.value= ""
    select_paises.value = ""

    menuAdd.style.display = "none"
    menuPadrao.style.display = "block"
})