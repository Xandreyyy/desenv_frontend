const entrada1 = document.getElementById('entrada1')
const entrada2 = document.getElementById('entrada2')

function comparar(entrada1, entrada2) {
    const comparacao = (parseInt(entrada1) > parseInt(entrada2))
    return comparacao
}

console.log(comparar.value)

const form = document.getElementById('form_input')

form.addEventListener('submit', function(e){
    e.preventDefault()

    let form_val = false
    form_val = comparar(entrada1.value, entrada2.value)
    if (form_val){
        alert(`Parabéns! Você seguiu as instruções!`)
        entrada1.value = ''
        entrada2.value = ''
    }else{
        alert(`Falha! Você não seguiu as instruções!`)
    }
})