$(document).ready(function(){
    $("#formCadastro").validate({
        rules:{
            entrada_nome:{
                maxlength: 26,
                minlength: 7
            }
        }
    })
})





// $("#telefone").mask('(00) 00000-0000', {
//     placeholder: '(12) 34567-8910'
// })

// $("form").validate({
//     rules:{
//         nome:{
//             required: true
//         },
//         telefone:{
//             required: true
//         },
//         email:{
//             required: true,
//             email: true,
//         },
//         veiculo_interesse:{
//             required: true
//         },
//     },
//     messages:{
//         nome: "Por favor, informe seu nome!",
//         telefone: "Por favor, informe seu telefone!",
//         email: "Por favor, informe seu e-mail!",
//         veiculo_interesse: "Por favor, informe o veículo desejado!",
//     },
//     submitHandler: function(form){
//         console.log(form)
//     },
//     invalidHandler: function(e, validador){
//         let camposIncorretos = validador.numbersOfInvalids()
//         if (camposIncorretos){
//             alert(`Existem ${camposIncorretos} campos incorretos!`)
//         }
//     }
// })
// $(".lista_veiculos button").click(function(){
//     const destino = $("#formulario")
//     const nomeVeiculo = $(this).parent().find('h3').text()

//     $("#veiculo_interesse").val(nomeVeiculo)

//     $("html").animate({
//         scrollTop: destino.offset().top
//     }, 1000)
// })