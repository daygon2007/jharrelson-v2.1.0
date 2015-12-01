idleTime = 0;
$(document).ready(function(){
	var limit = 5;
	
	if (Cookies.get('test_status') != '1') {
		
			function timerIncrement() {
				idleTime = idleTime + 1;
				if (idleTime > limit) { 
					$('#subs-popup').show();
					idleTime = 0;
					Cookies.set('test_status', '1', { expires: 30 });
				}
			}

			var idleInterval = setInterval(timerIncrement, 1000); // 1 second

			$(this).mousemove(function (e) {
				idleTime = 0;
			});
			$(this).keypress(function (e) {
				idleTime = 0;
			});

			Cookies.set('test_status', '1', { expires: 30 });
		}else{
			$('#subs-popup').hide();
		};
		$('#close').on('click', function(){
			$('#subs-popup').hide().removeAttr('id');
			Cookies.set('test_status', '1', { expires: 30 });
		})
	});

