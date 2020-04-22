console.log('hi');

$(document).ready(function() {

	$('#titanic').mouseover('click touchstart',function(){
    $("#titanic").animate({
     
      opacity: .2,

    },500);
  });

	$('#titanic').mouseover('click touchstart',function(){
    $(".caption1").animate({
     
      opacity: 1,

    },500);
  });
  $('#titanic').mouseleave('click touchstart',function(){
    $("#titanic").animate({
     
      opacity: 1,

    },500);
  });
  $('#titanic').mouseleave('click touchstart',function(){
    $(".caption1").animate({
     
      opacity: 0,

    },500);
  });







  $('#front').mouseover('click touchstart',function(){
    $("#front").animate({
     
      opacity: .2,

    },500);
  });

  $('#front').mouseover('click touchstart',function(){
    $(".caption2").animate({
     
      opacity: 1,

    },500);
  });
  $('#front').mouseleave('click touchstart',function(){
    $("#front").animate({
     
      opacity: 1,

    },500);
  });
  $('#front').mouseleave('click touchstart',function(){
    $(".caption2").animate({
     
      opacity: 0,

    },500);
  });




  $('#car').mouseover('click touchstart',function(){
    $("#car").animate({
     
      opacity: .2,

    },500);
  });

  $('#car').mouseover('click touchstart',function(){
    $(".caption3").animate({
     
      opacity: 1,

    },500);
  });
  $('#car').mouseleave('click touchstart',function(){
    $("#car").animate({
     
      opacity: 1,

    },500);
  });
  $('#car').mouseleave('click touchstart',function(){
    $(".caption3").animate({
     
      opacity: 0,

    },500);
  });
  


    $('#vroom').mouseover('click touchstart',function(){
    $("#vroom").animate({
     
      opacity: .2,

    },500);
  });

  $('#vroom').mouseover('click touchstart',function(){
    $(".caption4").animate({
     
      opacity: 1,

    },500);
  });
  $('#vroom').mouseleave('click touchstart',function(){
    $("#vroom").animate({
     
      opacity: 1,

    },500);
  });
  $('#vroom').mouseleave('click touchstart',function(){
    $(".caption4").animate({
     
      opacity: 0,

    },500);
  });





});