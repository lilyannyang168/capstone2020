var s = skrollr.init();

$(document).ready(function() {
  $("#scroll-container").html(
    "You've scrolled " + $(window).scrollTop() + " pixels."
  );
  $(window).scroll(function(e) {
    $("#scroll-container").html(
      "You've scrolled " + $(window).scrollTop() + " pixels."
    );
  });
});

// if ($(window).scrollTop()>69999) {
//   location.reload();
// }


      $(window).scroll(function() {
        
        // Only $("html")'s scrollTop changes in this example, not $("body")'s; you may need to try $("body").scrollTop()
        var scrollTop = $("html").scrollTop();
        
        // Have to get of the height of the viewport
        var height = $(window).height();

        if (scrollTop + height >= 71000) {
          
          // Have to reset scrollTop otherwise we are at bottom of screen on reload
          $("html").scrollTop(-400);
          
          location.reload();
        }

        // Just for testing to show output
        $("#output").text(
          "Scrolled " + scrollTop + "px. Window height is " + height + "px."
        );
        