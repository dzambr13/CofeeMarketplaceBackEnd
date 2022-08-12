const router = require('express').Router()
const controller = require('../controllers/ProductController')
const middleware = require('../middleware')

router.get('/', controller.OneProduct)
router.get('/', controller.CreateProduct)
router.get('/', controller.AllProducts)
router.get('/:product_id', controller.UpdateProduct)
router.get('/:product_id', controller.DeleteProduct)

module.exports = router
