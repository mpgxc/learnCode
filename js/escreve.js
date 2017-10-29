
/*efeito escrever*/
var div = document.getElementById('log');
var texto = '  ./O_que_e_a_linguagem_C_?.docx';

function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
    }, 100);
}
escrever(texto, div);
