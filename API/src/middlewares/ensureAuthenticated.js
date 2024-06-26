const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next){
    const authHeader = request.headers

    if(!authHeader.cookie){
        throw new AppError("JWT Token invalido", 401);
    }

    const [, token] = authHeader.cookie.split("token=");

    try{
        const { isAdmin, sub: user_id } = verify(token, authConfig.jwt.secret);

        request.user = {
            id: Number(user_id),
            isAdmin
        }

        return next();
    } catch {
        throw new AppError("JWT Token invalido", 401);
    }
}

module.exports = ensureAuthenticated;