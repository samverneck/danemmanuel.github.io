var time = 100; // Tempo de digitação em mili segundos
var atual = 0; // indice atual do bloco de texto
var qtd; //Definimos uma variavel
 
$(function(){       
    $('.textosTroca .item').hide();        
    qtd = $('.textosTroca .item').length;       
    setTimeout('digitaTexto('+atual+')',500);   
});   
 
function digitaTexto(item){
    $('.areaTexto').html('');
    objItem = $('.textosTroca .item').eq(item);        
    texto = ($.trim(objItem.html()));       
    if(!objItem.attr('texto')){           
        objItem.attr('texto',texto);            
        objItem.html('');       
    }               
    stringItem = new String(objItem.attr('texto'));               
    setTimeout('efeitoDigita(stringItem,0)',time);   
} 
 
function efeitoDigita(stringItem,n){       
    qtdLetras = stringItem.length;        
    $('.areaTexto').append(stringItem[n]);               
    if((n+1) < qtdLetras){           
        setTimeout('efeitoDigita(stringItem,'+(n+1)+')',time);       
    }else{           
        if((atual+1) < qtd){               
            atual++           
        }else{               
            atual = 0;           
        }           
        setTimeout('digitaTexto('+atual+')',2000);       
    }           
}

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
	$(".menu-list ul li a").click(function(event){
		$(".content-menu").toggleClass("animacao-menu");
		$(".content-menu-right").toggleClass("animacao-menu-right");
		$(".icon-menu").toggleClass("hide");
		$(".icon-menu-close").toggleClass("visible");
		$(".menu-list ul").toggleClass("animacao-menu-list");



	});

	



	$("body").fadeIn(2000);
	$('.content-hero').addClass('animacao-profession');
	$('.overlay-hero').addClass('animacao-background-home1');
	$('.hero').fadeIn(3000);

	$(".btn-vida").mouseover(function(){
		$('.vida-text').addClass('vida-text-show');
		$('.nc-icon-wrapper').fadeOut();

	}).mouseleave(function() {
		$('.vida-text').removeClass('vida-text-show');
		$('.nc-icon-wrapper').fadeIn();
	});

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
	
	$('.menu-left, .menu-list ul li a').click(function(){
		var hamburger = $('.hamburger');
		hamburger.toggleClass('ativo');
		header.toggleClass('open');
	});


});