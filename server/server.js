"use strict";

const express = require("express");
const morgan = require("morgan");
const { Pool } = require("pg");
const cors = require("cors");
// const {} = require("./handlers");

const app = express();
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------
app
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())
  .use(cors())
  // Any requests for static files will go into the public folder
  .use(express.static("public"));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Website_Database",
  password: "Karador12",
  port: 5433,
});

//          ENDPOINTS
// ---------------------------------

app.get("/api/projects", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM projects");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// ---------------------------------

// this is our catch all endpoint.
app.get("/api/projects", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM projects");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Node spins up our server and sets it to listen on port 8000.
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
