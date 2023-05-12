function calcSalario() {
    let calc, sal = parseInt(prompt("Insira o valor do salário: "))
    let porcento = 0
    let dif = 0

    if (sal <280.00){
        porcento = 20
        calc = sal + (sal * porcento/100)
        dif = calc - sal
        alert(`Salário original: R$${sal}\nPercentual aplicado: +%${porcento}\nValor do aumento: +R$${dif}\nSalário atual: R$${calc}`)
    }else if (sal >=280.00){
        porcento = 15
        calc = sal + (sal * porcento/100)
        dif = calc - sal
        alert(`Salário original: R$${sal}\nPercentual aplicado: +%${porcento}\nValor do aumento: +R$${dif}\nSalário atual: R$${calc}`)
    }else if (sal >= 700.00){
        porcento = 10
        calc = sal + (sal * porcento/100)
        dif = calc - sal
        alert(`Salário original: R$${sal}\nPercentual aplicado: +%${porcento}\nValor do aumento: +R$${dif}\nSalário atual: R$${calc}`)
    }else if (sal >= 1500){
        porcento = 5
        calc = sal + (sal * porcento/100)
        dif = calc - sal
        alert(`Salário original: R$${sal}\nPercentual aplicado: +%${porcento}\nValor do aumento: +R$${dif}\nSalário atual: R$${calc}`)
    }
}

//até 280 +20 | inclui 280 até 700 +15 | 700 até 1500 +10 | 1500 +5
//Salário original: ${}\nPercentual aplicado: ${}\nValor do aumento: ${}\nSalário atual: ${}

calcSalario()