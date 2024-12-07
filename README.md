# Learning_Node

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
javascript
const add = (a, b) => a + b;
module.exports = { add }; // Export the `add` function

### app.js:
javascript
const math = require('./math'); // Import the `math` module
console.log(math.add(2, 3)); // Output: 5

## ES Modules (ESM) 
This is the newer module system, introduced as part of the ECMAScript (JavaScript) standard.
It uses the import and export keywords.
Supported natively in modern browsers and Node.js (starting from version 12 with the .mjs extension or "type": "module" in package.json).
Example:
### math.js:
javascript
Copy code
export const add = (a, b) => a + b; // Export the `add` function

### app.js:
javascript
Copy code
import { add } from './math.js'; // Import the `add` function
console.log(add(2, 3)); // Output: 5