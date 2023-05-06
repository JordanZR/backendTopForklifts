const email = {}
const nodemailer = require('nodemailer');
const connection = require('../db')
const cliente = {}

email.send =(req, res)=>{
    
    //Email sender
    try{
        //Titan email

        let transporter = nodemailer.createTransport({
            host: "smtp.titan.email",
            port: 465,
            secure: true,
            auth: {
                user: "jordan.zelaya@straydog.cloud",
                pass: "Ocita1Vacilante2@",
            },
        });

        /*Verify transporter
        transporter.verify(function(error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log('Server is ready to take our messages');
            }
        });
        */

        let mailOptions = {
            from: 'jordan.zelaya@straydog.cloud', // sender address
            to: [
                req.body.correo,
                'jordan.zelayahs@gmail.com'
            ],
            subject: 'Cotización', // Subject line
            text: req.body.nombre + " " + req.body.apellido + " de la empresa: " + req.body.empresa + " desea saber lo siguiente: " + req.body.contenido + ". Su número de telefono es: " + req.body.telefono, // plain text body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);

        });

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
    }catch (err){
        console.log("Error")
    }

    
}

module.exports = email