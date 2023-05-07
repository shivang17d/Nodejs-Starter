const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./public/home.html', { root: __dirname });
});

app.get('/result', (req, res) => {
    res.sendFile('./public/result.html', { root: __dirname });

});

app.get('/signup', (req, res) => {
    res.sendFile('./public/signup.html', { root: __dirname });

});

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
})