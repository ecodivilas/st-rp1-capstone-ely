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
app.post("/user", async(req, res) => {
    try {
        const { user_name, password, user_type } = req.body;
        const createUser = await pool.query("INSERT INTO users (user_name, password, user_type) VALUES($1, $2, $3) RETURNING *", 
        [user_name, password, user_type]
        );
        res.json(createUser.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

// Read | Get All Users
app.get("/users", async(req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);
    
    } catch (err) {
        console.error(err.message);
        
    }
});

// Read | Get One User
app.get("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
        res.json(users.rows[0]);
    
    } catch (err) {
        console.error(err.message);
    }
});

// Update Users
app.put("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { user_name, password, user_type } = req.body;
        const updateUser = await pool.query("UPDATE users SET user_name = $1, password = $2, user_type = $3 WHERE user_id = $4",
        [user_name, password, user_type , id]);

        res.json(updateUser.rows[0]);
    } catch (err) {
        console.error(err.message);
     
    }
});

// Delete User
app.delete("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
        res.json(`Successfully Deleted User ID: ${id}`)
    } catch (err) {
        console.error(err.message);
        
    }
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})