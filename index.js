//const lib = require('./lib.js')
import {sum,diff} from './lib.js';
import fs from 'fs';

const txt = fs.readFileSync('demo.txt','utf-8')
console.log(txt)

console.log(sum(2,3),diff(9,3))