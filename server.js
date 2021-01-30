const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

// helpers


app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'CARLOS fernandez'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.listen(port, () => {
    console.log('Servidor iniciado');
});