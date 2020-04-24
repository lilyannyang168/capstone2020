console.log('hi');

$(document).ready(function() {

$('#right').mouseover('click touchstart',function(){

    $(".rectangle").animate({
     
      opacity: .8,

    },);

  });


$('#right').mouseleave('click touchstart',function(){

    $(".rectangle").animate({
     
      opacity: 0,

    },);

  });









});