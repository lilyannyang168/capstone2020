console.log('hi');

$(document).ready(function() {

$('#right').mouseover('click touchstart',function(){

    $(".rectangle").animate({
     
      opacity: .9,

    },);

  });


$('#right').mouseleave('click touchstart',function(){

    $(".rectangle").animate({
     
      opacity: 0,

    },);

  });









});