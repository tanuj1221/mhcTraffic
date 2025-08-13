const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const host = '0.0.0.0';  // This allows connections from any IP address

// Serve static files from different directories
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve HTML files from the html directory
app.use(express.static(path.join(__dirname, 'html')));

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'html', '404.html'));
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});