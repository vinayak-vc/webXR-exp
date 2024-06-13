const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const cors = require('cors');

const app = express();
const port = 443;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "XR" directory
app.use(express.static(path.join(__dirname, 'XR')));

// Serve the WebXR.html file when the /x path is requested
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'XR', 'WebXR1.html'));
});

// Endpoint to get the video URL based on the marker ID
app.get('/getVideoUrl', (req, res) => {
    const markerId = req.query.marker;

    const videoUrls = {
        'marker1': '/video/1.mp4',
        'marker2': '/video/2.mp4',
        'marker3': '/video/3.mp4',
        'marker4': '/video/4.mp4',
        'marker5': '/video/5.mp4',
        'marker6': '/video/6.mp4',
        'marker7': '/video/7.mp4',
        'marker8': '/video/8.mp4',
        'marker9': '/video/9.mp4',
        'marker10': 'video/10.mp4'
    };

    const videoUrl = videoUrls[markerId];

    if (videoUrl) {
        res.json({ url: videoUrl });
    } else {
        res.status(404).json({ error: 'Marker not found' });
    }
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