//validação mais precisa - expressões regulares
//replicar for mais tarde - https://flexiple.com/javascript/javascript-capitalize-first-letter/
$(document).ready(function(){
    $("#enviar").on("click", function(){
        let teste = "10*(5+5)"
        console.log(eval(teste))
    })


    $("#formCadastro").validate({
        rules:{
            entrada_nome:{
                required: true,
                maxlength: 26,
                minlength: 7,
                minWords: 2,
            },
            entrada_email:{
                required: true,
                email: true
            },
            entrada_telefone:{
                required: true,
                minlength: 16,
                maxlength: 16,
            },
            entrada_cpf:{
                required: true,
                cpfBR: true
            },
            entrada_endereco:{
                required: true,
                maxWords: 3 
            }
        }
    })

    $("#entrada_telefone").mask("(00) 00000-00000",{
        placeholder: "ex: (12) 34567-8910"
    })

    $("#entrada_cpf").mask("00000000000",{
        placeholder: "ex: 12345678912"
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