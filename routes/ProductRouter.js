const router = require('express').Router()
const controller = require('../controllers/ProductController')
const middleware = require('../middleware')

router.get('/', controller.OneProduct)
router.post('/', controller.CreateProduct) //Add protection
router.get('/', controller.AllProducts)
router.put('/:product_id', controller.UpdateProduct) //Add protection
router.delete('/:product_id', controller.DeleteProduct) //Add protection

module.exports = router
