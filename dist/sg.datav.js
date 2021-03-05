(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['sg-datav'] = factory());
}(this, (function () { 'use strict';

	console.log("hello sunguo");
	var index = {};

	return index;

})));
