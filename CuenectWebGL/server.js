const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const options = {
    key: fs.readFileSync(path.join(__dirname, 'certs/server.key')), // replace with your key path
    cert: fs.readFileSync(path.join(__dirname, 'certs/server.crt')) // replace with your certificate path
};

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

https.createServer(options, app).listen(443, () => {
    console.log('Server is running on port 443');
});