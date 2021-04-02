const path = require("path")
const resolve = require("rollup-plugin-node-resolve")
const commonjs = require("rollup-plugin-commonjs")
const vue = require("rollup-plugin-vue")
const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/sg.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/sg.datav.es.js')
module.exports = {
  input: inputPath,
  output: [{
    file: outputUmdPath,
    format: "umd",
    name: "sg-datav"
  }, {
    file: outputEsPath,
    format: "es",
  }],
  plugins: [
    resolve(),
    commonjs(),
    vue()
  ]
}