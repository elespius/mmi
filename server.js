// Your server-side logic using Node.js (if needed)
// For example, using Express.js to handle HTTP requests
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const title = req.body.title;
    const category = req.body.category;
    const image = req.body.image;

    // Handle form submission and database interaction here

    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
