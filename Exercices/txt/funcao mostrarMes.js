const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
let mes = prompt("Insira um número e direi o mês que esse número representa! ")

function mostrarMes(meses, mes) {
    console.log(`O número ${mes} representa ${meses[mes-1]}.`);
}