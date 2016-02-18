$(document).ready(function(){
	$("#button1").click(show1);
	$("#button2").click(show2);
	$("#button3").click(hide1);
	$("#button4").click(hide2);
	$("#signup").click(block);

	function show1(){
		$("#moretext1").slideDown();
		$("#moretext1").show("fast");
		$("#button1").hide();
		$("#button3").show();
	}

	function show2(){
		$("#moretext2").slideDown();
		$("#moretext2").show("fast");
		$("#button2").hide();
		$("#button4").show();
	}
	function hide1(){
		$("#moretext1").slideUp();
		$("#moretext1").hide("fast");
		$("#button1").show();
		$("#button3").hide();
	}

	function hide2(){
		$("#moretext1").slideUp();
		$("#moretext1").hide("fast");
		$("#button2").show();
		$("#button4").hide();
		}

	function block(){
		event.preventDefault();
	}
	})


		