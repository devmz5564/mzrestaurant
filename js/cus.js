
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





$(document).ready(
  
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
    $( "#datepicker" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true //this option for allowing user to select from year range
    });
  }

);
$(document).ready(function() {
  $("#ser1").on("click", function(e) {
    e.preventDefault();
    $("#zoom").slideDown("slow");
	 
	  $(".selected").removeClass('selected');
	  $("#ser1").addClass('selected');
	  
	});  
  });
$(document).ready(function() {
  $("#zx").on("click", function(e) {
    e.preventDefault();
    $("#zoom").hide();
	 
	  $(".selected").removeClass('selected');
	  $("#zx").addClass('selected');
	  
	});  
  });
$(document).ready(function() {
  $("#foo").on("click", function(e) {
    e.preventDefault();
    $("#zoom3").slideDown("slow");
	 
	  $(".selected").removeClass('selected');
	  $("#foo").addClass('selected');
	  
	});  
  });
$(document).ready(function() {
  $("#zc").on("click", function(e) {
    e.preventDefault();
    $("#zoom3").hide();
	 
	  $(".selected").removeClass('selected');
	  $("#zx").addClass('selected');
	  
	});  
  });
$(document).ready(function() {
  $("#foo2").on("click", function(e) {
    e.preventDefault();
    $("#zoom4").slideDown("slow");
	 
	  $(".selected").removeClass('selected');
	  $("#foo2").addClass('selected');
	  
	});  
  });
$(document).ready(function() {
  $("#zz").on("click", function(e) {
    e.preventDefault();
    $("#zoom4").hide();
	 
	  $(".selected").removeClass('selected');
	  $("#zz").addClass('selected');
	  
	});  
  });
  $(document).ready(function() {
  $("#foo3").on("click", function(e) {
    e.preventDefault();
    $("#zoom5").slideDown("slow");
	 
	  $(".selected").removeClass('selected');
	  $("#foo3").addClass('selected');
	  
	});  
  });
/* secs */
$(document).ready(function() {
  $("#k").on("click", function(e) {
    e.preventDefault();
    $("#zoom5").hide();
	 
	  $(".selected").removeClass('selected');
	  $("#z5").addClass('selected');
	  
	});  
  });
$(document).ready(function() {
  $("#gust").on("click", function(e) {
    e.preventDefault();
    $(".face").slideDown("slow");
      $("#ls2").hide();
      $(".ls").hide();
	  $(".selected").removeClass('selected');
	  $("#soop").addClass('selected');  
	});  
  });
$(document).ready(function() {
  $("#cols").on("click", function(e) {
    e.preventDefault();
    $(".face").hide();
	 $(".ls").slideDown("slow");
    
	  $(".selected").removeClass('selected');
	  $("#cols").addClass('selected');
	  
	});  
  });
$(document).ready(function() {
  $("#k").on("click", function(e) {
    e.preventDefault();
    $(".ls").hide();
	 $("#ls2").slideDown("slow");
     $(".face").hide();
	  $(".selected").removeClass('selected');
	  $("#k").addClass('selected');
	  
	});  
  });
/* soop */
$(document).ready(function() {
  $("#soop").on("click", function(e) {
    e.preventDefault();
    $(".ls").slideDown("slow");
      $("#ls2").hide();
         $(".face").hide();    
	  $(".selected").removeClass('selected');
	  $("#soop").addClass('selected');  
	});  
  });



/* order */
$(document).ready(function() {
  $("#uu").on("click", function(e) {
    e.preventDefault();
	  $("#pl").slideDown("slow");
	  $(".selected").removeClass('selected');
	  $("#uu").addClass('selected');
	  
	});  
  });
/* menu */
$(document).ready(function() {
  $("#link101 , #menu2").on("click", function(e) {
    e.preventDefault();
	  $(".det").slideDown("slow");
       $("#ch").hide();
      $("#dish").hide();
      $(".order").hide();
      $("#res").hide();
	  $(".selected").removeClass('selected');
	  $("menu1").addClass('selected');
	  $(".footer").each(function() {
  $(this).css("margin-top", $(this).outerHeight());
});
	});  
  });
/* refresh*/
$(document).ready(function () {
 $('#ref').click(function() { 
    location.reload();    
 }); 
});
/* order */
$(document).ready(function() {
  $("#online , #onli").on("click", function(e) {
    e.preventDefault();
	  $(".order").slideDown("slow");
      $(".det").hide();
       $("#ch").hide();
      $("#dish").hide()
      $("#res").hide();
        $(".m").hide();
	  $(".selected").removeClass('selected');
	  $("online").addClass('selected');

	});  
  })





  