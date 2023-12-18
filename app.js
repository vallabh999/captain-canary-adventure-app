const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const version = "1.0.0"; // Static version number
    const serverUrl = req.protocol + '://' + req.get('host');
    res.send(`Hello World!<br>Server URL: ${serverUrl}<br>Version: ${version}`);
});

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
});
