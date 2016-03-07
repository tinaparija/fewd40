

$(document).ready(function(){ 
	 var cities = ['NYC', 'SF','LA','ATX','SYD'];
	 var options = $('#city-type'); 
	 $.each(cities, function (index, city) { // Loop to append options into the dropdown menu
	 		console.log(typeof index, typeof city);
	 		options.append(
	 				$('<option></option>').val(index).html(city)); 
	 }); 

	$('#cityform').change(function(){  // Logs menu selection 
		var selection = $('#cityform option:selected').val(); 	// Takes in User Selection 
		if (selection === '0') { // If Else Function to update classes based on User Functions  
		 	$('body').attr('class','nyc');
		 } else if (selection === '1') {
	 	 	$('body').attr('class','sf');
	 	 } else if (selection === '2'){
	 	 	$('body').attr('class','la');}
	 	else if (selection === '3'){
	 	 	$('body').attr('class','austin');}
	 	else if (selection === '4'){
	 	 	$('body').attr('class','sydney');}
	}); 
}); 




