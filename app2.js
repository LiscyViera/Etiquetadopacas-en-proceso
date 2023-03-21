
var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: 'localhost',
  database: 'prueba_db',
  user: 'root',
  password: 'password'
});

conexion.connect((error) =>{
  if (error) {
    console.error('Error al conectar a la base de datos: ' + error.stack);
    return;
  } else {
    console.log('Conexión a la base de datos exitosa.');
  }

});

conexion.end();

module.exports = conexion;