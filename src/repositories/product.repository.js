const Product = require("../models/product.model");

const createProduct = async (productData) => {

    return await Product.create(productData);

};

module.exports = {
    createProduct
};