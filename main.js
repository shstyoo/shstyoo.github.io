var main = function() {
	
	// Menu Sliding Toggle with buffer (to prevent multiple clicks)
	$(".menuIconOpen").click(function(){
		if( !$(".menuIconOpen").hasClass("pending") ) {
			$(".menuIconOpen").addClass("pending");
			$(".menu").animate({ left: "45px" }, 200);
			setTimeout(removeOpenClass, 400);
			//$(".menuIconOpen").fadeOut(200);
			$(".menuIconOpen").hide();
			//$(".menuIconClose").fadeIn(200);
			$(".menuIconClose").show();
		}
	});
	$(".menuIconClose").click(function() {
		if( !$(".menuIconClose").hasClass("pending") ){
			$(".menuIconClose").addClass("pending");
			$(".menu").animate({ left: "-870px" }, 200);
			setTimeout(removeCloseClass, 400);
			//$(".menuIconClose").fadeOut(200);
			$(".menuIconClose").hide();
			//$(".menuIconOpen").fadeIn(200);
			$(".menuIconOpen").show();
		}
	});
	
	// setTimer Functions to remove class {pending} from the icons
	var removeOpenClass = function() {
		$(".menuIconOpen").removeClass("pending");
	}
	var removeCloseClass = function() {
		$(".menuIconClose").removeClass("pending");
	}
	
	// THIS CODE DON'T DO SHIT. FUCK
	function fetchRepoInfo(){
		$.get('C:/Users/steve/Documents/Github/Python Scripts/Outputh3.txt', function(data) {
			var lines = data.split("\n");
			$.each(lines, function(n, elem) {
				$('<li>').text(elem).prependTo($('.project-slides'));
			});
		});
	}
	fetchRepoInfo();
	
	/* !!! NOT A PRIORITY !!! Used to see if an element is overflowing (to show/hide etc...) 
	function isOverflowed(element){
		return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
	}
	
	$('<li>').text(isOverflowed($('.projname'))).prependTo($('.project-slides'));
	*/
}

$(document).ready(main);