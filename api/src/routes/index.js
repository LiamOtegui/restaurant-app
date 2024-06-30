const { Router } = require('express')
const router = Router()
const todoRouter = require('./todoRouter')

router.use('/todo', todoRouter)

module.exports = router