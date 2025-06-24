const express = require("express");
const cors = require("cors");
const path = require("path");
// const data = require("../Front-end/data/latestprojects.json");
// Creamos una vari con el servidor
const server = express();
const mysql = require("mysql2/promise");
// Configuramos server para que funcione bien como API
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const port = 4000;
server.listen(port, () => {
  console.log(`Servidor iniciado <http://localhost:${port}>`);
});

// // EJEMPLO DE ENDPOINT

// server.get("/", (req, res) => {
//   console.log("Holis"); // -> Se ve en la terminal

//   res.send("Holis Adalabers!!!"); // -> Se ve en la página
// });

// ENDPOINTS DE APIS

// server.get("/api/proyectos", async (req, res) => {
// 1. Conn a la base de datos

async function getConnection() {
  const datosConexion = {
    host: "adalabpromo53team-01-proyectoteam1-03bb.i.aivencloud.com",
    port: "16388",
    user: "avnadmin",
    password: "AVNS_bzNzUlFkQJay8B1BovI",
    database: "defaultdb",
  };
  const conexion = await mysql.createConnection(datosConexion);
  await conexion.connect();
  return conexion;
}
server.get("/api/project", async (req, res) => {
  console.log(req.query);

  const conn = await getConnection();
  // 2. Lanzamos el SELECT a la base de datos
  const query = `SELECT 
  *
  FROM defaultdb.author
  JOIN defaultdb.project ON author.idauthor = project.author_idauthor;`;
  const [results] = await conn.query(query);
  // 3. Desconectamos/Terminamos la conn
  await conn.end();
  // 4. Devolvemos el JSON con lo sdatos en la res
  res.json(results);
});

//   res.json({
//     success: true,
//     proyectos: datosConexion,
//   });
// });

// SERVIDOR DE FICHEROS ESTÁTICOS

// NO BORRAR ! server.use(express.static(path.join(__dirname, "../Front-end/dist")));

// NO ENCONTRADO

// server.use(/.*/, (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "../FRONT-END/error404.html"));
// });
