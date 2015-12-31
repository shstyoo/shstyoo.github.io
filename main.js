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

	// AJAX TESTING
	// Function to populate repo names

	function populateName(url) {
		// Create new XMLHTTPRequest the repo names
		var testString = "Test Line 1\nTest Line 2";
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			// Get the data and populate website with it
			var newString = JSON.stringify(xhr.responseText);
			var nameStringArray = newString.split("\n");
			$('#projName').text(nameStringArray[0]);
			//var nameStringArray = xhr.responseText.split("\n");
			//$('#projName').text(nameStringArray[0]);
		};
		// Send request to server
		xhr.open('GET', url, true);
		xhr.send();
	}
	// Run function to populate repo name
	populateName('/pyScripts/Outputh3.txt');

	/*
	// Function to populate repo descriptions
	// Same skeleton as populateName
	function populateDesc(url) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			$('li').text(xhr.responseTest).text($('.project-slides'));
		};
		xhr.open('GET' ,url, true);
		xhr.send();
	}
	populateDesc('/pyScripts/Outputp.txt');

	/* !!! NOT A PRIORITY !!! Used to see if an element is overflowing (to show/hide etc...)
	function isOverflowed(element){
		return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
	}

	$('<li>').text(isOverflowed($('.projname'))).prependTo($('.project-slides'));
	*/
}

$(document).ready(main);
