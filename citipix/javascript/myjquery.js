

$(document).ready(function(){ 

$('#cityform').on('submit', function(event){  
	event.preventDefault();

	var city = $('#city-type').val(); //Take user input and establish new variable 

	choosecity();  //Initiate If-Else to choose correct city 
	
	function choosecity (){ //Define function to choose correct city

	if (city === "New York" || city === "NYC" || city === "New York City") { //If user input is New York, New York City, or NYC, display NYC.jpg as background 
			$('body').attr('style', 'background: url("images/nyc.jpg")');
		}

	else if (city === "San Francisco" || city ===  "SF" || city ===  "Bay Area") { 	//If user input is San Francisco, SF or Bay Area, display sf.jpg as background 
			$('body').attr('style', 'background: url("images/sf.jpg")');
		}

	else if (city === "Los Angeles" || city === "LA" || city === "LAX") { //If user input is Los Angeles, LA or LAX, display la.jpg as background 

			$('body').attr('style', 'background: url("images/la.jpg")');
		}

	else if (city === "Austin" || city === "ATX") { //If user input is Austin or ATX, display austin.jpg as background 
			$('body').attr('style', 'background: url("images/austin.jpg")');
		}

	else if (city === "Sydney" || city ===  "Syd") { //If user input is Sydney or SYD, display sydney.jpg as background 

			$('body').attr('style', 'background: url("images/sydney.jpg")');
	 	}

	else {
	 		console.log("error"); 	 //error message
	 	}

};
});
});

	




