const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "addresses",
  password: "niraj2328",
  port: 5432,
});

module.exports = pool;
