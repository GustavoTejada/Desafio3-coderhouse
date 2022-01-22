let Contenedor = require('./files.js');
const express = require('express');
const app = express();
const PORT = 8080;

let controlador = new Contenedor('./productos.txt');

app.get('/productos', (req, res) => {
    controlador.getAll().then(response => {
        res.send(response);
    });
});

app.get('/productoRandom', (req, res) => {
    controlador.getById(Math.floor(Math.random() * 3) + 1).then(response => {
        res.send(response);
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})