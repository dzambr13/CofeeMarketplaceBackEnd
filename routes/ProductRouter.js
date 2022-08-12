const router = require('express').Router()
const controller = require('../controllers/ProductController')
const middleware = require('../middleware')

router.get('/', controller.OneProduct)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateProduct
) //Add protection
router.get('/', controller.AllProducts)
router.put(
  '/product/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProduct
) //Add protection
router.delete(
  '/product/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteProduct
) //Add protection

module.exports = router
