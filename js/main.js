$(document).ready(function(){
/*

	
	$('.liness').addClass('animacao-lines');

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
		$("body").fadeIn(2000);
	$('.content-hero').addClass('animacao-profession');
	$('.overlay-hero').addClass('animacao-background-home1');
	$('.hero').fadeIn(3000);


	$(".menu-left").click(function(){
		$(".content-menu").toggleClass("animacao-menu");
		$(".content-menu-right").toggleClass("animacao-menu-right");
		$(".icon-menu").toggleClass("hide");
		$(".icon-menu-close").toggleClass("visible");
		$(".menu-list ul").toggleClass("animacao-menu-list");
	});

	$(function() {
		$('a[href*=#]').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
		});
	});
	
	$('.menu-left').click(function(){
		var hamburger = $('.hamburger');
		hamburger.toggleClass('ativo');
		header.toggleClass('open');
		if (hamburger.hasClass('ativo')) {
			hamburger.find('.texto').html('fechar');
		} else {
			hamburger.find('.texto').html('menu');
		}
	});


});