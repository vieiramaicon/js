
(function(){
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.
  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.
  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false
  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
*/

  'use strict'

  function DOM(node) {
    this.element = document.querySelectorAll(node)

    static let isArray = function isArray(arr) {
      return Object.prototype.toString.call(arr) === '[object Array]'
    }

    static let isObject = function isObject() {}

    static let isFunction = function isFunction() {}

    static let isNumber = function isNumber() {}

    static let isString = function isString() {}

    static let isBoolean = function isBoolean() {}

    static let isNull = function isNull() {}
  }

  DOM.prototype.on = function on(event, callback) {
    Array.from(this.element).forEach( (el) => { el.addEventListener(event, callback, false) } )
  }

  DOM.prototype.off = function off(event, callback) {
    Array.from(this.element).forEach( (el) => { el.removeEventListener(event, callback, false) } ) 
  }

  DOM.prototype.get = function get() {
    return this.element
  }


  DOM.prototype.forEach = function forEach() {
    
  }

  DOM.prototype.map = function map() {
    
  }

  DOM.prototype.filter = function filter() {
    
  }

  DOM.prototype.reduce = function reduce() {
    
  }

  DOM.prototype.reduceRight = function reduceRight() {
    
  }

  DOM.prototype.every = function every() {
    
  }

  DOM.prototype.some = function some() {
    
  }

  console.log(DOM.isArray([1]))
})()