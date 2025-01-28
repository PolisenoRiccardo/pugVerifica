const express = require('express');
const animals = require('./animals.json');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        animaled: animals.animal
    });
});
app.get('/api/album-animali', function (req, res) {
    res.send(animals);
    
});
app.get('/api/:id_figurina', (req, res) => {
    const animalID = req.params.id_figurina;
    const animal = animals.animal.find(s => s.id_figurina == animalID);

    if (animal) {
        res.render('animal', {
            selectedAnimal : animal,
            animaled: animals.animal
        });
        console.log(animals.animal);
    } else {
        res.status(404).send('Animal not found');
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});