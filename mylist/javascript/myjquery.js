/* 
1. User types into add_tasks 
2. Submits tasks 
3. Get value of add_tasks
4. Append value to checkbox 

5. pass value into constructor function
6. function adds and wraps tags to new value
7 click binding calls function

*/ 

$(document).ready(function(){

	$('input:submit').click(function(event){
		event.preventDefault();
	});

	$("#submit").on("click",function(){
		var newTask = $("#add_tasks").val();
		console.log(newTask);
		appendTasks(newTask);
		$("#add_tasks").val("");
		progress();
	}); 

	function appendTasks(newTask){
		newCheckBox = '<li><input type="checkbox"> '+newTask+'</li>';
		$('#task_list ul').append(newCheckBox);
	}

function progress(){
	totalLength= $('input:checkbox').length;
	checkedBoxes= $('input:checkbox:checked').length;
	completionPercent = (checkedBoxes / totalLength) * 100 +'%';
	$('#total').html(completionPercent);
	$('progress').attr('value',parseFloat(completionPercent));
	console.log(totalLength,checkedBoxes);
	if ($('progress').val() == 100) {
		alert("YAY!");
}
}

$('#task_list').change(function(){
	console.log(totalLength,checkedBoxes);
	progress();
}); 

// Tallies total checkboxes 
//tallies total checked boxes 
// divides checked / total boxes 
//outputs % complete 

});
