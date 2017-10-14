
/*Efeito fade in down*/
Visibility.onVisible(function(){


	setTimeout(function(){
		$(".Cabecalho img").addClass("animated fadeInDown");
	},400);
		$(".visita").addClass("animated fadeInDown");

});

/*esconde e mostrar slide*/
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}
/*Voltar ao topo*/

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
