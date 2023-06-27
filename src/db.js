const mysql = require('mysql2')

var con = mysql.createConnection({
    host: "89.117.139.52",
    database: "u932620142_inventarioADP",
    user: "u932620142_TheHaise",
    password: "Ocita1Osante2",
    connectTimeout: 500000
});

try{
    con.connect()
    console.log("DB Connected")
}catch(err){
    throw err
}


module.exports = con