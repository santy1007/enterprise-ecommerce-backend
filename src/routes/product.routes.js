const express = require("express");

const router = express.Router();

const authMiddleware =
    require("../middleware/auth.middleware");

const validate =
    require("../middleware/validate.middleware");

const {
    createProductSchema
} =
    require("../validators/product.validator");

const {
    createProduct
} =
    require("../controllers/product.controller");

router.post("/", authMiddleware, validate(createProductSchema), createProduct);

module.exports = router;