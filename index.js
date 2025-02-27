const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/product.route.js')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://franzieyoogan2:admin357159@cluster0.guw8a4s.mongodb.net/class1')
  .then(() => {
    console.log('Connected!')
    app.use(router)
    app.listen(3000,() => {

        console.log(`server is running at 3000`)
    
    })
}) .catch(() => {

    console.log('Connection failed!')

})