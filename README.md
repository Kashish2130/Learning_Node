# Learning_Node

[Link to Coder Dost Github Notes](https://github.com/coderdost/full-stack-dev-2023)

[Link to Jaymin's Web Dev Doc](https://docs.google.com/document/d/19RgZH-rZo4eyp3i7zxdl2LDyGTVcEcRl1Ji8EhunlYM/edit?tab=t.lqzioqs2yywq)

## NODE JS

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
// C R U D operations  <br>
// C - create  <br>
// R - Read <br>
// U - update <br>
// D - delete <br>

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
2. View : means data vIsible in frontend.
3. Controller : communication between models and views. (Where all APIS are there.)

#### Now some folder stucture has been changed and we have added 2 folders in our main folder (REST_APIS)
<img src="images/New folder(REST_APIS).png" alt="My Image" width="200" height="400">

1. Controller
<img src="images/Controller.png" alt="My Image" width="500" height="400">

2. Routes
<img src="images/Routes.png" alt="My Image" width="500" height="400">

## MONGO DB (NO SQL DATABASE)
**SQL VS NO SQL COMPARISON**<br>
<img src="images/NO SQL 1.png" alt="My Image" width="600" height="400">
<img src="images/NO SQL 2.png" alt="My Image" width="600" height="400">
<img src="images/NO SQL 3.png" alt="My Image" width="600" height="400">
<img src="images/NO SQL 4.png" alt="My Image" width="600" height="400">
<img src="images/SQL Structure.png" alt="My Image" width="600" height="400">

### MONGO SHELL
**Type this in cmd or terminal**
1. type mongosh
2. show dbs (list of db will be given)
3. use nameofanydb
4. show collection (this will show collections inside of that db)

**Function that can be used :** <br>
*CREATE* <br>
1. Insert One Document <br>
Creates the "products" collection (if it doesn't exist) and inserts a single document with a unique _id.<br>
```db.products.insertOne({...})```<br>

2. Insert Multiple Documents <br>
Creates the "products" collection (if it doesn't exist) and inserts multiple documents at once.<br>
```db.products.insertMany([...])```<br>

*READ* <br>
3. Find All Documents<br>
Lists all documents in the "products" collection.<br>
```db.products.find()```<br>

4. Find a Single Document<br>
Returns the first document matching the specified filter criteria<br>
```db.products.findOne(filter)```<br>

5. Filter Operators <br>
$eq: Equals to (default).<br>
$lt: Less than.<br>
$lte: Less than or equal to.<br>
$gt: Greater than.<br>
$gte: Greater than or equal to.<br>
$and (default for multiple criteria) and $or: Logical operators for combining conditions.<br>

6. Cursor Functions<br>
sort({...}): Sorts results (1 for ascending, -1 for descending).<br>
```db.products.find().sort({"price":1})```<br>
limit(n): Returns only the first n documents.<br>
countDocuments(filter): Counts the total documents matching the filter.<br>
```db.products.countDocuments()```<br>

7. Projection in Find<br>
: Specifies fields to include/exclude in the result<br>
```db.collection.find(query, projection)```<br>

*UPDATE*<br>
8. updateOne<br>
Updates the first document matching the filter.<br>
```db.collection.updateOne(filter, update, options)```<br>
```db.products.find({'price':{$gte : 800}},{'title':1,'_id':0})```<br>

9. updateMany<br>
Updates all documents matching the filter.<br>
```db.products.updateOne({ ‘id’: { $lt: 1 } }, { $set: { ‘price’ : 900 } })```<br>

10. replaceOne<br>
Replaces the entire document matching the filter.<br>
```db.products.replaceOne( { title: "Blue Shirt" }, { id: 3, title: "Green Trousers", thumbnail: "https://via.placeholder.com/ 250", price: 1000, rating: 4.2 })```<br>

**Operators for Updates:**<br>
$set: Updates/sets specific fields.<br>
$unset: Removes specific fields.<br>
$inc: Increments numerical fields.<br>
$mul: Multiplies numerical fields.<br>
$rename: Renames a field.<br>

11. upsert Option <br>
If no document matches, a new one is inserted (upsert: true).<br>
```db.products.updateOne( { title: "Green Jacket" }, {  $set: { price: 1500, rating: 4.3, thumbnail: "https://via.placeholder.com/250" } } , { upsert: true } )```<br>

*DELETE* <br>
12. deleteOne<br>
Deletes the first document matching the filter.<br>
```db.collection.deleteOne(filter, options)```<br>

13. deleteMany<br>
Deletes all documents matching the filter.<br>
```db.collection.deleteMany(filter, options)```<br>

### Mongo DB structure <br>
<img src="images/mongo db structure.png" alt="My Image" width="500" height="300"> <br>

-> **Mongo DB Atlas can be manipulated using Mongo DB shell or Mongo DB Compass(which is saved on local system)** <br>

If we use Mongo db shell then first we need to run the connection string in cmd and enter password to build the connection. <br>

If we use Mnongo db Compass then :<br>
1. open compass
2. add new connection
3. enter connection string in url
4. save and connect
5. and then we can see the interface and do the required fucntioning.

*ENVIORNMENT VARIABLES*<br>

How to store db user’s password in your system ?<br>
**Type this is terminal :**<br>
→ node<br>
→ process.env (to check environment Variables)<br>
→ To add password temporarily:- process.env.DB_PASS = 'Kashish_2130'<br>
→ To see that it is stored again run "process.env"<br>
→ But to add permanently :<br>
 → type npm install dotenv(it is a library)<br>
 → make .env file ( . is used to indicate that the file is hidden)<br>
 → now write the below line in the top of index.js file:<br>
    → require('dotenv').config()<br>
 → now store pass in .env file <br>
→ Also add .env in .gitignore so that it doesn't get uploaded on git<br>

## MOONGOSE

#### What is mongoose ? <br>
→ **Mongoose** is a popular Node.js library used to work with MongoDB, a NoSQL database. It provides a way to interact with the database using JavaScript objects. With Mongoose, you define the structure of your data using schemas and work with that data as if it were JavaScript objects. This makes it easier to handle database operations like creating, reading, updating, or deleting records.<br>
In simple terms, Mongoose acts as a bridge between your application and the database. It allows you to manage the database by managing JavaScript objects. Instead of directly writing database queries, you modify objects, and Mongoose takes care of syncing these changes with the database. This makes database management more intuitive and organized, especially in larger applications.<br>
With Mongoose, you work with JavaScript objects (models) instead of raw JSON documents, making your code more readable and maintainable.<br>
```npm install mongoose``` in cmd
```const mongoose = require('mongoose');```

So first understand what is schema? <br>
→ **Schema** is kind of a **configuration**(it decides what fields will be there and what will be their types) for a particular **collection**(table).<br>

**So to break it down** <br>
First you need to establish connection with the database and for that you have to write the following code:
```main().catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://**127.0.0.1:27017**/ecommerce");  
    //here the bold part is the the address of local host itself
    //call also write this connection string as "mongodb://localhost:27017/ecommerce"
    console.log('database connected');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}```

1. First, you create a schema. Think of it as a template or a plan that describes what fields your data should have and their types.<br>
```const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});```

2. A model is created using this schema. The model is what actually allows you to read, write, update, and delete data in the MongoDB database. It represents a specific collection in the database.<br>
```const User = mongoose.model('User', userSchema);```

3. You can use the model to perform operations such as : <br>
**CRUD Operations** <br>











