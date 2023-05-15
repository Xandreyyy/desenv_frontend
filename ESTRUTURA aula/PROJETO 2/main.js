const form = document.getElementById("form_atividade")
const imgAprovado = '<img src="./assets/aprovado.png" alt="Emoji festejando"/>'
const imgReprovado = '<img src="./assets/reprovado.png" alt="Emoji desapontado"/>'
let atividades = []
let notas = []
let linhas = ""
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const NotaMinima = parseFloat(prompt("Insira a nota mínima: "))

form.addEventListener("submit", function(e){
    e.preventDefault()
    adicionarLinha()
    atualizarTabela()
    atualiarMedia()
})

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById("nome_atividade")
    const inputNotaAtividade = document.getElementById("nota_atividade")

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`Atividade "${inputNomeAtividade.value}" já foi inserida!`)
    }else{
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = "<tr>"
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >=NotaMinima ? imgAprovado : imgReprovado}</td>`
        linha += "</tr>"
        linhas += linha
        
        const corpoTabela = document.querySelector("tbody")
        corpoTabela.innerHTML = linhas

        inputNomeAtividade.value = ""
        inputNotaAtividade.value = ""
    }
}


function atualizarTabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

function atualiarMedia(){
    const mediaFinal = calcularMedia()
    document.getElementById("media_final_valor").innerHTML = mediaFinal.toFixed(2)
    document.getElementById("media_final_resultado").innerHTML = mediaFinal >=NotaMinima ? spanAprovado : spanReprovado
}

function calcularMedia() {
    let somaDasNotas = 0
    for (i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length
}