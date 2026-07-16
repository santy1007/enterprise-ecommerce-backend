const asyncHandler = require("../utils/asyncHandler");
const productService = require("../services/product.service");

const createProduct = asyncHandler(async (req, res) => {

    const product = await productService.createProduct(req.body);

    return res.status(201).json({
        success: true,
        message: "Product Created Successfully",
        data: product
    });

});

module.exports = {
    createProduct
};