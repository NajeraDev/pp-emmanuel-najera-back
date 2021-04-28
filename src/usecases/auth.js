const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Users = require('../models/users')

async function signup (email , password , name , phone , age , gender , hobbie , registerDate ){
    const passwordEncrypted = await bcrypt.hash(password, 10)
    return Users.create({email , password: passwordEncrypted , name , phone , age , gender , hobbie , registerDate})

}

async function login (email, password){
    
    const userFound = await Users.findOne({email})

    if (!userFound) throw new Error('Invalid Data')

    const isPasswordValid = await bcrypt.compare(password, userFound.password)

    if (!isPasswordValid) throw new Error('Invalid Data')

    const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET)

    return token
}

module.exports = {
    signup,
    login
}
