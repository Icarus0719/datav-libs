const path = require('path')
//将第三方插件与源码进行混合打包
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
// const vue = require('rollup-plugin-vue')
const inputPath = path.resolve(__dirname, './src/index.js')
// 输出文件
const outputUmdPath = path.resolve(__dirname, './dist/sg.datav.min.js')
const outputEsPath = path.resolve(__dirname, './dist/sg.datav.es.min.js')
module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd', // 输出的模块协议
      name: 'sg-datav', // 必填
    },
    {
      file: outputEsPath,
      format: 'es',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    json(),
    terser(),
  ],
  external: ['vue'],
}
