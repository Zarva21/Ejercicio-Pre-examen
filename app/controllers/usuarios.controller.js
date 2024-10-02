const db = require('../config/db.config.js');
const Usuario = db.Usuarios;

exports.create = (req, res) => {
    Usuario.create(req.body)
        .then(usuario => res.status(200).json({ message: 'Usuario creado con éxito', usuario }))
        .catch(err => res.status(500).json({ message: 'Error al crear usuario', error: err.message }));
};

exports.updateById = (req, res) => {
    Usuario.update(req.body, { where: { id_usuario: req.params.id } })
        .then(result => res.status(200).json({ message: 'Usuario actualizado con éxito', result }))
        .catch(err => res.status(500).json({ message: 'Error al actualizar usuario', error: err.message }));
};

exports.deleteById = (req, res) => {
    Usuario.destroy({ where: { id_usuario: req.params.id } })
        .then(() => res.status(200).json({ message: 'Usuario eliminado con éxito' }))
        .catch(err => res.status(500).json({ message: 'Error al eliminar usuario', error: err.message }));
};

exports.retrieveAll = (req, res) => {
    Usuario.findAll()
        .then(usuarios => res.status(200).json(usuarios))
        .catch(err => res.status(500).json({ message: 'Error al recuperar usuarios', error: err.message }));
};
