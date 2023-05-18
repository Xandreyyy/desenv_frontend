const botaoAdd = document.getElementById("btn_add")
const menuPadrao = document.getElementById("opcoes_padrao")
const menuAdd = document.querySelector(".addContato")
const formAdd = document.getElementById("form_add")

//possíveis erros
const semPais = document.querySelector("#num_sempais")
const numInv = document.querySelector("#num_invalido")

function erroGenerico() {
    numInv.style.display = "block"
    numInv.innerHTML = "Número inválido."

    semPais.style.display = "none"
    numInv.style.display = "none"
}

function erroPais() {
    semPais.style.display = "block"
    semPais.innerHTML = "Selecione um país!"

    numInv.style.display = "none"
}

let nomeContato, numeroCelular
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
    nomeContato_obj.value= ""
    numeroCelular_obj.value= ""
    select_paises.value = ""
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
    if (select_paises.value == ""){
        erroPais()
        numeroCelular_obj.value = null
    }else{
        numeroCelular_obj.value = `${ddd} `
        semPais.style.display = "none"
    }
})

function validarPais() {
    if (select_paises.value == ""){
        semPais.style.display = "block"
        semPais.innerHTML = "Selecione um país!"
        return false
    }else{
        semPais.style.display = "none"
        return true
    }
}

function validarTam(numeroCel) {
    const arrayNum = numeroCel.split(" ")
    if (arrayNum.length ==3){
        numInv.style.display = "none"
        return true
    }else{
        numInv.style.display = "block"
        numInv.innerHTML = "Número inválido."
        return false
    }
}

//Uma opção para validar a entrada é adicionar: numeroCelular.startsWith("+"). "startsWith()" verifica se uma string inicia com tal caracter.
formAdd.addEventListener("submit", function(e){
    e.preventDefault()
    if (validarPais() && validarTam(numeroCelular_obj.value)){
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
        select_paises.value = ""

        menuAdd.style.display = "none"
        menuPadrao.style.display = "block"
    }
})

// Como usar jQuery
// 1- Baixar a jQuery na pasta do projeto (contém muitos arquivos, pode acontecer que o projeto tenha uma resposta mais lenta)
// 2- Importar a jQuery, ou seja, usar remotamente.
// 
//
//