(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['sg-datav'] = factory());
}(this, (function () { 'use strict';

  function random(base) {
    if (base && base % 1 === 0) {
      return Math.floor(Math.random() * base);
    } else {
      return 0;
    }
  }

  var a = 1;
  var plugin = a;

  var name = "sg-datav-libs";
  var version = "1.0.0";
  var description = "datav components library";
  var main = "index.js";
  var scripts = {
  	dev: "rollup -wc rollup.config.dev.js",
  	build: "rollup -c rollup.config.prod.js"
  };
  var keywords = [
  ];
  var author = "sunguo <582447281@qq.com>";
  var license = "ISC";
  var devDependencies = {
  	"@babel/core": "^7.14.6",
  	"@babel/preset-env": "^7.14.7",
  	"@rollup/plugin-babel": "^5.3.0",
  	"@rollup/plugin-commonjs": "^19.0.0",
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^13.0.0",
  	rollup: "^2.40.0",
  	"rollup-plugin-terser": "^7.0.2",
  	"rollup-plugin-vue": "^6.0.0",
  	"sam-test-data": "^0.0.5"
  };
  var pka = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	scripts: scripts,
  	keywords: keywords,
  	author: author,
  	license: license,
  	devDependencies: devDependencies
  };

  var test = function test() {
    return 3;
  };

  console.log(random(100), plugin, pka);

  return test;

})));
