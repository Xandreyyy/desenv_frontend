const botaoAdd = document.getElementById("btn_add")
const table = document.querySelector("table")
const menuPadrao = document.getElementById("opcoes_padrao")
const menuAdd = document.querySelector(".addContato")
const formAdd = document.getElementById("form_add")

//possíveis erros
const semPais = document.querySelector("#num_sempais")
const numnoSpace = document.querySelector("#num_nospace")
const nomeInval = document.querySelector("#nome_inval")


function erroEspaco() {
    numnoSpace.style.display = "block"
    numnoSpace.innerHTML = "Um número válido possui 3 espaçamentos!"

    semPais.style.display = "none"
}

function erroPais() {
    semPais.style.display = "block"
    semPais.innerHTML = "Selecione um país!"

    numnoSpace.style.display = "none"
}

function erroNome() {
    nomeInval.style.display = "block"
    nomeInval.innerHTML = "Nome inválido!"
}

let nomeContato, numeroCelular, testes = []
//abre menu para add
botaoAdd.addEventListener("click", function(e){
    e.preventDefault()
    menuPadrao.style.display = "none"
    menuAdd.style.display = "block"
    table.style.display = "none"
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
    numnoSpace.style.display = "none"
    semPais.style.display = "none"
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

//garante que pelo menos o usuário tenha selecionado um dos países
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

//verifica os espaçamentos
function validarTam(numeroCel) {
    const arrayNum = numeroCel.split(" ")
    if (arrayNum.length ==3){
        numnoSpace.style.display = "none"
        return true
    }else{
        erroEspaco()
        return false
    }
}

function verifNome() {
    //loop for que percorre o tamanho do valor (value) da entrada (nomeContato_obj), e caso o número digitado for um digito, então chama a função erroNome()
    for (let i = 0; i < nomeContato_obj.value.length; i++) {
        if (!isNaN(nomeContato_obj.value[i])){
            erroNome()
            return false
        }
    }
    return true
}

//Uma opção para validar a entrada é adicionar: numeroCelular.startsWith("+"). "startsWith()" verifica se uma string inicia com tal caracter.
formAdd.addEventListener("submit", function(e){
    e.preventDefault()
    if (validarPais() && validarTam(numeroCelular_obj.value) && verifNome()){
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
        table.style.display = "block"
    }
})