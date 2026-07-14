const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../utils/jwt");

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

const loginUser = async (email, password) => {

    const user = await authRepository.findUserByEmail(email);

    if (!user) {

        throw new Error("Invalid email or password");

    }

    const isPasswordValid = await bcrypt.compare(

        password,

        user.password

    );

    if (!isPasswordValid) {

        throw new Error("Invalid email or password");

    }

    const token = generateAccessToken(user);

    const userResponse = user.toObject();

    delete userResponse.password;

    return {

        user: userResponse,

        token

    };

};

module.exports = {
    registerUser,
    loginUser
};