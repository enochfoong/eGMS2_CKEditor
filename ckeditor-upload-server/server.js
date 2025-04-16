const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
    }
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Handle file upload
app.post('/upload', upload.single('upload'), (req, res) => {
    if (req.file) {
        res.json({
            url: `http://localhost:${port}/uploads/${req.file.filename}`
        });
    } else {
        res.status(400).json({ error: 'No file uploaded' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});