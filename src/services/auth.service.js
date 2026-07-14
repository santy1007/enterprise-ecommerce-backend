const bcrypt = require("bcrypt");

const authRepository = require("../repositories/auth.repository");

const registerUser = async (userData) => {

    const existingUser =
        await authRepository.findUserByEmail(userData.email);

    if (existingUser) {
        throw new Error("Email already registered");
    }

    const hashedPassword =
        await bcrypt.hash(userData.password, 10);

    userData.password = hashedPassword;

    return await authRepository.createUser(userData);
};

module.exports = {
    registerUser
};