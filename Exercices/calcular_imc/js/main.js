const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const msgResul = document.getElementById("resultado_div")

const msgPeso = document.querySelector(".erroEntradaP")
const msgAltura = document.querySelector(".erroEntradaA")

msgPeso.style.display = "none"
msgAltura.style.display = "none"

let arrayPeso = []
let arrayAltura = []
const regexCm = /^0/
//Comentar código; o teste lógico de verificar se os arrays eram vazios então resetar os inputs, não estava dando certo porque haviam funções
//sendo chamadas em lugares que não deviam, uma delas e uma que recebeu alterações foi a função calcIMC()


peso.addEventListener("keyup", function(){
    let i = this
    //regex: ao botar \D junto com a negação (^), o \D se torna \d, por isso usei ^\d. Ele faz com que tudo que não é dígito, "." ou ",", substitui por ""
    i.value = i.value.replace(/[^\d\.,]/g, "")

    if (regexCm.test(i.value)){
        msgPeso.style.display = "block"
        msgPeso.innerHTML = "O peso inserido não está em kg!"
        peso.classList.add("campoError")
    }else{
        msgPeso.style.display = "none"
        peso.classList.remove("campoError")
        msgPeso.innerHTML = null
    }

    //verifica se o valor que acabou de ser digitado é != "", então aplica um splice na posição 0, 1 elemento para modificar e passo o elemento que vai modificar o array
    if (i.value != ""){
        arrayPeso.splice(0, 1, i.value)
        console.log(`Valor peso sendo pushado: ${i.value}`)
    }
    inputsResets()
})

altura.addEventListener("keyup", function(){
    let i = this
    i.value = i.value.replace(/[^\d\.,]/g, "")

    if (regexCm.test(i.value)){
        msgAltura.style.display = "block"
        msgAltura.innerHTML = "A altura inserida não está em metros!"
        altura.classList.add("campoError")
    }else{
        msgAltura.style.display = "none"
        altura.classList.remove("campoError")
        msgAltura.innerHTML = null
    }

    if (i.value != ""){
        arrayAltura.splice(0, 1, i.value)
        console.log(`Valor altura sendo pushado: ${i.value}`)
    }
    inputsResets()
})

