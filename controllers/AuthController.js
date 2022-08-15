const { Roaster } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  console.log(req.body)
  try {
    const roaster = await Roaster.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      roaster &&
      (await middleware.comparePassword(roaster.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: roaster.id,
        email: roaster.email
      }
      let token = middleware.createToken(payload)
      return res.send({ roaster: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const {
      userName,
      businessName,
      firstName,
      lastName,
      logoImageUrl,
      email,
      password          // <- becomes passwordDigest
    }=req.body
    let passwordDigest = await middleware.hashPassword(password)
    const roaster = await Roaster.create({
      userName,
      businessName,
      firstName,
      lastName,
      logoImageUrl,
      email,
      passwordDigest
    })
    res.send(roaster)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
