$(document).ready(function(){
	$('#bio').hover(function(){
		$(this).addClass('highlight');
		$('.bio2').slideDown(); 
	});
	$('#bio').mouseleave(function(){
		$(this).removeClass('highlight'); 
		$('.bio2').slideUp(); 
	});

	$('#favs').hover(function(){
		$(this).addClass('highlight'); 
		$('.favs2').slideDown(); 
	});
	
	$('#favs').mouseleave(function(){
		$(this).removeClass('highlight');
		$('.favs2').slideUp(); 
	});

	$('#clwo').hover(function(){
		$(this).addClass('highlight'); 
		$('.clwo2').slideDown(); 
	});
	
	$('#clwo').mouseleave(function(){
		$(this).removeClass('highlight');
		$('.clwo2').slideUp(); 
	});

	$('#rw').hover(function(){
		$(this).addClass('highlight'); 
		$('.rw2').slideDown(); 
	});
	
	$('#rw').mouseleave(function(){
		$(this).removeClass('highlight');
		$('.rw2').slideUp(); 
	});

	$('#hobbies').hover(function(){
		$(this).addClass('highlight'); 
		$('.hob2').slideDown(); 
	});
	
	$('#hobbies').mouseleave(function(){
		$(this).removeClass('highlight');
		$('.hob2').slideUp(); 
	});
});

