$(document).ready(function(){

	$('#hr1').waypoint(function(direction) {
		if (direction === 'down') {
			setTimeout(function(){
				$('#popup1').css('margin-right', '-400px');
			}, 2000);

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
	}, { offset: 50 });

	$('#hr2').waypoint(function(direction) {
		if (direction === 'down') {
			setTimeout(function(){
				$('#popup2').css('margin-right', '-400px');
			}, 2000);

			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '20px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		} else {
			setTimeout(function(){
				$('#popup1').css('margin-right', '-400px');
			}, 2000);

			$('#popup1').css('margin-right', '20px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		}
	}, { offset: 50 });

	$('#hr3').waypoint(function(direction) {
		if (direction === 'down') {
			setTimeout(function(){
				$('#popup3').css('margin-right', '-400px');
			}, 2000);

			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '20px');
			$('#popup4').css('margin-right', '-400px');
		} else {
			setTimeout(function(){
				$('#popup2').css('margin-right', '-400px');
			}, 2000);

			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '20px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		}
	}, { offset: 50 });

	$('#hr4').waypoint(function(direction) {
		if (direction === 'down') {
			setTimeout(function(){
				$('#popup4').css('margin-right', '-400px');
			}, 2000);

			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '20px');
		} else {
			setTimeout(function(){
				$('#popup3').css('margin-right', '-400px');
			}, 2000);

			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '20px');
			$('#popup4').css('margin-right', '-400px');
		}
	}, { offset: 50 });

	$('#hr5').waypoint(function(direction) {
		if (direction === 'down') {
			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '-400px');
		} else {
			setTimeout(function(){
				$('#popup4').css('margin-right', '-400px');
			}, 2000);

			$('#popup1').css('margin-right', '-400px');
			$('#popup2').css('margin-right', '-400px');
			$('#popup3').css('margin-right', '-400px');
			$('#popup4').css('margin-right', '20px');
		}
	}, { offset: 50 });

});

