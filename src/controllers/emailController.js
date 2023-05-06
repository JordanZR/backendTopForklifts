const email = {}
const nodemailer = require('nodemailer');
const connection = require('../db')
const cliente = {}

email.send =(req, res)=>{
    
    //Checking if Cliente exists
    query = "SELECT * from cliente WHERE correo = '" + req.body.correo + "'"
    connection.query(query, function (err, result) {
        if (err) console.log(err)
        
        if(result.length>0){
            //Adding the Cotizacion to the DB
            query = "INSERT INTO cotizacion(nombreCliente, apellidoCliente, correoCliente, telefonoCliente, empresaCliente, contenido, idCliente) VALUES('" + result[0].nombre +  "','" + result[0].apellido + "','" + result[0].correo + "','" + result[0].telefono + "','" + result[0].empresa +"','" + req.body.contenido + "',"+result[0].id+")"
            connection.query(query, function (err, result) {
                if (err) console.log(err)
                query = "SELECT * from cotizacion"
                connection.query(query, function (err, result) {
                    if (err) throw err;
                    res.json(result)
                    })
                })
        }else{
            //Adding cliente to the DB
            query = "INSERT INTO cliente(nombre, apellido, correo, telefono, empresa) VALUES('" + req.body.nombre +  "','" + req.body.apellido + "','" + req.body.correo + "','" + req.body.telefono + "','" + req.body.empresa + "')"
            connection.query(query, function (err, result) {
                if (err) console.log(err)
                query = "SELECT * from cliente WHERE correo = '" + req.body.correo + "'"
                connection.query(query, function (err, result) {
                    if (err) throw err;
                    //Adding the Cotizacion to the DB
                query = "INSERT INTO cotizacion(nombreCliente, apellidoCliente, correoCliente, telefonoCliente, empresaCliente, contenido, idCliente) VALUES('" + result[0].nombre +  "','" + result[0].apellido + "','" + result[0].correo + "','" + result[0].telefono + "','" + result[0].empresa +"','" + req.body.contenido + "',"+result[0].id+")"
                connection.query(query, function (err, result) {
                    if (err) console.log(err)
                    query = "SELECT * from cotizacion"
                    connection.query(query, function (err, result) {
                        if (err) throw err;
                        res.json(result)
                        })
                    })
                })
            })
            
        }
    })
}

module.exports = email