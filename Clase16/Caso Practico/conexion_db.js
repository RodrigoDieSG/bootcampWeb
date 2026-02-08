// 1. Importación del módulo mysql2
const mysql = require('mysql2');

// 2. Configuración de las credenciales
const conexion = mysql.createConnection({
     host: 'localhost',   // servidor de la base de datos
     user: 'root',            // usuario de MySQL
     password: '12345678',            // contraseña de MySQL
     database: 'restaurante_db' // nombre de la base de datos
});

// 3. Establecer la conexión
conexion.connect((error) => { // función callback
     if (error) { // si hay un error
          console.error('❌ Error al conectar a la base de datos: ', error);
          return;
     }
     console.log('✅ ¡Conexión a la base de datos exitosa!'); // si no hay error


     // Ejemplo: Obtener todos los platos de la carta
     const sql = 'SELECT * FROM Platos'; 
     
     conexion.query(sql, (error, resultados, campos) => {
          if (error) {
               console.error('❌ Error al ejecutar la consulta: ', error);
               return;
          }
          
          console.log('--- Lista de Platos ---');
          console.table(resultados); // .table muestra los datos en la consola
          
          // 4. Cerramos la conexión después de obtener los resultados
          conexion.end((err) => {
               if (err) {
                    console.error('Error al cerrar la conexión:', err);
               } else {
                    console.log('🔒 Conexión cerrada correctamente.');
               }
          });
     });
});