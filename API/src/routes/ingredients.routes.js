const { Router } = require('express');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const IngredientsController = require("../controllers/ingredientsController");
const ingredientsController = new IngredientsController();

ingredientsRoutes = Router();

ingredientsRoutes.use(ensureAuthenticated)

ingredientsRoutes.get('/:id', ingredientsController.getAll);

module.exports = ingredientsRoutes;