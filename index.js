//const lib = require('./lib.js') //commonjs syntax
import {sum,diff} from './lib.js';
import express from 'express';

console.log('hello world')

const server = express();
server.listen(8080);
// =========================================================================================================================
// UNDERSTANDING THE BASICS

// import fs from 'fs';

// // const txt = fs.readFileSync('demo.txt','utf-8') //if we would use this fucntion then it would more time than readfile to execute
// fs.readFile('demo.txt','utf-8',(err, txt)=>{
//     console.log(txt)
// });
// const t1 = performance.now(); //count time it takes for the execution of above readfile function

// console.log(sum(2,3),diff(9,3))
// const t2 = performance.now() // counts time it takes for the execution of console log
// console.log(t2-t1); // here it counts diff between the above two
//===============================================================================================