-- Exercício 2 --

let num1, num2
function mostrarNum(num1, num2) {
    while (isNaN(num1) || isNaN(num2) || (num1 == '') || (num2 == '')){
    num1 = prompt("Insira o 1º número: ")
    if (num1 == null){
        return
    }
    num2 = prompt("Insira o 2º número: ")
    if (num2 == null){
        return
    }else if (isNaN(num1) || isNaN(num2) || (num1 == '') || (num2 == '')){
        alert("Insira apenas números!")
    }
    }
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num1>num2 ? alert(`O número ${num1} é MAIOR que o número ${num2}.`) : (num1<num2 ? alert(`O número ${num2} é MAIOR que o número ${num1}.`) : alert(`O número ${num1} é EQUIVALENTE ao número ${num2}.`))
}

mostrarNum(num1, num2)

-- Exercício 3 --

let sexo, sexos

function teste(sexo, sexos) {
    do {
        sexos = ["F", "M"]
        sexo = prompt("Insira o sexo (F ou M): ")
        if (sexo == null){
            return
        }
        verifUpper = sexo.toUpperCase()
        if (verifUpper == "F" ? sexo = "feminino" : (verifUpper == "M" ? sexo = "masculino" : alert("Sexo inválido."))){
            alert(`Sexo escolhido: ${sexo}.`)
        }
    } while (verifUpper !== "F" && verifUpper !== "M")
}

teste(sexo, sexos)

-- Exercício 4 --

let vogais, letra

function vogalOuConsoante(vogais, letra) {
    do {
        vogais = ["a", "e", "i", "o", "u"]
        letra = prompt("Insira uma letra para verificar se é vogal ou consoante: ")
        if (letra == null){
            return
        }else if (!isNaN(letra) == true){
            alert(`Insira apenas letras!`)
        }else if (letra == ""){
            alert(`Insira uma letra!`)
        }else if (vogais.includes(letra)){
            alert(`A letra "${letra}" é uma vogal!`)
        }else{
            alert(`A letra "${letra}" é uma consoante!`)
        }
    } while (!isNaN(letra) || letra == "")
}

vogalOuConsoante(vogais, letra)

-- Exercício 6 --

let numero, numeros = []
function maiorNum(numero, numeros) {
    for (let i = 1; i<=3; i++) {
        numero = Number(prompt(`Insira o ${i}º número: `))
        numeros.push(numero)
    }
    return alert(`O maior número inserido é: ${Math.max.apply(null, numeros)}.`)
}

maiorNum(numero, numeros)

-- Exercício 7 --

let numero, numeros = [], i = 1

function mostrarMaiorMenor(numero, numeros, i) {
    while (numeros.length <3 || isNaN(numero)) {
        numero = prompt(`Insira o ${i}º número: `)
        if (numero == null){
            return
        }else if (numero == "" || numero == " "){
            alert(`Insira um número!`)
            continue
        }else{
            numero = Number(numero)
        }
        if (isNaN(numero)){
            alert(`Insira apenas números!`)
        }else{
            numeros.push(numero)
            i = i + 1
        }
    }
    maior = Math.max.apply(null, numeros)
    menor = Math.min.apply(null, numeros)
    return alert(`Maior número: ${maior}\nMenor número: ${menor}`)
}

mostrarMaiorMenor(numero, numeros, i)

-- Exercício 8 --

let produto, i = 1, produtos = []
function recomendarProduto(produtos, produto, i) {
    alert("Insira preço de três produtos e te recomendarei qual você deve comprar!")
    while (produtos.length <3 || isNaN(produto)) {
        produto = prompt(`Insira o valor do ${i}º produto: `)
        if (produto == null){
            return
        }else if (produto == "" || produto == " "){
            alert(`Insira o valor de algum produto!`)
        }else{
            produto = parseFloat(produto)
        }
        if (isNaN(produto)){
            alert(`Insira apenas números!`)
        }else{
            produtos.push(produto)
            i++
        }
    }
    recom = Math.min.apply(null, produtos)
    return alert(`Você deveria comprar o ${produtos.indexOf(recom)+1}º produto!\nValor: R$${recom}`)
}

recomendarProduto(produtos, produto, i)

-- Exercício 9 --
// ==280 +20%
// 281 até 700 +15%
// 701 até 1500 +10%
// 1500++ 5%
//salário inserido; percentual aplicado; valor do aumento; salário atual

function calcSal() {
    let sal
    while (true) {
        sal = prompt(`Insira o valor do salário: `)
        if (sal == null){
            return
        }
        sal = parseFloat(sal)
        if (isNaN(sal)){
            alert(`Insira apenas números!`)
        }else{
            break
        }
    }
    let dif, pct, pctAp
    if (sal <=280){
        pctAp = 20
        pct = sal + (sal * pctAp/100)
        dif = pct - sal
    }else if (sal >280 && sal <=700){
        pctAp = 15
        pct = sal + (sal * pctAp/100)
        dif = pct - sal
    }else if (sal >700 && sal <=1500){
        pctAp = 10
        pct = sal + (sal * pctAp/100)
        dif = pct - sal
    }else{
        pctAp = 5
        pct = sal + (sal * pctAp/100)
        dif = pct - sal
    }
    alert(`Salário: ${sal}\nPercentual aplicado: ${pctAp}\nValor do aumento: ${dif.toFixed(2)}\nSalário atual: ${pct}`)
}

calcSal()
