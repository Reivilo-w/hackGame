$(document).ready(function(){
	$('#startOS').fadeOut(500);
	$('#login').fadeIn(500);
	$('#login').css('display','flex');
	// NORMAL 
	/*Setters*/
	setDate();
	/*Other*/
	var unlogged = true;

	$('.window').draggable({
		cancel: '.wContent',
		zIndex: 1337
	});
	$('.window').click(function(){
		$('.window').css('z-index', '5');
		$(this).css('z-index', '1337');
	});

	$('.wIcon').click(function(){
		var windowToOpen = $(this).attr('alt');
		$('#'+windowToOpen).fadeIn(200);
		$('#'+windowToOpen).css('z-index', '1337');
	});

	$('.wBarClose').click(function(){
		$(this).parent().parent().parent().fadeOut(200);
	});

	$('#login > form').submit(function(){
		var username = $('.loginUsername').val();
		var password = $('.loginPassword').val();

		$.post('../inc/loginAttempt.php', {username:username,password:password},function(data){
			//hop hop
		});
		/*unlogged = false;
		$('#login').fadeOut(300);
		$('#container').fadeIn(300);*/
		
		return false;
	});

	// INTERVALS
	setInterval(setDate, 1000);
	setInterval(function(){
		if (unlogged) {
			$('#container').css('display','none');
		}
	},60000);

	// EFFECTS
	$('.wIcon').click(function(){
		$(this).fadeOut(100);
		$(this).fadeIn(100);
	});

	// FUNCTIONS
	function setDate() {
		var now = new Date();
		var minute = ('0'+now.getMinutes()).slice(-2);
		var heure = ('0'+now.getHours()).slice(-2);

		$('.time').text(heure+':'+minute);
	}

	function getWindowName() {
		var windows = $('.window').css('z-index');
	}
});

/*

	Stocker du html dans des fichiers extérieur et les appeler avec une ouverture de fichier, stockage dans une variable puis $('select').html(variable)

*/