const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const serverAddress =
  process.env.NODE_ENV === "dev"
    ? "http://localhost:4000"
    : "https://pw-project-promo-53-module-4-team-1.onrender.com/";
console.log(process.env.NODE_ENV);
const server = express();
const mysql = require("mysql2/promise");
// Configuramos server para que funcione bien como API
server.use(cors());
server.use(express.json());
server.set("view engine", "ejs");

// Arrancamos el servidor en el puerto 4000
const port = process.env.PORT || 4000;
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
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
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

server.post("/api/project", async (req, res) => {
  let conn;

  try {
    const {
      name,
      slogan,
      repo,
      demo,
      technologies,
      desc,
      photo,
      image,
      author,
      job,
    } = req.body;

    if (!name || !desc || !author) {
      return res.status(400).json({
        success: false,
        message: "Faltan campos obligatorios (name, desc, author)",
      });
    }

    conn = await getConnection();

    const queryauthor = `
      INSERT INTO author (image, author, job )
      VALUES (?, ?, ?)
    `;

    const [resultauthor] = await conn.execute(queryauthor, [
      image,
      author,
      job,
    ]);
    console.log(resultauthor);

    const authorId = resultauthor.insertId;
    const queryproject = `
      INSERT INTO project (name, slogan, repo, demo, technologies, \`desc\`, photo, author_idauthor)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [resultProject] = await conn.execute(queryproject, [
      name,
      slogan,
      repo,
      demo,
      technologies,
      desc,
      photo,
      authorId,
    ]);
    // await conn.end();

    // Construimos la URL del nuevo recurso
    const newProjectUrl = `/project/${resultProject.insertId}`;

    res.status(201).json({
      success: true,
      authorId: authorId,
      projectId: resultProject.insertId,
      cardUrl: newProjectUrl,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Database error",
    });
  } finally {
    if (conn) await conn.end(); // Ensure connection closes
  }
});

server.get("/project/:id", async (req, res) => {
  const conn = await getConnection();

  console.log("Lo uqe le pasamos a query", req.params);

  const [results] = await conn.query(
    "SELECT * FROM project p JOIN author a ON (p.author_idauthor = a.idauthor) WHERE p.idproject = ?",
    [req.params.id]
  );

  await conn.end();

  const projectData = results[0];

  console.log(projectData);

  res.render("detail", projectData);
});
//   res.json({
//     success: true,
//     proyectos: datosConexion,
//   });
// });

// SERVIDOR DE FICHEROS ESTÁTICOS

server.use(express.static(path.join(__dirname, "../Front-end/dist")));

server.use(express.static(path.join(__dirname, "../views_static")));
//server.use(express.static(path.join(__dirname / "../Front-end")));
//server.use(express.static(path.join(__dirname / "../assets")));

// NO ENCONTRADO

// server.use(/.*/, (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "../FRONT-END/error404.html"));
// });
