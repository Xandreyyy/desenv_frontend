const nomeA_obj = document.getElementById("inputAtividade")
const nota_obj = document.getElementById("inputNota")
const form_obj = document.getElementById("form_table")
const valor_media = document.querySelector("#valor_media")
const MensagemAprovado = document.querySelector("#aprovado")
const MensagemReprovado = document.querySelector("#reprovado")

let nome, nota, media, notas = [], somar

function calcMedia(notas) {
    somar = 0
    for (let i = 0; i < notas.length; i++) {
        somar = somar + notas[i]
    }
    media = somar / notas.length
    return media
}

nomeA_obj.addEventListener("keyup", function(e){
    nome = e.target.value
})

nota_obj.addEventListener("keyup", function(e){
    nota = parseFloat(e.target.value)
})

function decidirEmoji() {
    if (nota_obj.value >=7){
        celula_tabela = document.createElement("td")
        celula_img = document.createElement("img")
        celula_img.src="assets/aprovado.png"
        linha_tabela.appendChild(celula_img)
    }else{
        celula_tabela = document.createElement("td")
        celula_img = document.createElement("img")
        celula_img.src="assets/reprovado.png"
        linha_tabela.appendChild(celula_img)
    }
}

function displayMensagem() {
    if (media >=7 && notas.length >=2){
        MensagemAprovado.style.display = "block"
        MensagemAprovado.innerHTML = "Aprovado"
        MensagemReprovado.style.display = "none"
    }else if (media <7 && notas.length >=2){
        MensagemReprovado.style.display = "block"
        MensagemReprovado.innerHTML = "Reprovado"
        MensagemAprovado.style.display = "none"
    }
}


form_obj.addEventListener("submit", function(e){
    e.preventDefault()
    notas.push(nota)
    calcMedia(notas)
    valor_media.innerHTML= media.toFixed(2)
    
    displayMensagem()

    table_obj = document.querySelector("#tBody")
    linha_tabela = document.createElement("tr")//cria uma linha
    table_obj.appendChild(linha_tabela)//add a linha criada no tbody
    celula_tabela = document.createElement("td")//cria uma celula
    linha_tabela.appendChild(celula_tabela)//add essa celula nova na linha criada
    nomear_ativ = document.createTextNode(nome)//dá o nome de acordo com a entrada recebida
    celula_tabela.appendChild(nomear_ativ)//aplica o nome
    celula_tabela = document.createElement("td")//+1 celula para add a nota
    linha_tabela.appendChild(celula_tabela)//add essa celula nova na linha criada
    dar_nota = document.createTextNode(nota)//coloca o valor da nota e acordo com a entrada recebida
    celula_tabela.appendChild(dar_nota)//aplica a nota

    decidirEmoji()

    nomeA_obj.value = ""
    nota_obj.value = ""
})
