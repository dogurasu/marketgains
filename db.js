// bring in PostgreSQL
const { Client, Pool } = require('pg');

// import dotenv variables
require('dotenv').config();

const pool = new Pool({
    host        : process.env.DB_HOST,
    user        : process.env.PG_USER,
    password    : process.env.DB_PW,
    database    : process.env.DB_DB,
});

module.exports = pool;