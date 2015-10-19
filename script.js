$(document).ready(function(){
	$('hr').waypoint(function(direction) {
		if (direction === 'down') {
			setTimeout(function(){
				$('#border').animate({
					opacity: "0"
				}, 100 );
			}, 100);

			$('#border').animate({
				backgroundColor: "#EFEEEE",
				width: "300px"
			}, 300 );
			$('#border h2').animate({
				opacity: "0"
			}, 100 );
			$('#header').animate({
				opacity: "1"				
			}, 100 );
		} else {
			setTimeout(function(){
				$('#border').animate({
					backgroundColor: "#F9F7F6",
					width: $("body").width() - 64 + "px"
				}, 300 );
				$('#border h2').animate({
					opacity: "1"
				}, 800 );
				$('#header').animate({
					opacity: "0"
				}, 100 );
			}, 100);

			$('#border').animate({
				opacity: "1"
			}, 100 );
		}
	}, { offset: 260 });
});
