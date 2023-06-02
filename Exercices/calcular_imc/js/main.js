const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const msgResul = document.getElementById("resultado_div")
let imc = 0

peso.addEventListener("keyup blur", function(){
    let i = this
    peso.value(i.replace(/[^0-9]/g, ""))
})

function calcIMC() {
    imc = parseFloat(peso.value) / parseFloat((altura.value * altura.value))
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

function casoUser() {
    const celula = document.querySelector(`td[value=${descInject()}]`)
    celula.innerHTML = "✓"
}

const form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
    msgResul.style = "display: block"
    console.log(`Resultado do cálculo: ${calcIMC()}`)
    console.log(`Valor do return: ${titleInject()}`)
    casoUser()
    titleInject()
    descInject()
})