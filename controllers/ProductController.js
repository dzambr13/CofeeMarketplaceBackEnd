const { Product } = require('../models')
const middleware = require('../middleware')

const CreateProduct = async (req, res) => {
  try {
    const prod = await Product.create({ ...req.body })
    res.send(prod)
  } catch (error) {
    throw error
  }
}
const OneProduct = async (req, res) => {
  try {
    const one = await One.findOne()
    res.send(one)
  } catch (error) {
    throw error
  }
}
const AllProducts = async (req, res) => {
  try {
    const items = await Item.findAll()
    res.send(items)
  } catch (error) {
    throw error
  }
}
const UpdateProduct = async (req, res) => {
  try {
    const updateProd = await UpdateProd.create(
      { ...req.body },
      { where: { id: req.params.post_id }, returning: true }
    )
    res.send(updateProd)
  } catch (error) {
    throw error
  }
}
const DeleteProduct = async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.post } })
    res.send({
      msg: 'Product Deleted',
      payload: req.params.post_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateProduct,
  AllProducts,
  OneProduct,
  UpdateProduct,
  DeleteProduct
}
