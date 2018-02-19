$(document).ready(function(){

  $(".testPage").dblclick(function(){
        $(this).css("color", "blue");
    });

  $(".testPage").mouseenter(function(){
        $(this).css("font-size", "200%");
    });

  $(".testPage").mouseleave(function(){
        $(this).css("font-size", "100%");
    });

});
