$(document).ready(function() {

	$(".href-project").on('click', function(event) {
		var projectNameParts = $(event.target).attr("id").split("-"),
			project;
			project = projectNameParts[0] + "-" + projectNameParts[1];
			showDiv(project, $("#projects-stripe"));
	});

	$(".scroll-to-target, .navbar-link, #slide-button-2, #slide-button-3").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top - 70
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	  });

	var menu = $('.menu'),
		origOffsetY = menu.offset().top;

	function scroll() {
	    if ($(window).scrollTop() >= origOffsetY) {
	        $('.menu').addClass('sticky');
	    } else {
	        $('.menu').removeClass('sticky');
	    }
	}

 	document.onscroll = scroll;

});

function showDiv(option, container) {
	$('.project-container').hide();
	$option = container.find('#' + option);
	$option.show();
	container.height(750 + $option.height() + 50);
}

function scrollToAnchor(anchor_id){
	console.log(anchor_id);
    var tag = $("#"+anchor_id);
    $('html,body').animate({scrollTop: tag.offset().top-70},'slow');
}


