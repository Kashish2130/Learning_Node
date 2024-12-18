const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const morgan = require('morgan');
const server = express(); 

//When a client (e.g., a browser or Postman) sends data to your server in the form of JSON, the raw data arrives as a stream of bytes. The server doesn't automatically parse this data into a JavaScript object. The express.json() middleware does this parsing for you.
server.use(express.json()); 

server.use(morgan('default')) 
server.use(express.static('public'));

//API - endpoint - route
//Products (resource)
//API - BASE URL ->Example : google.com/api/v2

// C R U D operations
// C - create
// R - Read
// U - update
// D - delete

//CREATE
//create API - which is alsways made using POST method
//create POST/products
server.post('/products', (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
})

//READ
//read api - GET/products
server.get('/products', (req, res) => {
    res.json(products)
})
//read api - GET/products/:id
server.get('/products/:id', (req, res) => {
    const id = +req.params.id
    const product = products.find(p=>p.id ===id)
    res.json(product);
})

//UPDATE 
//update PUT /products/:id
//put overwrites the exisiting properties
server.put('/products/:id', (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id ===id)
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(200).json();
})

//update PATCH /products/:id
//patch just updates the few and keep the remaining as it is
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id ===id)
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(200).json();
}) 

//DELETE
//DELETE /products/:id 
server.delete('/products/:id', (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id ===id)
    products.splice(productIndex,1)
    res.status(200).json();
})





// server.post('/', (req, res) => {
//     res.json({ type: 'POST' })
// })
// server.put('/', (req, res) => {
//     res.json({ type: 'PUT' })
// })
// server.delete('/', (req, res) => {
//     res.json({ type: 'DELETE' })
// })
// server.patch('/', (req, res) => {
//     res.json({ type: 'PATCH' })
// })

// server.get('/demo', (req, res) => {
    
// })

server.listen(8080, () => { //server ends here
    console.log("server started")
});
