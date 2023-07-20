require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const pool = require('./config/db')

const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to Awesome Application!')
})


app.get("/users", async(req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);
    
    } catch (err) {
        console.error(err.message);
        
    }
    
});

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
