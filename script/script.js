
(function(){
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