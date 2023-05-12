let nota = [], med = 0.0, soma = 0

for (let i = 1; i <=5; i++) {
    nota.push(prompt(`Informe a nota ${i}`))
    soma = soma + parseFloat(nota[i-1])
}

med = soma / nota.length;
med.toFixed(2)

if(parseFloat(med.toFixed(2)) < 7){
    alert(`Reprovado.`)
}else if(parseFloat(med.toFixed(2)) == 10){
    alert(`Aprovado com distinção`)
}else{
    alert(`Aprovado`)
}

soma;
nota;
med;