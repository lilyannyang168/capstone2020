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


});