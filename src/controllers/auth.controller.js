const { registerSchema } =
    require("../validators/auth.validator");

const authService =
    require("../services/auth.service");

const {
    successResponse,
    errorResponse
} = require("../utils/response");

const register = async (req, res) => {

    try {

        const { error } =
            registerSchema.validate(req.body);

        if (error) {

            return errorResponse(
                res,
                error.details[0].message,
                [],
                400
            );
        }

        const user =
            await authService.registerUser(req.body);

        return successResponse(
            res,
            "User Registered Successfully",
            user,
            201
        );

    } catch (err) {

        return errorResponse(
            res,
            err.message,
            [],
            400
        );
    }

};

module.exports = {
    register
};