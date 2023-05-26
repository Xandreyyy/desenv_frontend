$(document).ready(function(){
    const input = $("#calcular")
    //resetar campo
    $("#resetar").on("click", function(){
        input.val("")
    })

    //escuta botoes numericos
    $(".botaoNumerico").on("click", function(){
        let valorCalc = $(this).attr("value")
        $(input).val(`${input.val()}${valorCalc}`)
    })
    
    //escuta botoes de operacoes
    let operacaoEsc
    $(".botaoOperacao").on("click", function(){
        let valorOp = $(this).attr("value")
        $(input).val(input.val() + valorOp)
        return operacaoEsc = $(this).attr("value")
    })


    const operacoes = ["+", "-", "*", "/"]
    function calcular(){
        for (let i = 0; i < input.val().length; i++) {
            let operacao
            
            arraySplit = input.val().split(operacaoEsc)
            valor1 = parseFloat(arraySplit[0])
            valor2 = parseFloat(arraySplit[1])
        }

        if (operacaoEsc == "+"){
            return valor1 + valor2
        }else if (operacaoEsc == "-"){
            return valor1 - valor2
        }else if (operacaoEsc == "*"){
            return valor1 * valor2
        }else if (operacaoEsc == "/"){
            return valor1 / valor2
        }
    }

    resultados = []
    $("#Bresultado").on("click", function(){
        $(input).val(calcular())
        operacaoEsc = []
    })
})