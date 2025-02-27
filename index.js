const express = require('express')
const mongoose = require('mongoose')
const Product = require('./model/product.model,.js')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/products', (req,res) => {

    Product.find().then((products) => {

        res.json(products)
    }
).catch(() => {

    res.status(500).send('error')
})

    })

    app.get('/api/products/:id', (req,res) => {

        Product.findById(req.params.id).then((product) => {

            if(product) {

                res.json(product)


            } else {

                res.status(404).send('product not found')
            }

        })

    })


app.post('/api/products', (req,res) => {

    
    const product = new Product({

        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        image: req.body.image

    })

    product.save().then(() => {

        res.status(201).send('product saved')
       
    }) .catch(() => {

        res.status(500).send('product not saved')

    })

})

app.put('/api/products/:id', (req,res) => {

     Product.findById(req.params.id).then((product) => {

        if(product) {

            product.name = req.body.name
            product.quantity = req.body.quantity
            product.price = req.body.price
            product.image = req.body.image

        }

        product.save().then(() => {

            res.json(product)

        })

    }).catch(() => {

        res.status(500).send('product not updated')
    })

     })

   
     app.delete('/api/products/:id', (req,res) => {

        Product.findById(req.params.id).then((product) => {

            if(product) {

                product.deleteOne().then(() => {

                    res.json({message: "product removed"})

                }) .catch(() => {

                    res.status(500).send('product not removed')
                })
            } else {

                res.status(404).send('product not found')
            }
        })
     })

        


mongoose.connect('mongodb+srv://franzieyoogan2:admin357159@cluster0.guw8a4s.mongodb.net/class1')
  .then(() => {
    console.log('Connected!')
    app.listen(3000,() => {

        console.log(`server is running at 3000`)
    
    })
}) .catch(() => {

    console.log('Connection failed!')

})