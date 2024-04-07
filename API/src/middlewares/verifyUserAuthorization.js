const AppError = require("../utils/AppError")


function verifyUserAuthorization(roleToVerify){
    return (request, response, next) => {
        const { isAdmin } = request.user;

        if (isAdmin !== roleToVerify) {
            throw new AppError("Unauthorized", 401);
        }

        return next();
    }
}

module.exports = verifyUserAuthorization;

