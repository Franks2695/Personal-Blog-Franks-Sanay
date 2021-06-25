const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//ESTABLECER EL MOTOR PARA LAS VISTAS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('presentacion', {
        titulo: 'Presentación',
        nombre: ' Bienvenido a mi blog personal',
        autor: 'Franks Sañay'
    });
});

app.get('/hvida', function(req, res) {
    res.render('hvida', {
        titulo: 'Hoja de Vida'
    });
});

app.get('/portafolio', function(req, res) {
    res.render('portafolio', {
        titulo: 'Portafolio'
    });
});

app.get('/contacto', function(req, res) {
    res.render('contacto', {
        titulo: 'Contacto'
    });
});

app.get('/correo', function(req, res) {
    res.render('correo', {
        titulo: 'Correo'
    });
});

app.listen(port, () => {
    console.log('Servidor iniciado, escuchando en el puerto 3000');
});