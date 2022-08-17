const { Product } = require("../models");
const middleware = require("../middleware");

const CreateProduct = async (req, res) => {
  try {
    const prod = await Product.create({ ...req.body });
    res.send(prod);
  } catch (error) {
    throw error;
  }
};
const OneProduct = async (req, res) => {
  try {
    const { pd } = req.params.pd;
    const one = await Product.findByPk(pd);
    res.status(200).json(one);
  } catch (error) {
    throw error;
  }
};
const AllProducts = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.status(200).json(items);
  } catch (error) {
    throw error;
  }
};
const UpdateProduct = async (req, res) => {
  try {
    const { pd } = req.params;
    let updatedProduct = await Product.update(req.body, {
      where: { id: pd },
      returning: true,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    throw error;
  }
};
const DeleteProduct = async (req, res) => {
  try {
    const { pd } = req.params;
    const deletedProduct = await Product.findByPd(pd);
    let pdt = Object.assign({}, deletedProduct);
    await Product.destroy({ where: { id: pd } });
    res.status(200).json({
      alert: `Deleted Product wiht an ID of ${pd}`,
      destroyed: pd,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateProduct,
  AllProducts,
  OneProduct,
  UpdateProduct,
  DeleteProduct,
};
