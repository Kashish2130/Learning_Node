require('dotenv').config()

const cors = require('cors')
const express = require('express');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const server = express();
const jwt = require('jsonwebtoken');
const productRouter = require('./routes/product-routes')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth-routes');
// const fs = require('fs');
// const publicKey  = fs.readFileSync(path.resolve(__dirname,'./public.key'),'utf-8');

console.log('env', process.env.MONGO_URL)

//db connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//middlewares
const auth = (req, res, next) => {

    try {
        const token = req.get('Authorization').split('Bearer ')[1];
        console.log(token);
        var decoded = jwt.verify(token,process.env.SECRET);
        // var decoded = jwt.verify(token,publicKey);
        if (decoded.email) {
            next()
        }
        else {
            res.sendStatus(401)
        }
    } catch (err) {
        res.sendStatus(401)
    }
    console.log(decoded);
};

server.use(cors());
server.use(express.json());
// server.use(morgan('default'))
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use('/auth', authRouter.router)
server.use('/api/products', auth, productRouter.router);
server.use('/api/users', auth, userRouter.router);
server.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, process.env.PUBLIC_DIR, "index.html"));
});

server.listen(process.env.PORT, () => { //server ends here
    console.log("server started")
});
