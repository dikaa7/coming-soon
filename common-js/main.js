function countdownTime(){
	
	if(isExists('.coundown')){
		$('.countdown').countdown(date, function(event){
			var $this = $(this).html(event.strftime(''
			console.log(event);
			));
		});
	}
}

countdownTime();