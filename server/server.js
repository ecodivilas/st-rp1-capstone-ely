require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const pool = require('./config/db')
const cors = require('cors')

const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Welcome to Awesome Application!')
})

// ============================================================
// =========  CRUD: Create , Read, Update and Delete  =========
// ============================================================
// Note: Comments must be avoided and for teaching purpose only

// Create | Make User
app.post("/users", async(req, res) => {
    try {
        const { email, password, first_name, last_name, mobile_number, birthdate, type_id } = req.body;
        const createUser = await pool.query(
            "INSERT INTO users (email, password, first_name, last_name, mobile_number, birthdate, type_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
            [email, password, first_name, last_name, mobile_number, birthdate, type_id]
        );
        res.json(createUser.rows);
    } catch (error) {
        console.error(error.message);
    }
})

// Read | Get All Users
app.get("/users", async(req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users ORDER BY user_id ASC");
        res.json(users.rows);
    
    } catch (error) {
        console.error(error.message);
        
    }
});

// Read | Get One User
app.get("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
        res.json(users.rows);
    
    } catch (error) {
        console.error(error.message);
    }
});

// Update Users
app.put("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { email, password, first_name, last_name, mobile_number, birthdate, type_id } = req.body;
        const updateUser = await pool.query(
            "UPDATE users SET email = $1, password = $2, first_name = $3, last_name = $4, mobile_number = $5, birthdate = $6, type_id = $7 WHERE user_id = $8 RETURNING *",
            [email, password, first_name, last_name, mobile_number, birthdate, type_id, id]);
        res.json(updateUser.rows);
    } catch (error) {
        console.error(error.message);
     
    }
});

// Delete User
app.delete("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
        res.json(`Successfully Deleted User ID: ${id}`)
    } catch (error) {
        console.error(error.message);
        
    }
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})