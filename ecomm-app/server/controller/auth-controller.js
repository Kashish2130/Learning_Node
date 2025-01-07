const jwt = require('jsonwebtoken');
const User = require("../models/user-model");
const bcrypt = require('bcrypt');
// const fs = require('fs');
// const path = require('path');
// const privateKey = fs.readFileSync(path.resolve(__dirname, '../private.key'), 'utf-8');

//create a user
// SIGNUP FUCNTIONALITY
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        // var token = jwt.sign({ email:req.body.email }, 'shhhhh'); //shhh -> private key -> adding it to env variables
        var token = jwt.sign({ email: req.body.email }, process.env.SECRET);
        // var token = jwt.sign({ email:req.body.email },privateKey,{algorithm : 'RS256'});
        const hash = bcrypt.hashSync(req.body.password, 10);
        newUser.token = token;
        newUser.password = hash;

        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // 201: Created
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const doc = await User.findOne({ email: req.body.email });
        const isAuth = bcrypt.compareSync(req.body.password, doc.password);
        if (isAuth) {
            var token = jwt.sign({ email: req.body.email }, process.env.SECRET);
            res.json({token})
        }
        else {
            res.sendStatus(401);
        }
    }
    catch (err) {   
        res.status(401).json(err);
    }
};