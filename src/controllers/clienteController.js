const connection = require('../db')
const clienteCtrl = {}

var query

clienteCtrl.getClientes = (req, res)=>{
    query = "SELECT * from cliente"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}

clienteCtrl.getCliente = (req, res)=>{
    query = "SELECT * from cliente WHERE correo = '" + req.body.correo + "'"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        res.json(result)
    })
}

clienteCtrl.postCliente = (req, res)=>{
    query = "INSERT INTO cliente(nombre, apellido, correo, telefono, empresa) VALUES('" + req.body.nombre +  "','" + req.body.apellido + "','" + req.body.correo + "','" + req.body.telefono + "','" + req.body.empresa + "')"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        query = "SELECT * from cliente"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

clienteCtrl.deleteCliente = (req,res)=>{
    query = "DELETE FROM cliente WHERE id = " + req.body.id
    connection.query(query, function (err, result) {
        if (err) console.log(err);
        query = "SELECT * from cliente"
        connection.query(query, function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
}

module.exports = clienteCtrl