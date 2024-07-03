const { Router } = require('express')
const productRouter = Router()
const Product = require('../../models/productModel')

productRouter.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

productRouter.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

productRouter.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

productRouter.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product)
            return res.status(404).json({ message: `Can not find any product by ID: ${id}` })

        const updated = await Product.findById(id)
        res.json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

productRouter.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product)
            return res.status(404).json({message: `There is no product with ID: ${id}`})
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = productRouter