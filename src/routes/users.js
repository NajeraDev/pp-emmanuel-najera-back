const express = require('express')
const users = require('../usecases/users')

const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.get('/', authMiddleware, async (request, response) => {
    const { name, hobbie } = request.body

    const userSearch = await users.getByNameOrHobbie( name, hobbie )

    response.json({
        success: true,
        data: userSearch
    })
})


router.delete('/:id', authMiddleware, async (request, response) => {
    const userDeleted = await users.deleteById(request.params.id)

    response.json({
        success: true,
        data: userDeleted
    })
})

module.exports = router 