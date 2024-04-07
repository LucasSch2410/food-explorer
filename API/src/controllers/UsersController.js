const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const checkUsersExists = await knex("users").where({ email }).first();

        if (checkUsersExists) {
            throw new AppError("Este e-mail já está em uso.");
        }

        const hashedPassword = await hash(password, 8)

        await knex("users").insert({
            name,
            email,
            password: hashedPassword
        })

        return response.status(201).json();
    }
}

module.exports = UsersController