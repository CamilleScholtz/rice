$(document).ready(function(){
	$('#border:nth-child(2)').waypoint(function(direction) {
		if (direction === 'down') {
			$('#header').animate({
				backgroundColor: "#F8C6AD",
				height: "70px",
				width: "70px"
			}, 300 );
			$('h1, h2').animate({
				opacity: "0"
			}, 200 );
			$('h1, h2').css({
				"display" : "none"
			});
		} else {
			$('#header').animate({
				backgroundColor: "#F9F7F6",
				height: "150px",
				width: "325px"
			}, 300 );
			$('h1, h2').animate({
				opacity: "1"
			}, 200 );
			$('h1, h2').css({
				"display" : "block"
			});
		}
	}, { offset: 300 });
});
