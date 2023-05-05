const connection = require('../db')
const usuarioCtrl = {}

var query

usuarioCtrl.getUsuarios = (req, res)=>{
    query = "SELECT * from usuario"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}
usuarioCtrl.getUsuario = (req, res)=>{
    query = "SELECT * from usuario WHERE id = " + body.req.id
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}


usuarioCtrl.postUsuario = (req, res)=>{
    query = "INSERT INTO usuario(nombre, apellido, correo, password_, tipo) VALUES('" + req.body.nombre +  "','" + req.body.apellido + "','" + req.body.correo + "','" + req.body.password_ + "','" + req.body.tipo + "')"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        query = "SELECT * from usuario"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

usuarioCtrl.updateUsuario = (req,res)=>{
    query = "UPDATE usuario SET correo = '" + req.body.correo + "',password_ = '" + req.body.password_ + "' WHERE id = " + req.body.id
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        query = "SELECT * from usuario"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

usuarioCtrl.deleteUsuario = (req,res)=>{
    query = "DELETE FROM usuario WHERE id = " + req.body.id
    connection.query(query, function (err, result) {
        if (err) console.log(err);
        query = "SELECT * from usuario"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

module.exports = usuarioCtrl