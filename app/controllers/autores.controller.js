const db = require('../config/db.config.js');
const Autor = db.Autores;

exports.create = (req, res) => {
    Autor.create(req.body)
        .then(autor => res.status(200).json({ message: 'Autor creado con éxito', autor }))
        .catch(err => res.status(500).json({ message: 'Error al crear autor', error: err.message }));
};

exports.updateById = (req, res) => {
    Autor.update(req.body, { where: { id_autor: req.params.id } })
        .then(result => res.status(200).json({ message: 'Autor actualizado con éxito', result }))
        .catch(err => res.status(500).json({ message: 'Error al actualizar autor', error: err.message }));
};

exports.deleteById = (req, res) => {
    Autor.destroy({ where: { id_autor: req.params.id } })
        .then(() => res.status(200).json({ message: 'Autor eliminado con éxito' }))
        .catch(err => res.status(500).json({ message: 'Error al eliminar autor', error: err.message }));
};

exports.retrieveAll = (req, res) => {
    Autor.findAll()
        .then(autores => res.status(200).json(autores))
        .catch(err => res.status(500).json({ message: 'Error al recuperar autores', error: err.message }));
};
