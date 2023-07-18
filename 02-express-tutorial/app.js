const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const singleProduct = products.find((product) => product.id === Number(req.params.productID))
    if (singleProduct === undefined) {
        res.status(404).send('Product does not exist')
    } else {
        res.json(singleProduct)
    }
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {

    const { search, limit } = req.query

    let storedProducts = [...products]

    if (search) {
        storedProducts = storedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        storedProducts = storedProducts.slice(0, Number(limit))
    }
    if(storedProducts.length < 1) {
        // res.send('no products match search.')
        res.status(200).json( { success: true, data: [] })
    }
    res.status(200).json(storedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})