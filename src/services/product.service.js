const productRepository = require("../repositories/product.repository");

const createProduct = async (productData) => {

    return await productRepository.createProduct(productData);

};

module.exports = {
    createProduct
};