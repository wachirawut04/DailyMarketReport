const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});