$(`.imgItem`).click( function(){
    $(`.imgItem.active`).removeClass("active");
    $(`#imgActiva`).attr("src",$(this).attr("src"));
    $(this).addClass("active");
})

$(`#flechaDER`).click( () =>{
    let indiceActivo = parseInt($(`.imgItem.active`).attr("ind"));
    if (indiceActivo == 3) indiceActivo = -1;
    $(`.imgItem[ind=${indiceActivo+1}]`).trigger("click");
})

$(`#flechaIZQ`).click( () =>{
    let indiceActivo = parseInt($(`.imgItem.active`).attr("ind"));
    if (indiceActivo == 0) indiceActivo = 4;
    $(`.imgItem[ind=${indiceActivo-1}]`).trigger("click");
})


$(`#flechaExpandir > i`).click ( () => {
    $(`#modalExpandir`).css("display","block");
    $(`.modalImagen`).attr("src", $(`#imgActiva`).attr("src"));
})

$(`.cerrarExpandir`).click( () => $(`#modalExpandir`).css("display","none"));