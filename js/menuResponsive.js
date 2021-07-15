$(".hide").on('click', function(){
    if ($(".principal").hasClass("ocultar")){
        $(".principal").removeClass("ocultar");
        $(".principal").addClass("mostrar");
    }
    else{
        $(".principal").removeClass("mostrar");
        $(".principal").addClass("ocultar");
    }
    
})
