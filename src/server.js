const express = require('express')
const cors = require('cors')
const authRouter  = require('./routes/auth')
const usersRouter = require('./routes/users')
const lastFemaleUsers = require('./routes/femaleUsers')
const server = express()

server.use(cors())
server.use(express.json()) //middleware
server.use('/auth', authRouter)
server.use('/lastfemaleusers', lastFemaleUsers)
server.use('/users', usersRouter)

server.get('/',(request,response)=>{
    response.json({
        success: true,
        message:'ppAPIv10'
    })
})

module.exports = server       