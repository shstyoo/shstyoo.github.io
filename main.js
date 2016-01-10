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

	// Slider nav arrow functinality (loops back if end of line is met)
	$('#arrow-next').click(function() {
		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextDot.length == 0){
			nextDot = $('.dot').first();
		}

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});

	$('#arrow-prev').click(function() {
		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevDot.length == 0){
			prevDot = $('.dot').last();
		}

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});

	$('.project-slides').append()

	/* *****************************************************************
	// ANY CODE DOWN HERE WILL NOT WORK ON A LOCAL MACHINE SINCE
	// AJAX MAKES A SERVER CALL, UNLESS THE SERVER IS CAPABLE OF
	// HANDLING AN AJAX REQUEST THE CODE WONT DEBUG AFTER THIS POINT
	******************************************************************** */

	// AJAX TESTING
	// Function to populate repo names
	var numOfBullets;
	var nameStringArray;
	function populateName(url) {
		// Create new XMLHTTPRequest the repo names
		var xhr = new XMLHttpRequest();
		// Get the data and populate website with it
		xhr.onreadystatechange = function() {
			// Take the string that is returned and split into an array
			// Update HTML with proper values
			nameStringArray = xhr.responseText.split("\n");
			// Default slide info
			$('#projName').text(nameStringArray[0]);
		};
		// Send synchronous request to server
		xhr.open('GET', url, false);
		xhr.send();
	}
	// Run function to populate repo name
	populateName('/pyScripts/Outputh3.txt');

	// Function to populate repo descriptions
	// Same skeleton as populateName
	function populateDesc(url) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			nameStringArray = xhr.responseText.split("\n");
			$('#projDesc').text(nameStringArray[0]);
		};
		xhr.open('GET' ,url, false);
		xhr.send();
	}
	populateDesc('/pyScripts/Outputp.txt');

	// This code is designed to populate the slider bullets
	function populateSliderBullets(url) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			numOfBullets = xhr.responseText;
		};
		xhr.open('GET' ,url, false);
		xhr.send();
	}
	populateSliderBullets('/pyScripts/NumOfItem.txt');
	alert(numOfBullets);
	for(i=1;i<numOfBullets;i++) {
		$('.slider-dots').append('<li class=\'dot\'>&bull;</li>');
	}
	for(i=1;i<numOfBullets;i++) {
		$('.project-slides').clone().append($('.slide-template').html());
		$('.slide-template').addClass('slide');
		$('.slide-template').removeClass('slide-template');
		alert('hiding class 1');
		$('.slide').find('.project-slide').addClass('1');
		alert('showing class');
	}
}

$(document).ready(main);
