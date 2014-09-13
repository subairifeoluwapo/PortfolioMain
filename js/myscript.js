var portfolioAnimate = {



	textAnimate: function() {
		var divWidth = $("#logo").width() / 100 * 10;
		$('h2').animate({'marginLeft': divWidth + "px"}, 4000);
		$('h1').animate({'marginRight': divWidth + "px"}, 2000);
		}

	//changeProfileImage: function() {
		//$('.profile-photo').click(
			//$('img').remove();
			//$('.profile-photo').append('<img src="img/love.jpg" class="profile-photo">');
		//)
	//}//


}

$(document).ready(portfolioAnimate.textAnimate);