const db = require('../config/db.config.js');
const Libro = db.Libros;

exports.create = (req, res) => {
    Libro.create(req.body)
        .then(libro => res.status(200).json({ message: 'Libro creado con éxito', libro }))
        .catch(err => res.status(500).json({ message: 'Error al crear libro', error: err.message }));
};

exports.updateById = (req, res) => {
    Libro.update(req.body, { where: { id_libro: req.params.id } })
        .then(result => res.status(200).json({ message: 'Libro actualizado con éxito', result }))
        .catch(err => res.status(500).json({ message: 'Error al actualizar libro', error: err.message }));
};

exports.deleteById = (req, res) => {
    Libro.destroy({ where: { id_libro: req.params.id } })
        .then(() => res.status(200).json({ message: 'Libro eliminado con éxito' }))
        .catch(err => res.status(500).json({ message: 'Error al eliminar libro', error: err.message }));
};

exports.retrieveAll = (req, res) => {
    Libro.findAll()
        .then(libros => res.status(200).json(libros))
        .catch(err => res.status(500).json({ message: 'Error al recuperar libros', error: err.message }));
};
