const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, function () {
    console.log('listening on '+port)
});

app.get('/', (req, res) => {
    res.send("Hello world!")
})