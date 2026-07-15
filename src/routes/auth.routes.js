const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const authorize = require("../middleware/authorize.middleware");

const {
    register,
    login,
    profile
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);
router.get("/admin",
    authMiddleware,
    authorize("admin"),
    (req, res) => {
        res.json({ message: "Welcome Admin" });
    });

module.exports = router;