const express = require('express')
const users = require('../usecases/users')

const router = express.Router()

const authMiddleware = require('../middlewares/auth')

router.get('/', authMiddleware, async (request, response) => {
    const userSearch = await users.getLastFemaleUsers()

    response.json({
        success: userSearch.success,
        message: userSearch.message,
        data: userSearch
    })
})

module.exports = router