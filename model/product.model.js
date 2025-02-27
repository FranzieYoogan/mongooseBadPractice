const mongoose = require('mongoose')

const productsSchema = mongoose.Schema(

{

    name: {

        type: String,
        required: [true, "please enter product name"]

    },

    quantity : {

        type: Number,
        required: true,
        default: 0

    },

    price: {

        type: Number,
        required: true,
        default: 0

    },

    image: {

        type: String,
        required: false

    },
    

}

)

const Product = mongoose.model('Product', productsSchema, 'products') // the last one is the collection

module.exports = Product