$(document).ready(function(){

	$('#hr1').waypoint(function(direction) {
		if (direction === 'down') {
			$('#popup1').css('margin-right', '20px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		} else {
			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		}
	}, { offset: 1 });

	$('#hr2').waypoint(function(direction) {
		if (direction === 'down') {
			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '20px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		} else {
			$('#popup1').css('margin-right', '20px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		}
	}, { offset: 1 });

	$('#hr3').waypoint(function(direction) {
		if (direction === 'down') {
			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '20px');
			$('#popup4').css('margin-right', '-400px');
		} else {
			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '20px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		}
	}, { offset: 1 });

	$('#hr4').waypoint(function(direction) {
		if (direction === 'down') {
			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '20px');
		} else {
			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '20px');
			$('#popup4').css('margin-right', '-400px');
		}
	}, { offset: 1 });

});

