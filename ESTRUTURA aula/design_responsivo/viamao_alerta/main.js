$(document).ready(function(){
    //esse "funciton" é a função chamando ela mesma, função recursiva
    $(".btnmenu").click(function(){
        $(".menu").slideToggle()
    })
})