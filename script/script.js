
// O método `get` deve retornar os elementos.

function DOM(node) {
  'use strict'
  
  this.element = document.querySelectorAll(node)
}

Dom.prototype.on = function on(event, callback) {
  Array.from(this.element).forEach( (el) => { el.addEventListener(event, callback, false) } )
}

Dom.prototype.off = function off(event, callback) {
  Array.from(this.element).forEach( (el) => { el.removeEventListener(event, callback, false) } ) 
}

Dom.prototype.get = function get() {
  return this.element
}


var $a = new DOM('[data-js="link"]');

function handleClick(e) {
  e.preventDefault();
  console.log('clicou')
}

$a.on('click', handleClick);

console.log('Elementos selecionados:', $a.get());
console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);