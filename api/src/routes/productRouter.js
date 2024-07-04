const { Router } = require('express')
const productRouter = Router()
const { postProduct, getProduct, getProductById, updateProduct, deleteProduct } = require('../../controllers/productControllers')

productRouter.post('/', postProduct)

productRouter.get('/', getProduct)

productRouter.get('/:id', getProductById)

productRouter.put('/:id', updateProduct)

productRouter.delete('/:id', deleteProduct)

module.exports = productRouter