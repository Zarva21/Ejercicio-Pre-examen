const db = require('../config/db.config.js');
const Juego = db.Juego;

// Crear un nuevo juego 
exports.createJuego = async (req, res) => {
    try {
        // Crear el nuevo juego con los datos proporcionados
        const nuevoJuego = await Juego.create({
            nombre_juego: req.body.nombre_juego,
            genero: req.body.genero,
            plataforma: req.body.plataforma,
            fecha_lanzamiento: req.body.fecha_lanzamiento,
            precio_alquiler: req.body.precio_alquiler,
            disponibilidad: req.body.disponibilidad,
            fecha_alquiler: req.body.fecha_alquiler,
            fecha_devolucion: req.body.fecha_devolucion,
            nombre_cliente: req.body.nombre_cliente,
            comentarios: req.body.comentarios
        });
        res.status(201).json({
            message: 'Juego creado exitosamente',
            juego: nuevoJuego
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el juego' });
    }
};

/// Actualizar un juego por ID
exports.updateJuego = async (req, res) => {
    const id = req.params.id;
    try {
        
        const { 
            nombre_juego,
            genero,
            plataforma,
            fecha_lanzamiento,
            precio_alquiler,
            disponibilidad,
            fecha_alquiler,
            fecha_devolucion,
            nombre_cliente,
            comentarios
        } = req.body;

        
        if (!nombre_juego || !genero || !plataforma || !fecha_lanzamiento || !precio_alquiler || !disponibilidad || !fecha_alquiler || !fecha_devolucion || !nombre_cliente || !comentarios) {
            return res.status(400).json({ error: 'Faltan datos en la solicitud' });
        }

        
        const [updated] = await Juego.update(req.body, {
            where: { id_juego: id }
        });

        if (updated) {
            
            const juegoActualizado = await Juego.findByPk(id);
            res.json({
                message: 'Juego actualizado correctamente',
                juego: juegoActualizado
            });
        } else {
            res.status(404).json({ message: 'Juego no encontrado o sin cambios' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el juego' });
    }
};

// Obtener un juego por ID
exports.getJuegoById = async (req, res) => {
    const id = req.params.id;
    try {
        const juego = await Juego.findByPk(id);
        if (juego) {
            
            res.json({
                message: 'Juego encontrado',
                juego: juego
            });
        } else {
            res.status(404).json({ message: 'Juego no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el juego' });
    }
};

// Eliminar un juego (lógicamente) por ID
exports.deleteJuego = async (req, res) => {
    const id = req.params.id;
    try {
        
        const juegoEliminado = await Juego.update(
            { disponibilidad: false },  
            { where: { id_juego: id } }
        );

        if (juegoEliminado[0] === 1) {
            
            const juego = await Juego.findByPk(id);
            res.json({
                message: 'Juego eliminado (marcado como no disponible)',
                juego: juego
            });
        } else {
            res.status(404).json({ message: 'Juego no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el juego' });
    }
};
