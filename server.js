require("dotenv").config();

const app = require("./src/app");
const logger = require("./src/config/logger");
const connectDB = require("./src/config/database");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            logger.info(`🚀 Server Running on Port ${PORT}`);
        });
    } catch (error) {
        logger.error("Failed to start server");
    }
};

startServer();