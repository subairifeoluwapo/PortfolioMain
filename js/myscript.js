var portfolioAnimate = {



	textAnimate: function() {
		var divWidth = $("#logo").width() / 100 * 10;
		$('h2').animate({'marginLeft': divWidth + "px"}, 4000);
		$('h1').animate({'marginRight': divWidth + "px"}, 2000);
		}

	//iconAnimate: function() {
		//var divHeight = $("footer").height() / 100 * 10;
		//$('.social-icon').hover( function() {
		//$('.social-icon').animate({'marginBottom': divHeigth + "px"}, 3000);
		//});
	//},

	//initialize: function() {
		//portfolioAnimate.textAnimate();
		//portfolioAnimate.iconAnimate();
	//}

}

$(document).ready(portfolioAnimate.textAnimate);