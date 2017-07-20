$(document).ready(function(){
/*
	$("body").fadeIn(2000);
	$('.text-home div').addClass('animacao-text');
	$('.liness').addClass('animacao-lines');
	$('.background_home1').addClass('animacao-background-home1');
	$('.page-name').addClass('animacao-titulopagina-boot');

	$(".menu-item a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(500, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
	*/

	$(".menu-left").click(function(){
		$(".content-menu").toggleClass("animacao-menu");
		$(".icon-menu").toggleClass("hide");
		$(".icon-menu-close").toggleClass("visible");
	});


	

});