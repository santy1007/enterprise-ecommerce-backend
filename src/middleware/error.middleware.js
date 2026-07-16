const HTTP_STATUS =
    require("../constants/httpStatus");

const errorMiddleware =
    (err, req, res, next) => {

        const status =
            err.statusCode ||
            HTTP_STATUS.INTERNAL_SERVER_ERROR;

        return res.status(status).json({

            success: false,

            message: err.message ||

                "Something Went Wrong"

        });

    };

module.exports = errorMiddleware;