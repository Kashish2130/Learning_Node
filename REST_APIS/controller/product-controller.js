const fs = require("fs");
// const index = fs.readFileSync('index.html', 'utf-8');
const dataParent = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const data = dataParent.data;
const Product = require("../models/product-model");

// exports.createProduct = ((req, res) => {
//     const product = new Product(req.body);
//     product.save((err, doc) => {
//         console.log({ err, doc });
//         res.json(doc);
//     })
// })

//model.prototype.save() no longer accepts a callback   

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


exports.replaceProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const replacedProduct = await Product.findOneAndReplace(
            { _id: id },
            req.body,
            { new: true }
        );
        if (replacedProduct) {
            res.status(200).json(replacedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (deletedProduct) {
            res.status(200).json({ message: "Product deleted", deletedProduct });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};


// exports.getAllProducts = (req, res) => {
//     res.json(data);
// };

// exports.getProduct = (req, res) => {
//     const id = +req.params.id;
//     const product = data.find((p) => p.id === id);
//     res.json(product);
// };

// exports.replaceProduct = (req, res) => {
//     const id = +req.params.id; // + is or converting the string to number
//     const productIndex = data.findIndex((p) => p.id === id);
//     data.splice(productIndex, 1, { ...req.body, id: id });
//     res.status(200).json();
// };

// exports.updateProduct = (req, res) => {
//     const id = +req.params.id;
//     const productIndex = data.findIndex((p) => p.id === id);
//     const product = data[productIndex];
//     data.splice(productIndex, 1, { ...product, ...req.body });
//     res.status(200).json();
// };

// exports.deleteProduct = (req, res) => {
//     const id = +req.params.id;
//     const productIndex = data.findIndex((p) => p.id === id);
//     data.splice(productIndex, 1);
//     res.status(200).json();
// };

// export { createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct };
