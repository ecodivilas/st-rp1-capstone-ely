require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const userController = require('./controller/users')

const app = express()
const port = process.env.DB_PORT || 3000

app.use(express.static(path.join(__dirname, './ui/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to Awesome Application!')
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
