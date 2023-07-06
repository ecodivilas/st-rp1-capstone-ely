require('dotenv').config()

const express = require('express')

const app = express()
const port = process.env.DB_PORT || 3000

console.log('WHAT IS THE PORT', port)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
