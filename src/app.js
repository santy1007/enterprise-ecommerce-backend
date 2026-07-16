const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const healthRoutes = require("./routes/health.routes");
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/health", healthRoutes);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Enterprise E-Commerce Backend Running"
    });
});



const errorMiddleware =
    require("./middleware/error.middleware");
app.use(errorMiddleware);

module.exports = app;