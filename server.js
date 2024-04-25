const express = require('express');
const mysql = require('mysql');

// Create a connection pool for MySQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_database_name'
});

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { title, category, image } = req.body;
    const sql = 'INSERT INTO portfolio_items (title, category, image) VALUES (?, ?, ?)';
    pool.query(sql, [title, category, image], (err, result) => {
        if (err) {
            console.error('Error executing SQL:', err);
            res.status(500).json({ error: 'An error occurred while processing your request' });
            return;
        }
        console.log('Form data inserted successfully');
        res.json({ success: true });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
