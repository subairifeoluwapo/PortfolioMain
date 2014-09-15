var portfolioAnimate = {


 smoothScroll: function() {

    $('a[href^=#]').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, 1000);
    });
  
  },

	textAnimate: function() {
		var divWidth = $("#logo").width() / 100 * 10;
		$('h2').animate({'marginLeft': divWidth + "px"}, 4000);
		$('h1').animate({'marginRight': divWidth + "px"}, 2000);
		},

	
	initialize: function() {
		portfolioAnimate.textAnimate();
		portfolioAnimate.smoothScroll();
	}

}

$(document).ready(portfolioAnimate.initialize);