const { Router } = require('express')
const router = Router()
const productRouter = require('./productRouter')

router.use('/home', productRouter)

module.exports = router