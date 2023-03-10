const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
