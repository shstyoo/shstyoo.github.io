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

	// To populate bullet list
	var numOfBullets = 0;
	var nameStringArray;
	var counter;

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
			// Get number of elements
			counter++;
		};
		numOfBullets = counter;
		$(".slider-dots").append(numOfBullets)
		// Send request to server
		xhr.open('GET', url, true);
		xhr.send();
	}
	// Run function to populate repo name
	populateName('/pyScripts/Outputh3.txt');

	// Function to populate repo descriptions
	// Same skeleton as populateName
	function populateDesc(url) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			var nameStringArray = xhr.responseText.split("\n");
			$('#projDesc').text(nameStringArray[0]);
		};
		xhr.open('GET' ,url, true);
		xhr.send();
	}
	populateDesc('/pyScripts/Outputp.txt');

	/*
	$(".slider-dots").append("<li>" + numOfBullets + "</li>")

	function populateSliderBullets(num) {
		for(x=0; x<num-1; x++) {
			$(".slider-dots").append("<li>&bull;</li>");
		}
	}
	populateSliderBullets(numOfBullets);

	/* !!! NOT A PRIORITY !!! Used to see if an element is overflowing (to show/hide etc...)
	function isOverflowed(element){
		return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
	}

	$('<li>').text(isOverflowed($('.projname'))).prependTo($('.project-slides'));
	*/
}

$(document).ready(main);
