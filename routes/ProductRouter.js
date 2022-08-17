const router = require('express').Router()
const controller = require('../controllers/ProductController')
const middleware = require('../middleware')

router.get('/', controller.OneProduct)
router.post(
<<<<<<< HEAD
  '/product',
=======
  '/create',
>>>>>>> 4c54536d867f483e93c97f36ecda7b302189b96d
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateProduct
) //Add protection
router.get('/', controller.AllProducts)
router.put(
  '/update/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProduct
) //Add protection
router.delete(
  '/delete/:pd',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteProduct
) //Add protection

module.exports = router
