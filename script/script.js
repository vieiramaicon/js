
(function () {
  'use strict'

  function DOM(node) {
    this.element = document.querySelectorAll(node)

    static let isArray = function isArray(arr) {
      return true
    }

    static let isObject = function isObject() { }

    static let isFunction = function isFunction() { }

    static let isNumber = function isNumber() { }

    static let isString = function isString() { }

    static let isBoolean = function isBoolean() { }

    static let isNull = function isNull() { }
  }

  let $dom = new DOM()

  $dom.prototype.on = function on(event, callback) {
    Array.from(this.element).forEach((el) => { el.addEventListener(event, callback, false) })
  }

  $dom.prototype.off = function off(event, callback) {
    Array.from(this.element).forEach((el) => { el.removeEventListener(event, callback, false) })
  }

  $dom.prototype.get = function get() {
    return this.element
  }


  $dom.prototype.forEach = function forEach() {

  }

  $dom.prototype.map = function map() {

  }

  $dom.prototype.filter = function filter() {

  }

  $dom.prototype.reduce = function reduce() {

  }

  $dom.prototype.reduceRight = function reduceRight() {

  }

  $dom.prototype.every = function every() {

  }

  $dom.prototype.some = function some() {

  }

  console.log(DOM.isArray([1]))
})()