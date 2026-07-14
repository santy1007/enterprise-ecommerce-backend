const {
    successResponse
} = require("../utils/response");

const healthCheck = (req, res) => {
    return successResponse(
        res,
        "Application is healthy",
        {
            uptime: process.uptime(),
            environment: process.env.NODE_ENV,
            timestamp: new Date()
        }
    );
};

module.exports = {
    healthCheck
};