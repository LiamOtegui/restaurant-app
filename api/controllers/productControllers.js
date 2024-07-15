const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const postProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const getProduct = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const getProductById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            res.status(404)
            throw new Error(`Can not find any product by ID: ${id}`)
        }

        const updated = await Product.findById(id)
        res.json(updated)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        
        if (!product) {
            res.status(404)
            throw new Error(`There is no product with ID: ${id}`)
        }
        
        res.json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    postProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}