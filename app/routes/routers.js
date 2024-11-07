const express = require('express');
const router = express.Router();

const Juego = require('../controllers/juegoalq.controller.js'); 

// Rutas de Juegos 
router.post('/api/juegos/create', Juego.createJuego);           
router.put('/api/juegos/update/:id', Juego.updateJuego);       
router.get('/api/juegos/:id', Juego.getJuegoById);              
router.delete('/api/juegos/delete/:id', Juego.deleteJuego); 


module.exports = router;