//esta função serve para "resetar" a página, ela é chamada toda vez que uma tecla do teclado é pressionada
function inputsResets() {
    //esse teste é para garantir que o reset funcione só quando algo válido for digitado, ou seja, se letras forem digitadas, o reset não se aplica,
    //do contrário os respectivos array estarão com conteúdo dentro, e o teste lógico dará true.
    //removerResul1 pega o span com o atual id que é dado junto com o titleInject(), que retorna um número de acordo com o resultado do IMC (esse span é a setinha que indica na tabela o resultado)
    //depois injeto um valor vazio no span do resultado
    if (arrayAltura.length !== 0 && arrayPeso.length !== 0){
        const removerResul1 = document.getElementById(`span${titleInject()}`)
        removerResul1.innerHTML = null

        msgResul.style = "display: none"

        document.getElementById(`tdbgcolorResul${titleInject()}`).classList.remove(`tdbgcolor${titleInject()}`)
        document.getElementById(`tdbgcolorSitu${titleInject()}`).classList.remove(`tdbgcolor${titleInject()}`)
    }
}
// function verificarPeso(pValue) {
//     const vPeso = pValue.value
//     //regex: obrigatório colocar 1 número, diferente do resto dos grupos que não é obrigatório inserir um número. O 1º grupo é para validar um dígito, com exceção do 2º,
//     //que valida apenas "." ou ",", o dois últimos são outros dígitos opcionais.
//     const matchRegExArray = vPeso.match(/[\d]{1,3}([\.,]{1}[\d]{1,2})?/g)
//     const matchSplit = matchRegExArray[0].split("")
//     //como a função match() retorna um array, aproveitei e apliquei o split() para dividir o array com cada dígito inserido.
//     if (matchSplit.length >=6){
//         const regexPeso6 = /^[\d]{3}[\.,]{1}[\d]{2}$/g
//         if (!regexPeso6.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 102.55kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else if (matchSplit.length >=5){
//         const regexPeso5 = /^[\d]{2}[\.,]{1}[\d]{2}$/g
//         if (!regexPeso5.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 60.55kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else if (matchSplit.length >=4){
//         const regexPeso4 = /^[\d]{2}[\.,]{1}[\d]{1}$/g
//         if (!regexPeso4.test(vPeso)){
//             console.log(regexPeso4.test(vPeso))
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 44.5kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else if (matchSplit.length >=3){
//         const regexPeso3 = /^[\d]{3}/g
//         if (!regexPeso3.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 100kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else if (matchSplit.length >=2){
//         const regexPeso2 = /^[\d]{2}/g
//         if (!regexPeso2.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 36kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }else{
//         const regexPeso1 = /[\d]{1}/
//         if (!regexPeso1.test(vPeso)){
//             msgPeso.style.display = "block"
//             msgPeso.innerHTML = "Peso inválido! Tente por exemplo: 9kg"
//             return false
//         }else{
//             msgPeso.style.display = "none"
//             return true
//         }
//     }
// }

function verificarPeso(pValue) {
    const vPeso = pValue.value
    //regex: validar se a entrada tem de 1 ou até 3 dígitos, e caso o usuário coloque "." ou ",", ele é obrigado a colocar pelo menos 1 dígito e no máximo 2
    const regexPeso = /^[\d]{1,3}([\.,]{1}[\d]{1,2})?$/

    if (!regexPeso.test(vPeso)) {
      msgPeso.style.display = "block"
      msgPeso.innerHTML = "Peso inválido!"
      return false
    } else {
      msgPeso.style.display = "none"
      return true
    }
}

//essas duas funções (verificarPeso e verificarAltura) são chamadas no botão de submit

function verificarAltura(aValue) {
    const vAltura = aValue.value
    //regex: só é possível colocar 1 dígito, já que na realidade não existe um ser humano que possui 2 dígitos em m de altura kkkkkkkkkk. Mesma coisa que o regex anterior, caso ele coloque "." ou "," é obrigado a color 1 ou 2 dígitos
    const regexAltura = /^[\d]{1}([\.,]{1}[\d]{1,2})?$/g
    if (!regexAltura.test(vAltura)){
        msgAltura.style.display = "block"
        msgAltura.innerHTML = "Altura inválida!"
        return false
    }else{
        return true
    }
}

//alterei 
let imc = 0
function calcIMC(pesoV, alturaV) {
    imc = parseFloat(pesoV.value) / parseFloat((alturaV.value * alturaV.value))
    imc = imc.toFixed(2)
    return imc
}


function titleInject() {
    const span = document.getElementById("titulo_resul")
    if (imc < 17) {
        span.innerHTML = "Muito abaixo do peso"
        return 0
    } else if (imc >= 17 && imc <= 18.49) {
        span.innerHTML = "Abaixo do peso"
        return 1
    } else if (imc >= 18.5 && imc <= 24.99) {
        span.style = "border-bottom: 3px solid green"
        span.innerHTML = "Peso normal"
        return 2
    } else if (imc >= 25 && imc <= 29.99) {
        span.innerHTML = "Acima do peso"
        return 3
    } else if (imc >= 30 && imc <= 34.99) {
        span.innerHTML = "Obesidade I"
        return 4
    } else if (imc >= 35 && imc <= 39.99) {
        span.innerHTML = "Obesidade II"
        return 5
    } else {
        span.innerHTML = "Obesidade III"
        return 6
    }
}


function descInject() {
    const desc = document.getElementById("desc_resul")
    const resulIMC = titleInject()
    switch (resulIMC) {
        case 0:
            desc.innerHTML = "Condição em que o indivíduo está significativamente abaixo do peso saudável. Pode ser associado à desnutrição e falta de massa muscular."
            break;
        case 1:
            desc.innerHTML = "Peso abaixo do recomendado para a altura do indivíduo. Pode indicar uma alimentação insuficiente ou problemas de saúde."
            break;
        case 2:
            desc.innerHTML = "Indica que o peso do indivíduo está dentro da faixa considerada saudável para sua altura. É um bom indicativo de equilíbrio entre o consumo e gasto de calorias."
            const areaDicas = document.querySelector("#dicas_resul")
            //ALEXANDRE, NÃO SE ESQUECE, AO USAR .querySelector É PRECISO USAR O "."OU "#"!!!
            areaDicas.remove()
            break;
        case 3:
            desc.innerHTML = "Peso maior do que o recomendado para a altura do indivíduo. Pode indicar excesso de gordura corporal e aumento do risco de doenças relacionadas à obesidade."
            break;
        case 4:
            desc.innerHTML = "Excesso moderado de peso, com maior acúmulo de gordura corporal. Aumenta o risco de problemas de saúde, como diabetes e doenças cardiovasculares."
            break;
        case 5:
            desc.innerHTML = "Excesso mais significativo de peso, com maior acúmulo de gordura. Aumenta substancialmente o risco de problemas de saúde, como hipertensão arterial e apneia do sono."
            break;
        case 6:
            desc.innerHTML = "Excesso de peso severo, com maior acúmulo de gordura corporal. É a forma mais grave de obesidade e aumenta consideravelmente o risco de complicações graves, como doenças cardíacas e diabetes tipo 2."
            break;
        default:
            break;
    }
}

//não pode chamar titleInject() para dar o id ao span e nem às células porque por padrão está retornando 0
function marcarTabela(idValue) {
    const marcarResul = document.getElementById(`span${idValue}`)
    marcarResul.style = "color: green"
    marcarResul.innerHTML = "❮"

    document.getElementById(`tdbgcolorResul${idValue}`).classList.toggle(`tdbgcolor${idValue}`)
    document.getElementById(`tdbgcolorSitu${idValue}`).classList.toggle(`tdbgcolor${idValue}`)
}

function injectResults(kgValue, mValue) {
    kgValue = kgValue.value
    mValue = mValue.value
    document.getElementById("kgInject").innerHTML = `${kgValue}kg`
    document.getElementById("heightInject").innerHTML = `${mValue}m`
}

const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    if (verificarPeso(peso) && verificarAltura(altura)){
        msgResul.style = "display: block"
        calcIMC(peso, altura)
        titleInject()
        descInject()
        marcarTabela(titleInject())
        injectResults(peso, altura)
        peso.value = ""
        altura.value = ""
        arrayAltura = [null]
        arrayPeso = [null]
        console.log(`Peso: ${arrayPeso}\nAltura: ${arrayAltura}`)
    }
})