# Learning_Node

## you can also revise from CoderDOST github notes!!

### How to add changes to your remote repo?

<img src="images/How to add changes to remote repo.png" alt="My Image" width="500" height="300">
<!-- ![Steps to Add changes to your remote repo](images\How to add changes to remote repo.png) -->

A module in Node.js is like a small, self-contained package of code that can be used to perform specific tasks. You can think of it as a building block for your application.
For example:
If you need to handle files, there's a fs module (File System).
To create a web server, there's an http module.

Modules help organize your code into reusable chunks. In Node.js, you can use built-in modules, install third-party ones, or create your own.

## In Node.js, CommonJS (CJS) and ES Modules (ESM) are two ways to structure and share code between files or packages. Here's the difference explained simply:

## CommonJS (CJS)

This is the older module system in Node.js, and it has been used since Node.js was first created.
Files are treated as modules, and you use the require function to import them.
You export functionality using module.exports or exports.
Example:

### math.js:

const add = (a, b) => a + b;
module.exports = { add }; // Export the `add` function

### app.js:

const math = require('./math'); // Import the `math` module
console.log(math.add(2, 3)); // Output: 5

## ES Modules (ESM)

This is the newer module system, introduced as part of the ECMAScript (JavaScript) standard.
It uses the import and export keywords.
Supported natively in modern browsers and Node.js (starting from version 12 with the .mjs extension or "type": "module" in package.json).
Example:

### math.js:

export const add = (a, b) => a + b; // Export the `add` function

### app.js:

import { add } from './math.js'; // Import the `add` function
console.log(add(2, 3)); // Output: 5

## Understanding Dependencies

<img src="images/dependencies.png" alt="My Image" width="400" height="200">
![dependencies]('images/dependencies.png')

## Things to know about the dependencies and package.json file!

To check outdated dependencies/packages?

### npm outdated

For example, when you import project from somewhere else you have to check its versions, it has to be updated so that your code works well
So to check that you run above command and update if any necessary changes are required.

So check line "express" : "4.18.0" in above picture
4 : major version
18 : minor version
0 : patch (which generally represent the fix of bugs which does not make any remarkable change if it is changed)
Now here there can be multiple ways of writing this :

### "^4.18.0" - allows updates of minor versions (means 18 to 19 or 20) on npm 'update command'

### "\*4.18.0" - it allows all the updates even to the major versions

### "~4.18.0" - this only allows updates of the last digit which is '0' more strict version

## Scripts in package.json

"scripts": {
"start": "node index.js",
"dev" : "nodemon index.js",
"test": "echo \"Error: no test specified\" && exit 1"
},

HERE, if i want to run index.js file
I will write command :

### node index.js

But after writing start in script what happens is "node index.js" is substituted with start so we can directly write below command to run the project or the index.js file

### npm start

## Dependencies

#### Note : Now dependencies contains all the packages that are installed from the internet and all the dependencies related to that package is there in the node modules so if we delete the node modules the project would be safe but it wont run since the dependencies that package requires to run is in the node modules.

Node pe jab ham normal javascript chalate hai to wo chalke bandh ho jati hai but jam ham server se chaleyenge wo kabhi bandh nai hoga wo chlate rahega so
What happens in node is :
whatever changes made after starting server are not reflected back.
And so we have dev-dependency called as Nodemon with the help of which what happens is after starting the server whatever changes you make are reflected in the console or your application.

Dev-Dependency :
This is required only for development enviorement but not to code.
This is not installed globally on your system like node and npm and so you cannot directly run it as :
"nodemon index.js"

you can make a script such as:
"start" : "nodemon index.js",
and then run :
"npm start" to start the server through nodemon.

To close the server :

#### ctrl^c

## Functions of Backend(NODE)

1. static hosting
2. dynamic hosting / server side rendering
3. api generation


## Express

It is a defacto standard which meaans it is not default but still by default people use Express only with Node.js.
It is minimalist framework.
It is used for making server using Node

## creating Apis using express 
APIS are also called as endpoints.

## Creating middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

#### 1.Application-level middleware
//application middleware : (which is at the top level)
server.use(express.json()); //this is also a middleware which reads the body as json data//also called as bodyParser
//When a client (e.g., a browser or Postman) sends data to your server in the form of JSON, the raw data arrives as a stream of bytes. The server doesn't automatically parse this data into a JavaScript object. The express.json() middleware does this parsing for you.


#### 2. Router-level middleware
const auth = (req, res, next) => { //auth is a route middle ware which can be put anywhere
    // console.log(req.query)
    if (req.body.password == '123') {
        next()
    }
    else {
        res.sendStatus(401);
    }
}

// server.use(auth)

//WEB API - Endpoint - Route
server.get('/', auth, (req, res) => {
    res.json({ type: 'GET' })
})

#### 3.Error-handling middleware
#### 4.Built-in middleware
### Built-In Middleware:
Express has the following built-in middleware functions:
express.static serves static assets such as HTML files, images, and so on.
express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+

#### 5.Third-party middleware
These can be downloaded
command : npm i morgan
const morgan = require('morgan');
server.use(morgan('default')) ;
//this is also called as logger which gives details about the server.

### how many ways we can bring data from the request ?
1. req.query (to get the data from query)
2. req.body (to get data from the body)
3. req.params (to get data from the parameters in the url)

## REST APIS
<img src="images/REST.png" alt="My Image" width="500" height="400">

#### Helps in doing crud operations
// C R U D operations  
// C - create  
// R - Read
// U - update
// D - delete

```javascript
#### //CREATE
//create API - which is alsways made using POST method
//create POST/products
server.post('/products', (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
})

#### //READ
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

#### //UPDATE 
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

#### //DELETE
//DELETE /products/:id 
server.delete('/products/:id', (req, res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id ===id)
    products.splice(productIndex,1)
    res.status(200).json();
})
```


## Model-View-Controller
1. Models : database or data.
2. View : means data vsible in frontend.
3. Controller : communication between models and views.

#### Now some folder stucture has been changed and we have added 2 folders in our main folder (REST_APIS)
<img src="images/New folder(REST_APIS).png" alt="My Image" width="200" height="400">

1. Controller
<img src="images/Controller.png" alt="My Image" width="500" height="400">

2. Routes
<img src="images/Routes.png" alt="My Image" width="500" height="400">
