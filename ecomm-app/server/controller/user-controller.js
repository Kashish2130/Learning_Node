const fs = require('fs');
const path = require('path');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,"data.json"), 'utf-8'));
const users = data.users;

exports.createUser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
}

exports.getAllUsers = (req, res) => {
    res.json(users);
}

exports.getUser = (req, res) => {
    const id = +req.params.id
    const user = users.find(p => p.id === id)
    res.json(user);
}

exports.replaceUser = (req, res) => {
    const id = +req.params.id // + is or converting the string to number
    const userIndex = users.findIndex(p => p.id === id)
    users.splice(userIndex, 1, { ...req.body, id: id })
    res.status(200).json();
}

exports.updateUser = (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex];
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.status(200).json();
}

exports.deleteUser = (req, res) => {
    const id = +req.params.id
    const userIndex = users.findIndex(p => p.id === id)
    users.splice(userIndex, 1)
    res.status(200).json(); 
}

// export { createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct };