/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

$(document).ready(function() {

	$('.dot1').mouseover('click touchstart',function(){
    $(".dot1").animate({
     
      opacity: 0,

    },0);
  });

	$('.dot1').mouseleave('click touchstart',function(){
    $(".dot1").animate({
     
      opacity: 1,

    },0);
  });


});