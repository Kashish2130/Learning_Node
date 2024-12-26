require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productRouter = require('./routes/product-routes')
const userRouter = require('./routes/user')

const server = express();

console.log('env', process.env.DB_PASSWORD)

//db connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log('database connected');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//middlewares
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.listen(8080, () => { //server ends here
    console.log("server started")
});
