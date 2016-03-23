

$(document).ready(function(){ 

	var blacksongs = ['#camel', '#calling','#inlove'];
	var bluesongs = ['#foolofme', '#sweettooth','#wantme'];
	var greensongs = ['#babe', '#clouds','#greenland'];
	var maroonsongs = ['#casanova', '#eskapismus','#losttonight'];
	var yellowsongs = ['#bigfish', '#look','#sunny'];

	var song; 

	$(".black").on('click',function(){
		selected_song = blacksongs[Math.floor(Math.random()*blacksongs.length)];
		song = $(selected_song)[0];
		song.play();
		$('body').keypress(function(event){
			if (window.$_currentlyPlaying && event.which == 32 ) {
				event.preventDefault();
				song.pause();
			} 
		});
		$('div').css({'width':'30px','height':'30px','margin-left':'30px','float':'left'});
		$('body').attr('class','black_background');
		console.log('yo');
		displaysong();
		$(song).on('ended', function() {
   		location.reload();
   	});
	});

	$(".blue").on("click",function(){
		selected_song = bluesongs[Math.floor(Math.random()*bluesongs.length)];
		song = $(selected_song)[0];
		song.play();		
		$('body').keypress(function(event){
			if (window.$_currentlyPlaying && event.which == 32 ) {
				event.preventDefault();
				song.pause();
			} 
		});
		$('div').css({'width':'30px','height':'30px','margin-left':'30px','float':'left'});
		$('body').attr('class','blue_background');
		displaysong();
		$(song).on('ended', function() {
   		location.reload();
   	});
	});

	$(".green").on("click",function(){
		selected_song = greensongs[Math.floor(Math.random()*greensongs.length)];
		song = $(selected_song)[0];
		song.play();		
		$('div').css({'width':'30px','height':'30px','margin-left':'30px','float':'left'});
		$('body').attr('class','green_background');
		displaysong();
		$('body').keypress(function(event){
			if (window.$_currentlyPlaying && event.which == 32 ) {
				event.preventDefault();
				song.pause();
			} 
		});
		$(song).on('ended', function() {
   		location.reload();
   	});
	});

	$(".maroon").on("click",function(){
		selected_song = maroonsongs[Math.floor(Math.random()*maroonsongs.length)];
		song = $(selected_song)[0];
		console.log(song);
		song.play();		
		$('body').keypress(function(event){
			if (window.$_currentlyPlaying && event.which == 32 ) {
				event.preventDefault();
				song.pause();
			} 
		});
		$('div').css({'width':'30px','height':'30px','margin-left':'30px','float':'left'});
		$('body').attr('class','maroon_background');
		displaysong();
		$(song).on('ended', function() {
   		location.reload();
   	});
	});

	$(".yellow").on("click",function(){
		selected_song = yellowsongs[Math.floor(Math.random()*yellowsongs.length)];
		song = $(selected_song)[0];
		song.play();	
		$('body').keypress(function(event){
			if (window.$_currentlyPlaying && event.which == 32 ) {
				event.preventDefault();
				song.pause();
			} 
		});	
		$('div').css({'width':'30px','height':'30px','margin-left':'30px','float':'left'});
		$('body').attr('class','yellow_background');
		displaysong();
		$(song).on('ended', function() {
   		location.reload();
   	});
	});

	// $('body').click(function() {
 //        $('.music').get(0).paused ? $('.music').get(0).play() : $('.music').get(0).pause();
 //    });

	function displaysong(){
		$('#defaultbox').empty();
		$('#defaultbox').css({'color':'white','font-weight':'bold','font-size':'60px', 'padding-top':'200px'}); 
			if (selected_song == '#camel') { 
	 		$('#defaultbox').text("Camel // Flying Lotus"); 
		} else if (selected_song == '#calling') { 
	 		$('#defaultbox').text("I Don't Want You Calling // Gang Colors"); 
	 	} else if (selected_song == '#inlove') { 
	 		$('#defaultbox').text("I Fell In Love // Gidge"); 
	 		console.log("hi");
		} else if (selected_song == '#foolofme') { 
	 		$('#defaultbox').text("Fool of Me // Say Lou Lou (ft. Chet Faker"); 
	 			console.log("hi");
	 	} else if (selected_song == '#sweettooth') { 
	 		$('#defaultbox').text("Sweet Tooth // Blue Hawaii"); 
	 		console.log("hi");
	 	} else if (selected_song == '#wantme') { 
	 		$('#defaultbox').text("Want Me // Affelaye"); 
	 		console.log("hi");
	 	} else if (selected_song == '#babe') { 
	 		$('#defaultbox').text("Babe // Evenings");
	 		console.log("hi");
	 	} else if (selected_song == '#clouds') {
	 		$('#defaultbox').text("Clouds // Imagined Herbal Flows"); 
	 		console.log("hi");
	 	} else if (selected_song == '#greenland') { 
	 		$('#defaultbox').text("Greenland // Emancipator"); 
	 		console.log("hi");
	 	} else if (selected_song == '#casanova') { 
	 		$('#defaultbox').text("Casanova // Denitia and Sene"); 
	 		console.log("hi");
	 	} else if (selected_song == '#eskapismus') { 
	 		$('#defaultbox').text("Eskapismus // Persian Empire"); 
	 		console.log("hi");
	 	} else if (selected_song == '#losttonight') { 
	 		$('#defaultbox').text("Lost Tonight // Saje"); 
	 		console.log("hi");
	 	} else if (selected_song == '#bigfish') { 
	 		$('#defaultbox').text("Big Fish // Kazy Lambist (ft. Amoue"); 
	 			console.log("hi");
	 	} else if (selected_song == '#look') { 
	 		$('#defaultbox').text("Look // Sebastien Tellier"); 
	 		console.log("hi");
	 	} else if (selected_song == '#sunny') { 
	 		$('#defaultbox').text("Sunny // Hippie Sabotage");
	 		console.log("hi");
	 	};
	};

window.addEventListener("play", function(evt)
{
    if(window.$_currentlyPlaying)
    {
        window.$_currentlyPlaying.pause();
        song.currentTime = 0
    } 
    window.$_currentlyPlaying = evt.target;
}, true);


});




// User Clicks on Color 
// Browser recognizes the click
// Randomly selects song from correct class
// Plays Animation associated with class 

