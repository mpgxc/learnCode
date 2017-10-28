
/*efeito escrever*/
var div = document.getElementById('log');
var texto = '  ./O_que_e_a_linguagem_C_?.docx';

function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
    }, 80);
}
escrever(texto, div);


$(function(){   
	var nav = $('#menuHeader');   
	$(window).scroll(function () { 
		if ($(this).scrollTop() > 150) { 
		nav.addClass("menu-fixo"); 
		} else { 
		nav.removeClass("menu-fixo"); 
		} 
	});  
});		
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});


