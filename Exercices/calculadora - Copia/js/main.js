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
      //valorAnterior null = primeira operação da calculadora
      if (valorAnterior === null){
        //valorAnterior receberá o atual valor do input, (5)
        valorAnterior = input.val()
        //logo depois, limpa o campo
        input.val("")
      }else{
        //o campo ao ser limpo, mostrará o símbolo da operação desejada
        //concatenar concatena o valorAnterior (5) com o atual do input. Supondo que o usuário queira fazer 5*2. O * foi inserido no campo
        //então, o 2 é digitado, quando digitar outra operação, o valorAnterior vai receber o eval() de concatenar, que foi salvo como (5*2)
        //o eval calculará essa expressão e resetará o campo, salvando em valorAnterior.
        let concatenar = `${valorAnterior}${input.val()}`
        valorAnterior = eval(concatenar)
        input.val("")
      }

      //comando abaixo faz primeiro resetar o input e depois concatenar a operação desejada
      input.val(`${input.val()}${operacao}`)
    })
  
    // calcular e mostrar resultado
    $("#Bresultado").on("click", function(){
        //caso o usuário queira fazer uma pequena operação, por exempl (5*2), a operacaoCompleta concatena o valorAnterior (neste outro exemplo)
        //é 5) com o atual valor do input, que no caso é *2, depois, operacaoCompleta passa por um eval() resultando em 5*2 = 10
        //a variável resultado armazena esse valor e o input recebe passa a receber a variável resultado

        //-------------------------------------------------------
        //operacaoCompleta concatena o valorAnterior com o atual valor do campo
        //depois, essa variável passa por um eval para ser calculada e mostrada no input
        let operacaoCompleta = `${valorAnterior}${input.val()}`
        let resultado = eval(operacaoCompleta)
        input.val(resultado)
        
        //reseta a variável para não armazenar cálculos antigos
        valorAnterior = null
    })
  })