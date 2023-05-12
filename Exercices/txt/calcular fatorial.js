const num = prompt("Insira um número para ser fatorado: ")

function calcFatorial(num) {
    let fatorar = 1
    for (let i = 1; i <=num; i++) {
        fatorar *= i;
    }
    return fatorar;
}

console.log(calcFatorial(num))
