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

## understanding dependencies
![dependencies]('images/dependencies.png')

### Things to know about the dependencies and package.json file!
To check outdated dependencies/packages?
## npm outdated
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
