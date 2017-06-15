
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
    $("#basic-info").click(function(){
        $(".basic-info").show();
        $(".documents").hide();
        $(".facilities").hide();
        $(".registration").hide();
        $(".location").hide();
        $(".necessary").hide();
        $(".counselling").hide();
        $(".mentor").hide();
    });

    $("#documents").click(function(){
        $(".basic-info").hide();
        $(".documents").show();
        $(".facilities").hide();
        $(".registration").hide();
        $(".location").hide();
        $(".necessary").hide();
        $(".counselling").hide();
        $(".mentor").hide();
    });
    $("#facilities").click(function(){
        $(".basic-info").hide();
        $(".documents").hide();
        $(".facilities").show();
        $(".registration").hide();
        $(".location").hide();
        $(".necessary").hide();
        $(".counselling").hide();
        $(".mentor").hide();
    });
    $("#registration").click(function(){
        $(".basic-info").hide();
        $(".documents").hide();
        $(".facilities").hide();
        $(".registration").show();
        $(".location").hide();
        $(".necessary").hide();
        $(".counselling").hide();
        $(".mentor").hide();
    });
    $("#location").click(function(){
        $(".basic-info").hide();
        $(".documents").hide();
        $(".facilities").hide();
        $(".registration").hide();
        $(".location").show();
        $(".necessary").hide();
        $(".counselling").hide();
        $(".mentor").hide();
    });
    $("#necessary").click(function(){
        $(".basic-info").hide();
        $(".documents").hide();
        $(".facilities").hide();
        $(".registration").hide();
        $(".location").hide();
        $(".necessary").show();
        $(".counselling").hide();
        $(".mentor").hide();
    });
    $("#counselling").click(function(){
        $(".basic-info").hide();
        $(".documents").hide();
        $(".facilities").hide();
        $(".registration").hide();
        $(".location").hide();
        $(".necessary").hide();
        $(".counselling").show();
        $(".mentor").hide();
    });
    $("#mentor").click(function(){
        $(".basic-info").hide();
        $(".documents").hide();
        $(".facilities").hide();
        $(".registration").hide();
        $(".location").hide();
        $(".necessary").hide();
        $(".counselling").hide();
        $(".mentor").show();
    });

});