const {Roaster,Member} = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  console.log(req.body)
  try{
    let user=await Roaster.findOne({where: { email: req.body.email },raw: true})
    user?console.log('found a roaster'):user=await Member.findOne({where: { email: req.body.email },raw: true})
    if(user && (await middleware.comparePassword(user.passwordDigest, req.body.password))){ 
      let payload={id:user.id,email:user.email}
      let token=middleware.createToken(payload)
      return res.send({user:payload,token})
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }catch(error){throw error}
}

const Register = async (req, res) => { 
  try {
    let user,passwordDigest
    if(req.body.businessName){
      const {userName,businessName,firstName,lastName,logoImageUrl,email,password}=req.body
      passwordDigest = await middleware.hashPassword(password)
      user=await Roaster.create({userName,businessName,firstName,lastName,logoImageUrl,email,passwordDigest})
    }else{
      const {userName,firstName,lastName,email,password}=req.body
      passwordDigest = await middleware.hashPassword(password)
      user=await Member.create({userName,firstName,lastName,email,passwordDigest})
    }
    res.send(user)
  }catch(error){throw error}
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
