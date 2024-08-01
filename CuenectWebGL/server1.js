const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const app = express();
const port = 443;
// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// HTTPS options with paths to the key and certificate files
const httpsOptions = {
    key: fs.readFileSync('C:/Windows/System32/key.pem'),
    cert: fs.readFileSync('C:/Windows/System32/server.crt')
};

// Start the HTTPS server
https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`HTTPS server running on port ${port}`);
});