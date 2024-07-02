const { Router } = require('express')
const productRouter = Router()
const Product = require('../../models/productModel')

productRouter.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

module.exports = productRouter