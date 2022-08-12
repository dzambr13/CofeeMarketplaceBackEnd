const router = require('express').Router()
const controller = require('../controllers/ProductController')
const middleware = require('../middleware')

router.get('/', controller.OneProduct)
router.post('/', controller.CreateProduct)
router.get('/', controller.AllProducts)
router.put('/product/:id', controller.UpdateProduct)
router.delete('/:product/:id', controller.DeleteProduct)

module.exports = router
