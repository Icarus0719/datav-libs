import { random } from 'sam-test-data'
import data from './plugin.js'
import pka from '../package.json'
const test = () => {
  return 3
}
console.log(random(100), data, pka)
export default test
