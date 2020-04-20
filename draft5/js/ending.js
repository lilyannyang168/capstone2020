/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

$(document).ready(function() {

	$('.dot1').mouseover('click touchstart',function(){
    $(".dot1").animate({
     
      opacity: 0,

    },0);

    $("#attraction").animate({
     
      opacity: 1,

    },250);

    $("#city").animate({
     
      opacity: 1,

    },250);


    document.getElementById("attraction").innerHTML = "Gum Wall" ;
    document.getElementById("city").innerHTML = "Seattle, Washington" ;


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


});