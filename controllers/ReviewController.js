const { Review } = require('../models')

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
// get all reviews
// delete review

module.exports = {}
