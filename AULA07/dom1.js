// li - filho - ul //arvore dom é parecida com isso
// o elemento maior na estrutura html é o window 
//document.getElementById
let elemento01 = window.document.getElementById('tituloPrin');

elemento01.style.color = 'red'
elemento01.innerHTML = 'jenny'

let elemento02 = window.document.getElementsByClassName('elementoParagrafo')

elemento02[0].style.color = 'red'

console.log(typeof elemento02);

/**
 * While: Executa o loop enquanto a condição for verdadeira
 * For: Executa o loop enquanto a condição for verdadeira, porém você pode instanciar as variaveis contadoras dentro da estrutura do loop.
 * get element by tag name
 */