const botaoAdd = document.getElementById("btn_add")
const menuPadrao = document.getElementById("opcoes_padrao")
const menuAdd = document.querySelector(".addContato")
const formAdd = document.getElementById("form_add")

let nomeContato, numeroCelular

//abre menu para add
botaoAdd.addEventListener("click", function(e){
    e.preventDefault()
    menuPadrao.style.display = "none"
    menuAdd.style.display = "block"
})

//botao cancelar faz voltar
const botaoCancelarAdd = document.querySelector("#cancelar_add")
botaoCancelarAdd.addEventListener("click", function(e){
    e.preventDefault()
    menuAdd.style.display = "none"
    menuPadrao.style.display = "block"
})

//pega o nome da entrada do tipo text
const nomeContato_obj = document.getElementById("nomeContato")
nomeContato_obj.addEventListener("keyup", function(e){
    nomeContato = e.target.value
})

//pega o núm. da entrada do tipo tel
const numeroCelular_obj = document.getElementById("numeroCelular")
numeroCelular_obj.addEventListener("keyup", function(e) {
    numeroCelular = e.target.value
})



//insere número automaticamente um ddd
const select_paises = document.getElementById("select_paises")
select_paises.addEventListener("change", function(e){
    let ddd = e.target.value
    if (ddd == ""){
        alert(`Selecione um país!`)
    }else{
        numeroCelular_obj.value = `${ddd} `
    }
})

formAdd.addEventListener("submit", function(e){
    console.log(`nomeContato: ${nomeContato}\nnumeroCelular: ${numeroCelular}`)
    contatos.push(dados)
})

//array multidimensional - array dentro de um array