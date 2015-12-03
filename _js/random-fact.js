
        $.getJSON("http://jonathon-harrelson.com/search.json", function(data) {
            console.log(data);
			
			var dataArray = $.map(data, function(value) { return value;});
			
			function shuffle(array) {
  				var currentIndex = array.length, temporaryValue, randomIndex ;

  				// While there remain elements to shuffle...
				while (0 !== currentIndex) {

    			// Pick a remaining element...
    			randomIndex = Math.floor(Math.random() * currentIndex);
    			currentIndex -= 1;

    			// And swap it with the current element.
				temporaryValue = array[currentIndex];
    			array[currentIndex] = array[randomIndex];
    			array[randomIndex] = temporaryValue;
  				}

  				return array;
			}
			
			shuffle(dataArray);
			
			for(var i = 0; i < dataArray.length; i++){
				var current = data[dataArray[i]];
				$("#random_posts").append("<blockquote>" + current + "</blockquote>");
			}

            console.log(current);
        });
