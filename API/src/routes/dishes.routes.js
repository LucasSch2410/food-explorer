const { Router } = require('express');
const multer = require("multer");
const uploadConfig = require("../configs/upload")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const DishesController = require("../controllers/DishesController");
const verifyUserAuthorization = require('../middlewares/verifyUserAuthorization');
const dishesController = new DishesController();


dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.get('/', dishesController.getAll);
dishesRoutes.get('/:id', dishesController.getOne);
dishesRoutes.post('/', verifyUserAuthorization(1), upload.single("image"), dishesController.create);
dishesRoutes.patch('/:id', verifyUserAuthorization(1), upload.single("image"), dishesController.update)
dishesRoutes.delete('/:id', verifyUserAuthorization(1), dishesController.delete)

module.exports = dishesRoutes;