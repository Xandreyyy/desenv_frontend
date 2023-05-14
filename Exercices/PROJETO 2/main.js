const nomeA_obj = document.getElementById("inputAtividade")
const nota_obj = document.getElementById("inputNota")
const form_obj = document.getElementById("form_table")
let nome, nota

nomeA_obj.addEventListener("keyup", function(e){
    nome = e.target.value
})

nota_obj.addEventListener("keyup", function(e){
    nota = parseFloat(e.target.value)
})

form_obj.addEventListener("submit", function(e){
    table_obj = document.querySelector("#tBody")

    linha_tabela = document.createElement("tr")//cria uma linha

    table_obj.appendChild(linha_tabela)//add a linha criada no tbody

    celula_tabela = document.createElement("td")//cria uma celula

    linha_tabela.appendChild(celula_tabela)//add essa celula nova na linha criada

    nomear_ativ = document.createTextNode(nome)//dá o nome de acordo com a entrada recebida

    celula_tabela.appendChild(nomear_ativ)//aplica o nome

    celula_tabela = document.createElement("td")//+1 celula para add a nota

    linha_tabela.appendChild(celula_tabela)

    dar_nota = document.createTextNode(nota)//nomear celula de acordo com a nota

    celula_tabela.appendChild(dar_nota)

    e.preventDefault()

    nomeA_obj.value = ""
    nota_obj.value = ""
})
