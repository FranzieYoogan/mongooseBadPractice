const Product = require('../model/product.model.js')

const getProducts = (req,res) => {

    Product.find().then((products) => {

        res.json(products)

    })
    .catch(() => {

        res.status(500).send('error')
    })

    

}

const getProductById = (req,res) => {

    Product.findById(req.params.id).then((product) => {

        if(product) {

            res.json(product) 

        } 
        else {

            res.status(404).send('product not found')
        }
        
    })

}

const createProduct = (req,res) => {

    const product = new Product({

        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        image: req.body.image
    })

    product.save().then(() => {

        res.status(201).send('product saved')
    })
    .catch(() => {

        res.status(500).send('product not saved')
    })

}

const updateProduct = (req,res) => {

    Product.findById(req.params.id).then((product) => {

        if(product) {

            product.name = req.body.name,
            product.quantity = req.body.quantity,
            product.price = req.body.price,
            product.image = req.body.image
        }

        product.save().then(() => {

            res.json(product)
        })
        .catch(() => {

            res.status(500).send('product not updated')
        })
    })
    .catch(() => {

        res.status(404).send('product not found')
    })

}

const deleteProduct = (req,res) => {

    Product.findById(req.params.id).then((product) => {

        if(product) {

            product.deleteOne().then(() => {

                res.json(product)

            })
            .catch(() => {

                res.status(500).send('product not deleted')
            })


        }
        else {

            res.status(404).send('product not found')
        }

    })
}

module.exports = {getProducts,getProductById,createProduct,updateProduct,deleteProduct}