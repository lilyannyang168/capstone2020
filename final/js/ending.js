/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

$(document).ready(function() {

	$('.dot1').mouseover('click touchstart',function(){

    $("#attraction").animate({
     
      opacity: 1,

    },250);

    $("#city").animate({
     
      opacity: 1,

    },250);


    document.getElementById("attraction").innerHTML = "Gum Wall" ;
    document.getElementById("city").innerHTML = "Seattle, WA" ;


  });

	$('.dot1').mouseleave('click touchstart',function(){
    $(".dot1").animate({
     
      opacity: 0,

    },250);

    $("#attraction").animate({
     
      opacity: 0,

    },250);

    $("#city").animate({
     
      opacity: 0,

    },250);


  });










	$('.dot2').mouseover('click touchstart',function(){

    $("#attraction").animate({
     
      opacity: 1,

    },250);

    $("#city").animate({
     
      opacity: 1,

    },250);


    document.getElementById("attraction").innerHTML = "Madonna Inn" ;
    document.getElementById("city").innerHTML = "San Luis Obispo, CA" ;


  });

	$('.dot2').mouseleave('click touchstart',function(){
    $(".dot2").animate({
     
      opacity: 0,

    },250);

    $("#attraction").animate({
     
      opacity: 0,

    },250);

    $("#city").animate({
     
      opacity: 0,

    },250);


  });


});