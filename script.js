$(document).ready(function(){
	$('h1').waypoint(function(direction) {
		if (direction === 'down') {
			$('#border:first-child img').animate({
				opacity: "0"				
			}, 200 );
		} else {
			$('#border:first-child img').animate({
				opacity: "1"
			}, 200 );
		}
	}, { offset: -400 });

	$('hr').waypoint(function(direction) {
		if (direction === 'down') {
			setTimeout(function(){
				$('#border').animate({
					opacity: "0"
				}, 50 );
			}, 50);

			$('#border').animate({
				backgroundColor: "#EFEEEE",
				width: "300px"
			}, 150 );
			$('#border h2').animate({
				opacity: "0"
			}, 50 );
			$('#header').animate({
				opacity: "1"				
			}, 200 );
		} else {
			setTimeout(function(){
				$('#border').animate({
					backgroundColor: "#F9F7F6",
					width: $("body").width() - 114 + "px"
				}, 150 );
				$('#border h2').animate({
					opacity: "1"
				}, 400 );
				$('#header').animate({
					opacity: "0"
				}, 50 );
			}, 50);

			$('#border').animate({
				opacity: "1"
			}, 50 );
		}
	}, { offset: 180 });
});

$( window ).resize(function() {
		$('#border').css({
			"width": $("body").width() - 114 + "px"
		}, 150 );
});
