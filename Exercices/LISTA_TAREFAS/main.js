$(document).ready(function(){
    const iconeFeito = '<img src="./midia/checkemoji.png" alt="Emoji indicando acerto"/>'
    const iconeErrado = '<img src="./midia/wrongemoji.png" alt="Emoji indicando erro"/>'


    $("#add_text").click(function(){
        $(".formAdd").slideDown()
    })
    
    $("#del_text").click(function(){
        $(".formAdd").slideDown()
    })

    $("#btn_cancel").click(function(){
        $(".formAdd").slideUp()
    })

    function criarLinhas() {
        const nomeTarefa = $("input").val()
        const linha = $(`<tr style = display: "none">`)
        $(`<td>${iconeErrado}</td>`).appendTo(linha)
        $(`<td>${nomeTarefa}</td>`).appendTo(linha)
        $(`</tr>`).appendTo(linha)
        $("#entrada_tarefa").val(null)
        $(linha).appendTo("#tBody")
        $(linha).fadeIn(5000)
    }

    $("form").on("submit", function(e) {
        e.preventDefault()
        criarLinhas()
    })

    $("#imgErrado").click(function(){
        
    })
})