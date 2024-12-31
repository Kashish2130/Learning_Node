require('dotenv').config()

const cors = require('cors')
const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const productRouter = require('./routes/product-routes')
const userRouter = require('./routes/user')
const path = require('path');
const server = express();

console.log('env', process.env.MONGO_URL)


//db connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//middlewares
server.use(cors());
server.use(express.json());
// server.use(morgan('default'))
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/api/products', productRouter.router);
server.use('/api/users', userRouter.router);
server.use("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,process.env.PUBLIC_DIR,"index.html"));
}); 

server.listen(process.env.PORT, () => { //server ends here
    console.log("server started")
});
