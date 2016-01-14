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
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if(nextDot.length == 0){
			nextDot = $('.dot').first();
			nextSlide = $('.slide').first();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		nextSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});
	$('#arrow-prev').click(function() {
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevDot.length == 0){
			prevDot = $('.dot').last();
			prevSlide = $('.slide').last();
		}

		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');

		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
	});

	// Tab pane functinality (allows users to select and view certain panes)
	$('#activity').click(function() {
		if($('#activity').hasClass('active')) {
			// Do nothing
		}
		else {
			$('#activity').addClass('active');
			$('#projects').removeClass('active');
			$('#contact').removeClass('active');
			$('#about').removeClass('active');
		}
	});
	$('#projects').click(function() {
		if($('#projects').hasClass('active')) {
			// Do nothing
		}
		else {
			$('#projects').addClass('active');
			$('#activity').removeClass('active');
			$('#contact').removeClass('active');
			$('#about').removeClass('active');
		}
	});
	$('#contact').click(function() {
		if($('#contact').hasClass('active')) {
			// Do nothing
		}
		else {
			$('#contact').addClass('active');
			$('#activity').removeClass('active');
			$('#projects').removeClass('active');
			$('#about').removeClass('active');
		}
	});
	$('#about').click(function() {
		if($('#about').hasClass('active')) {
			// Do nothing
		}
		else {
			$('#about').addClass('active');
			$('#activity').removeClass('active');
			$('#projects').removeClass('active');
			$('#contact').removeClass('active');
		}
	});
}

$(document).ready(main);
