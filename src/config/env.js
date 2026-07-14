require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3000,

    NODE_ENV: process.env.NODE_ENV,

    MONGO_URI: process.env.MONGO_URI,

    JWT_SECRET: process.env.JWT_SECRET,

    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,

    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,

    REFRESH_TOKEN_EXPIRES_IN:
        process.env.REFRESH_TOKEN_EXPIRES_IN
};