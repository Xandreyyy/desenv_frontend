$(document).ready(function(){
    const input = $("#calcular")
    let valorAnterior = null
  
    // resetar campo
    $("#resetar").on("click", function(){
      input.val("")
      valorAnterior = null
    })
  
    // escuta botões numericos
    $(".botaoNumerico").on("click", function(){
      //ex) valor inserido 5
      let valorCalc = $(this).attr("value")
      input.val(`${input.val()}${valorCalc}`)
    })

    // escuta botões de operacoes
    $(".botaoOperacao").on("click", function(){
      let operacao = $(this).attr("value")
      input.val(`${input.val()}${operacao}`)
    })
  
    $("#Bresultado").on("click", function(){
        let calcular = eval(input.val())
        input.val(calcular)
        valorAnterior = null
    })
  })