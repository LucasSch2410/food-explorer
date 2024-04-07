const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class DishesController {
    async create(request, response) {
        const { name, category, price, description, ingredients } = request.body;
        const diskStorage = new DiskStorage();

        let filename = request.file.filename;
        filename = await diskStorage.saveFile(filename);    

        const [dish_id] = await knex("dishes").insert({
            name,
            category,
            price,
            description,
            photo: filename
        })

        const ingredientsInsert = ingredients.map(ingredient => {
            return {
                dish_id,
                name: ingredient
            }
        })

        await knex("ingredients").insert(ingredientsInsert);

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, category, price, description, ingredients } = request.body;
        const diskStorage = new DiskStorage();
        const dish_id = request.params.id;
        let filename;

        if (!request.file) {
            const dish = await knex("dishes").where({ id: dish_id }).first();
            filename = dish.photo;
        } else {
            filename = request.file.filename;
            filename = await diskStorage.saveFile(filename);    
        }
    
        await knex("dishes")
            .where({ id: dish_id })
            .update({
                name,
                category,
                price,
                description,
                photo: filename
            });
    
        await knex("ingredients").where({ dish_id }).del();
    
        const ingredientsInsert = ingredients.map(ingredient => {
            return {
                dish_id,
                name: ingredient
            };
        });
    
        await knex("ingredients").insert(ingredientsInsert);
    
        return response.status(201).json();
    }
    
    async delete(request, response) {
        const dish_id = request.params.id;

        await knex("dishes").where({ id: dish_id }).del();

        return response.status(200).json()
    }

    async getAll(request, response) {
        const all = await knex("dishes");

        return response.status(200).json(all);
    }

    async getOne(request, response) {
        const dish_id = request.params.id

        const dish = await knex("dishes").where({ id: dish_id }).first();

        return response.status(200).json(dish);
    }
}

module.exports = DishesController