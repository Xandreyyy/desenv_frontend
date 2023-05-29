$(document).ready(function(){
    const input = $("#calcular")
  
    // resetar campo
    $("#resetar").on("click", function(){
      input.val("")
    })
  
    // escuta botões numericos
    $(".botaoNumerico").on("click", function(){
      let valorCalc = $(this).attr("value")
      input.val(`${input.val()}${valorCalc}`)
    })

    // escuta botões de operacoes
    $(".botaoOperacao").on("click", function(){
      let operacao = $(this).attr("value")
      input.val(`${input.val()}${operacao}`)
    })

    $("#botaoP").on("click", function(){
      let parenteses = $(this).attr("value")
      input.val(`${input.val()}${parenteses}`)
    })
  
    $("#Bresultado").on("click", function(){
        let calcular = eval(input.val())
        input.val(calcular)
    })
  })