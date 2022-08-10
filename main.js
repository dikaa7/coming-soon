// Set the date we're counting down to
let dataDate = document.querySelector('.countdown').dataset.date;
let countDownDate = new Date(dataDate).getTime();

// Update the count down every 1 second
function countdown() {
	// Get today's date and time
	let now = new Date().getTime();

	// Find the distance between now and the count down date
	let distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementsByClassName('day')[0].innerText = days;
	document.getElementsByClassName('hour')[0].innerText = hours;
	document.getElementsByClassName('minute')[0].innerText = minutes;
	document.getElementsByClassName('second')[0].innerText = seconds;


	// If the count down is finished, write some text
	setInterval(function() {
		if (distance < 0) {
			document.getElementsByClassName('title')[0].innerText = "Launching Web";
		} else {
			countdown();
		}
	}, 1000);
}

countdown();
