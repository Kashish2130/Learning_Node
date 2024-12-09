# Learning_Node

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
<img src="images/dependencies.png" alt="My Image" width="100" height="100">
![dependencies]('images/dependencies.png')

## Things to know about the dependencies and package.json file!
To check outdated dependencies/packages?
### npm outdated
For example, when you import project from somewhere else you have to check its versions, it has to be updated so that your code works well
So to check that you run above command and update if any necessary changes are required.

So check line  "express" : "4.18.0" in above picture
4 : major version
18 : minor version
0 : patch (which generally represent the fix of bugs which does not make any remarkable change if it is changed)
Now here there can be multiple ways of writing this :
### "^4.18.0" - allows updates of minor versions (means 18 to 19 or 20) on npm 'update command'
### "*4.18.0" - it allows all the updates even to the major versions
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
  nodemon index.js

  you can make a script such as:
  "start" : "nodemon index.js",
  and then run :
  npm start to start the server through nodemon.

  To close the server :
  ### ctrl^c


