let num1 = Number(prompt("Insira o 1º número: "))
let num2 = Number(prompt("Insira o 2º número: "))

function mostrarNum(num1, num2) {
    if (num1 > num2){
        alert(`O número ${num1} é > ${num2}`)
    }else if (num2 > num1){
        alert(`O número ${num2} é > ${num2}`)
    }else{
        alert(`O ${num1} é equivalente ao ${num2}`)
    }
}
mostrarNum(num1, num2)



let num1 = prompt(`Insira um número: `)

function mostrarPosNeg(num1) {
    if (num1 >=0){
        alert(`O número ${num1} é positivo.`)
    }else{
        alert(`O número ${num1} é negativo.`)
    }
}

mostrarPosNeg(num1)





====================================
let num1 = prompt(`Insira o 1º número: `)
let num2 = prompt(`Insira o 2º número: `)

function mostrarNum(num1,num2) {
    while true{
        if (num1 = isNaN){
            alert(`Digite apenas números! `)
        }else if (num1 > num2){
            alert(`O número ${num1} é > o número ${num2}`)
        }else if (num2 > num1){
            alert(`O número ${num2} é > o ${num1}`)
        }else if (num1 == num2){
            alert(`O  número ${num1} é equivalente ao número ${num2}`)
        } 
    }
}

mostrarNum(num1, num2)
=====================================

let nota1 = prompt(`Insira a 1ª nota: `)
let nota2 = prompt(`Insira a 2ª nota: `)
let nota3 = prompt(`Insira a 3ª nota: `)
let nota4 = prompt(`Insira a 4ª nota: `)
let nota5 = prompt(`Insira a 5ª nota: `)

function calcNotas(nota1, nota2, nota3, nota4, nota5) {
    media = (nota1 + nota2 + nota3 + nota4 + nota5)
    mediadividir = (media / 5)
    if (mediadividir >= 7){
        alert(`Aprovado`)
    }else if (mediadividir <7){
        alert(`Reprovado`)
    }else{
        alert(`Passou----`)
    }
    console.log(`${mediadividir}`)
}

calcNotas(nota1, nota2, nota3, nota4, nota5)
 ============================

let nota = [], med = 0.0, soma = 0

for (let i = 1; i <=5; i++) {
    nota.push(prompt(`Informe a nota ${i}`))
    soma = soma + parseFloat(nota[i-1])
}

soma;
nota;


==============
let nota = [], med = 0.0, soma = 0

for (let i = 1; i <=5; i++) {
    nota.push(prompt(`Informe a nota ${i}`))
    soma = soma + parseFloat(nota[i-1])
}

med = soma / nota.length;
med.toFixed(2)

if(parseFloat(med.toFixed(2) < 7)){
    alert(`Reprovado.`)
}else if((parseFloat(med.toFixed(2) == 10)){
    alert(`Aprovado com distinção`)
}else{
    alert(`Aprovado`)
}

soma;
nota;
med;
