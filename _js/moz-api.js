// Moz Form Ajax
$('#moz-form').on('submit', function(){
	"use strict";
	$.ajax({
		data: {
			action: "moz_api",
			data: $("#domain").val()
			},
		dataType: 'json',
		type: 'POST',
		method: 'POST',
		url: 'https://jonathon-harrelson.com/play/scripts/mozscape-call.php',
		success: function(response){
			$('#result').html(
			
			'<ul><li><b>Page Title:</b> '+response[0].ut+"</li>"+
			'<li><b>Canonical URL:</b> '+response[0].uu+"</li>"+
			'<li><b>External Link Equity:</b> '+response[0].ueid+"</li>"+
			'<li><b>Moz Rank for the URL:</b> '+response[0].umrp.toFixed()+"</li>"+
			'<li><b>Page Authority:</b> '+response[0].upa.toFixed()+"</li>"+
			'<li><b>Domain Authority:</b> '+response[0].pda.toFixed()+"</li>"+
			'<li><b>Date Last Crawled:</b> '+Date(time)+"</li></ul>"
			).show();
			var time = response[0].ulc;
			console.log(response[0]);
		},
		 error: function(jqXHR, textStatus, errorThrown) 
          {
          $("#result").html('<pre><code class="prettyprint">AJAX Request Failed<br/> textStatus='+textStatus+', errorThrown='+errorThrown+'</code></pre>');
          }
	});
	return false;
});
$("#hide-result").on('click', function(){
	"use strict";
	$('#result').hide();
});