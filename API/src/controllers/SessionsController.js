const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");
const { compare } = require("bcryptjs");

class SessionsController {
    async create(request, response){
        const { email, password } = request.body;

        const user = await knex("users").where({ email }).first();

        if(!user) {
            throw new AppError("E-mail e/ou senha incorreta.")
        }

        const passwordMatched = await compare(password, user.password)

        if(!passwordMatched) {
            throw new AppError("E-mail e/ou senha incorreta.")
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({ isAdmin: user.isAdmin }, secret, {
            subject: String(user.id),
            expiresIn
        })

        response.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true, 
            maxAge: 15 * 60 * 1000
        })

        return response.json({ user })
    }
}

module.exports = SessionsController;