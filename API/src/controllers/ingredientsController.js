const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class ingredientsController {
    async getAll(request, response){
        const dish_id = request.params.id

        const ingredients = await knex("ingredients").where({ dish_id });

        return response.status(200).json(ingredients);
    }
}

module.exports = ingredientsController