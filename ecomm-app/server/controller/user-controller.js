// const fs = require('fs');
// const path = require('path');
// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,"data.json"), 'utf-8'));
// const users = data.users;

const User = require("../models/user-model");


// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users); // 200: OK
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


// Get a single user by ID
exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (user) {
            res.status(200).json(user); // 200: OK
        } else {
            res.status(404).json({ message: "User not found" }); // 404: Not Found
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (updatedUser) {
            res.status(200).json(updatedUser); // 200: OK
        } else {
            res.status(404).json({ message: "User not found" }); // 404: Not Found
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


// Replace a user by ID
exports.replaceUser = async (req, res) => {
    try {
        const id = req.params.id;
        const replacedUser = await User.findOneAndReplace({ _id: id }, req.body, {
            new: true,
        });
        if (replacedUser) {
            res.status(200).json(replacedUser); // 200: OK
        } else {
            res.status(404).json({ message: "User not found" }); // 404: Not Found
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);
        if (deletedUser) {
            res.status(200).json({ message: "User deleted", deletedUser }); // 200: OK
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// export { createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct };