const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true
        },

        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true
        },

        price: {
            type: Number,
            required: true,
            min: [0, "Price cannot be negative"]
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },

        brand: {
            type: String,
            required: true,
            trim: true
        },

        stock: {
            type: Number,
            default: 0,
            min: [0, "Stock cannot be negative"]
        },

        images: [
            {
                type: String
            }
        ],

        ratings: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

productSchema.index({
    name: 1
});

module.exports = mongoose.model(
    "Product",
    productSchema
);