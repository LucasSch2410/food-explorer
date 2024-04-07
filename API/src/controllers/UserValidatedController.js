const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UserValidatedController {
    async index(request, response) {
        const { user } = request;

        const checkUsersExists = await knex("users").where({ id: user.id });

        if (checkUsersExists.length === 0) {
            throw new AppError("Unauthorized", 401);
        }

        return response.status(200).json();
    }
}

module.exports = UserValidatedController;