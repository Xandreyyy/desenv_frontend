//quando o jQuery estiver pronto, ele lerá tudo que está dentro da função
//$(document).ready(function(){
    //JS acessa o elemento "button" dessa maneira:
//    console.log(document.querySelector("header button"))
    //jQuery acessa o elemento "button" dessa maneira:
//    console.log($("header button"))
//})

$(document).ready(function(){
    //$("header button") pega o elemento que button que está no header -> quando acontecer a ação de click ".click(function(e)){}" a função criada armazena o evento na variável "e"
    $("header button").click(function(e){
        $("form").slideDown()
    })
    //$("#botao_cancelar") pegao elemento com esse id e adiciona o evento de "click". A function armazena o evento na variável "e". Depois, caso o evento aconteça, o elemento
    //$("form") é chamado e é aplicado a animação "slideUp()".
     $("#botao_cancelar").click(function(e){
        $("form").slideUp()
    })

    //$("form") chama o elemento form, e adiciona o evento "on" no botão de "submit" | a função ".val()" equivale ao ".value" do JS
    $("form").on("submit", function(e){
        e.preventDefault()
        //NECESSÁRIO ADICIONAR "#" AO CHAMAR UM ELEMENTO PELO ID
        const enderecoDaNovaImagem = $("#endereco_imagem").val()
        const novoItem = $("<li style = 'display: none'>")
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)
        $(`
            <div class="image_link">
                <a href="${enderecoDaNovaImagem}" title="Tamanho real" target="_blank"><p>Ver imagem original</p></a>
            </div>   
        `).appendTo(novoItem)
        $(novoItem).appendTo("ul")
        $(novoItem).fadeIn(1000)
        $("#endereco_imagem").val("")
    })
})