const express = require('express');
const path = require('path');
const app = express();





app.use(express.static(path.resolve(__dirname, 'client'))); // Clent folder is static to connect frontend.js

// Check all GET requests
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html')) // Send index.html as response for GET request
})

app.listen(3000, () => console.log('test')) //