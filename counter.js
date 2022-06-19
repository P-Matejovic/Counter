$("document").ready(function(){

var curentNumber = 0;
//Incresing button
$("#btn1").click (function(){
    curentNumber ++;
   $("h2").html(curentNumber);
});
//decresing button
$("#btn2").click (function(){
    curentNumber --;
   $("h2").html(curentNumber);
});



});