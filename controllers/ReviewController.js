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
// update review
const UpdateReview = async (req, res) => {
  try {
    const review = await Review.update(
      { ...req.body },
      { where: { id: req.params.post_id }, returning: true }
    )
  } catch (error) {
    throw error
  }
}
// get one review
const GetOneReview = async (req, res) => {
  try {
    const review = await Review.findOne()
    res.send(review)
  } catch (error) {
    throw error
  }
}
// delete review
const DeleteReview = async (req, res) => {
  try {
    await Review.destory({ where: { id: req.params.review_id } })
    res.send({
      msg: 'Review Deleted',
      payload: req.params.review_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateReview,
  UpdateReview,
  GetOneReview,
  GetAllReviews,
  DeleteReview
}
