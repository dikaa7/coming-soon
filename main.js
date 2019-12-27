let dataDate = document.querySelector('.countdown').dataset.date;
let dataYear = date.split('/')[0];
let dataMonth = date.split('/')[1];
let dataDay = date.split('/')[2];
let dataHour = 0;
let dataMinute = 0;
let dataSecond = 0;
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDay();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();

function getDays(){
	let yearGap = dataYear - currentYear;
	let monthGap = dataMonth - currentMonth;
	let dayGap = dataDate - currentDay;
	let days = 0;

	if(yearGap > 0){
		days = yearGap*365
	}

	if(monthGap > 0){
		days = monthGap*30;
	} else {
		days = days - 365 
	}
}

function countdownTime(){
	if(isExists('.coundown')){
		let days = counf
	}
}

