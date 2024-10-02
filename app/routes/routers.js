const express = require('express');
const router = express.Router();

const User = require('../controllers/usuarios.controller.js');
const Libro = require('../controllers/libros.controller.js');
const Autor = require('../controllers/autores.controller.js');

// Rutas de Usuarios
router.post('/api/usuarios/create', User.create);
router.put('/api/usuarios/update/:id', User.updateById);
router.delete('/api/usuarios/delete/:id', User.deleteById);
router.get('/api/usuarios/all', User.retrieveAll);

// Rutas de Libros
router.post('/api/libros/create', Libro.create);
router.put('/api/libros/update/:id', Libro.updateById);
router.delete('/api/libros/delete/:id', Libro.deleteById);
router.get('/api/libros/all', Libro.retrieveAll);

// Rutas de Autores
router.post('/api/autores/create', Autor.create);
router.put('/api/autores/update/:id', Autor.updateById);
router.delete('/api/autores/delete/:id', Autor.deleteById);
router.get('/api/autores/all', Autor.retrieveAll);


module.exports = router;