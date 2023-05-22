$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    })

    $(".menu_hamburguer").click(function(){
        $("nav").slideToggle()
    })
})