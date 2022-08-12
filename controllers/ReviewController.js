const { Review } = require('../models')
const middleware = require('../middleware')

// create review
const CreateReview = async (req, res) => {
  try {
    const review = await Review.create({ ...req.body })
    res.send(review)
  } catch (error) {
    throw error
  }
}
// get one review
const GetOneReview = async (req, res) => {
  try {
    const { or } = req.params
    const foundReview = await Review.findByOr(or)
    res.status(200).json(foundReview)
  } catch (error) {
    throw error
  }
}
// delete review
const DeleteReview = async (req, res) => {
  try {
    const { or } = req.params
    const deletedReview = await Review.findByOr(or)
    let rvw = Object.assign({}, deletedReview)
    await Review.destory({ where: { id: or } })
    res.status(200).json({
      alert: `Delete Review with an ID of ${or}`,
      destroyed: rvw
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateReview,
  GetOneReview,
  DeleteReview
}
