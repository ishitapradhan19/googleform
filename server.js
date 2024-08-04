const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Serve static files (e.g., HTML, CSS, JS) from the public directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/submit-form', (req, res) => {
    const { fullName, email, yearOfStudy, studyHours, sleepHours } = req.body;

    const query = 'INSERT INTO responses (fullName, email, yearOfStudy, studyHours, sleepHours) VALUES (?, ?, ?, ?, ?)';
    const values = [fullName, email, yearOfStudy, studyHours, sleepHours];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error submitting form');
            return;
        }
        console.log('Form submitted successfully:', result);
        res.send('Form submitted successfully!');
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
