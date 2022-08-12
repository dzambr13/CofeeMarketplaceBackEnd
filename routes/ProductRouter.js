const router = require('express').Router()
const controller = require('../controllers/ProductController')
const middleware = require('../middleware')

<<<<<<< HEAD
=======

>>>>>>> f8c6a67c63a47fb0b435ba1802fd6c6dc435e722
router.get('/', controller.OneProduct)
router.post('/', controller.CreateProduct) //Add protection
router.get('/', controller.AllProducts)
<<<<<<< HEAD
router.put('/:product_id', controller.UpdateProduct) //Add protection
router.delete('/:product_id', controller.DeleteProduct) //Add protection
=======
router.put('/product/:id', controller.UpdateProduct)
router.delete('/:product/:id', controller.DeleteProduct)

router.get("/", controller.OneProduct);
router.get("/", controller.CreateProduct); //Add protection
router.get("/", controller.AllProducts);
router.get("/:product_id", controller.UpdateProduct); //Add protection
router.get("/:product_id", controller.DeleteProduct); //Add protection

>>>>>>> f8c6a67c63a47fb0b435ba1802fd6c6dc435e722

module.exports = router
