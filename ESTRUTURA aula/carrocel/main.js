//plugin do igorescobar: igorescobar/jQuery-Mask-Plugin/archive/master.zip
//jquery validation: https://jqueryvalidation.org/
$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    })

    $(".menu_hamburguer").click(function(){
        $("nav").slideToggle()
    })

    $("#telefone").mask('(00) 00000-0000', {
        placeholder: '(12) 34567-8910'
    })
})