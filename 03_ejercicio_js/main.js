$("#elem1").mouseover (function(){
    $("#elem1").addClass("destacar");
    $("img").attr("src","img/arbol.jpg").show();
});

$("#elem1").mouseout (function(){
    $("#elem1").removeClass("destacar");
    $("img").attr("src","img/arbol.jpg").hide();
});




$("#elem2").mouseover (function(){
    $("#elem2").addClass("destacar");
    $("img").attr("src","img/lago.jpg").show();
});

$("#elem2").mouseout (function(){
    $("#elem2").removeClass("destacar");
    $("img").attr("src","img/lago.jpg").hide();
});




$("#elem3").mouseover (function(){
    $("#elem3").addClass("destacar");
    $("img").attr("src","img/rio.jpg").show();
});

$("#elem3").mouseout (function(){
    $("#elem3").removeClass("destacar");
    $("img").attr("src","img/rio.jpg").hide();
});




$("#elem4").mouseover (function(){
    $("#elem4").addClass("destacar");
    $("img").attr("src","img/sol.jpg").show();
});

$("#elem4").mouseout (function(){
    $("#elem4").removeClass("destacar");
    $("img").attr("src","img/sol.jpg").hide();
});