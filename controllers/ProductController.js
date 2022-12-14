
const { Product } = require("../models");
const Sequelize = require("sequelize");
const middleware = require("../middleware");

const { Product } = require('../models')
const middleware = require('../middleware')


const getSellerProducts = async (req, res) => {
  try {
  } catch (error) {

    throw error;
  }
};

    throw error
  }
}


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
    const { id } = req.params
    const one = await Product.findByPk(id)
    res.status(200).json(one)
  } catch (error) {
    throw error
  }

};

const ShowProductByName = async (req, res) => {
  try {
    console.log(req.body);
    let productName = req.body.query;
    console.log("This is your search query: ", productName);
    let results = await Product.findAll({
      where: { name: { [Sequelize.Op.like]: `%${productName}%` } },
    });
    console.log(results);
    res.status(200).json(results);
  } catch (error) {
    throw error;
  }
};

}

const AllProducts = async (req, res) => {
  try {
    const items = await Product.findAll()
    res.status(200).json(items)
  } catch (error) {
    throw error
  }
}
const UpdateProduct = async (req, res) => {
  try {
    const { pk } = req.params
    let updatedProduct = await Product.update(req.body, {
      where: { id: pk },
      returning: true
    })
    res.status(200).json(updatedProduct)
  } catch (error) {
    throw error
  }
}
const DeleteProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.pk)
    const productToDelete = await Product.findByPk(productId)
    await Product.destroy({
      where: { id: productId }
    })
    res.status(200).json(productToDelete)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateProduct,
  AllProducts,
  OneProduct,
  ShowProductByName,
  UpdateProduct,
  DeleteProduct
}
