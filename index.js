const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
// const morgan = require('morgan');
const server = express(); //server starts here


//MIDDLEWARES

//application middleware : (which is at the top level)
server.use(express.json()); //this is also a middleware which reads the body as json data//also called as bodyParser

// server.use(express.urlencoded());//this is required when you are sending data through forms

// server.use(morgan('default')) 
//this is also called as logger which gives details about the server 
// //this is a downloaded middleware

server.use(express.static('public'));//this is the middleware given my express
//this is static middleware which is use to do static hosting
//it gives direct access to all the files in public folder
//for ex: http://localhost:8080/data.json(direct entire data.json file will be visible on browser)


// server.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))//this is called logger/server log//this is to find out the whois sending the req?how mnay times?etc etc info about the req
//     next()
// })

const auth = (req, res, next) => { //auth is a route middle ware which can be put anywhere
    // console.log(req.query)
    // if (req.body.password == '123') {
    //     next()
    // }
    // else {
    //     res.sendStatus(401);
    // }
    next()
}

// server.use(auth)

//WEB API - Endpoint - Route
server.get('/product/:id', auth, (req, res) => {
    console.log(req.params)
    res.json({ type: 'GET' })
})
server.post('/', auth, (req, res) => {
    res.json({ type: 'POST' })
})
server.put('/', (req, res) => {
    res.json({ type: 'PUT' })
})
server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' })
})
server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' })
})

server.get('/demo', (req, res) => {
    // res.sendStatus(404)
    // res.json(products)
    // res.send('<h1>hello</h1>');
    // res.sendFile('C:/Users/kashish jain/Desktop/Web Development/Node-app/index.html')
})

server.listen(8080, () => { //server ends here
    console.log("server started")
});






//=======================================================================================================================================
//LEARN DYNAMIC RENDERING
// const server = http.createServer((req, res) => {

//     console.log(req.url,req.method);

//     if (req.url.startsWith('/product')) {
//         const id = req.url.split('/')[2]
//         const product = products.find(p=>p.id == (+id))
//         console.log(product)
//         res.setHeader('Content-Type', 'text/html');
//         let modifiedIndex = index.replace('**title**', product.title)
//         .replace('**url**', product.thumbnail)
//         .replace('**price**', product.price)
//         .replace('**rating**', product.rating);
//         res.end(modifiedIndex);
//         return;
//     }

//     // case '/product':
//     //

//     switch (req.url) {
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.end(index);
//             break;
//         case '/api':
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(data));
//             break;
//         default:
//             res.writeHead(404, 'not foundd');
//             res.end();
//     }
//     console.log('server started')
// })

// server.listen(8080)

// =========================================================================================================================
// UNDERSTANDING THE BASICS

// //const lib = require('./lib.js') //commonjs syntax
// import {sum,diff} from './lib.js';

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