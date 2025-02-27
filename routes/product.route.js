const Product = require('../model/product.model.js')
const express = require('express')
const router = express.Router()
const {getProducts, getProductById, createProduct, updateProduct,deleteProduct} = require('../controller/product.controller.js')

router.get('/products',getProducts)
router.get('/products/:id', getProductById)
router.post('/products',createProduct)
router.put('/products/:id',updateProduct)
router.delete('/products/:id',deleteProduct)

module.exports = router