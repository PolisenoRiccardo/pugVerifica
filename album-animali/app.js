var express = require('express');
const animals = require('./animals.json');
var app = express();
app.get('/', function (req, res) {
    res.send('Funzia');
});
app.get('/api/album-animali', function (req, res) {
    res.send(animals);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});