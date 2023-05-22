$(document).ready(function(){
    let iconeErrado = ''
    let IDelementos = [], iconesNC = []

    let contador = 1
    $("#btn_OK").click(function(){
        return contador++
    })
    const iconeFeito = $("#concluido")

    function criarLinhas() {
        const iconeErrado = `<img src="./midia/wrongemoji.png" id="tarefa${contador-1}" alt="Emoji indicando erro" title="Tarefa ainda não realizada."/>`
        if ($("#entrada_tarefa").val() != ""){
            const nomeTarefa = $("#entrada_tarefa").val()
            // tarefasNao.push(nomeTarefa)
            // console.log(tarefasNao)
            const linha = $(`<tr style = "display: none">`)
            $(`<td class="iconeTarefa">${iconeErrado}</td>`).appendTo(linha)
            $(`<td class="nomeTarefa" id="tarefa${contador-1}">${nomeTarefa}</td>`).appendTo(linha)
            $(`</tr>`).appendTo(linha)
            $(linha).appendTo("#tBody")
            $("input").val("")
            $(linha).fadeIn(800)
            return true
        }else{
            return false
        }
    }

    $("#add_text").click(function(){
        $(".formAdd").slideDown()
    })
    
    $("#del_text").click(function(){
        $(".formAdd").slideDown()
    })

    $("#btn_cancel").click(function(){
        $(".formAdd").slideUp()
    })

    //Por que ao add um bloco if com a condição de true na criarLinhas() pushar o nome da tarefa criadas no array de tarefasNao?
    //Como acessar o valor de uma variável (caso eu quisesse acessar a var. "contar") no compilador do navegador?
    $("form").on("submit", function(e) {
        criarLinhas()
        e.preventDefault()
    })

    //"text-decoration", "line-through"
    $("table").on("click", ".nomeTarefa", function (){
        $(this).css("text-decoration", "line-through")
        let elementoID = this["id"]
        IDelementos.push(elementoID)
    
        let arrayIMG = $("tbody img").toArray()
        arrayIMG.forEach(function(img) {
            iconesNC.push($(img).attr('id'))
        })
        for (let i = 0; i < iconesNC.length; i++) {
            if (IDelementos.includes(iconesNC[i])) {
              $(`tbody img[id="${elementoID}"]`).replaceWith(iconeFeito.clone().css("display", "block"))
            }
        }
    })
})

//criar arrays e com esses arrays usar o push e de acordo caso o item for puxado ou não,
//ou se ele estiver num array aplicar o efeito no item pushado


//LambdaTest possibilita testar o software em todos os navegadores
//$("elemento").append("elemento a ser add") - adiciona na última posição
//$("elemento").prepend("elemento a ser add") - adiciona na primeira posição
//$(".nomeDaClasse item").css("color", "red") - dentro do elemento com a classe "nomeDaClasse" todos os items especificados teram a propriedade aplicada
//$(".nomeDaClasse").find("a").css("color", "red") - dentro do elemento com a classe "nomeDaClasse" o find procurará pelo primeiro elemento "a" e aplicará a propriedade css
//$(".nomeDaClasse > p").css("color", "red") - o elemento filho "p" de "nomeDaClasse" terá a propriedade css aplicada
//$("#texto").text("Texto para teste") - o .text injeta um texto no elemento com o id "texto"
//$("#texto").html("<button>CLIQUE</button> Não clique no botão") - o .html() availia se dentro da string possui propriedades html válidas e a transforma no literal (concretamente)
//$("tbody .iconeTarefa[id]") - selecionar elementos com base em seus atributos

//https://prnt.sc/VD7cWpT_IPSz - no exemplo da foto (usando jQuery), dois botões são chamados; botão de p_para... e h4_para...
//quando um dos botões forem clicados, dependendo do botão, adicionará (usando .append()) o array que contém TODOS
//os elementos "p" ou "h". A função ".toArray()", no exemplo, armazena todos os itens "p" ou "h4" em um array,
//assim então quando clicado um dos botões, os elementos são trocados de div, o que está na caixa 1 vai pra 2 e vice-versa