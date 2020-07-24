// bring in PostgreSQL
const { Client } = require('pg');
const { Pool } = require('pg');

const db = new Client({
    host        : process.env.DB_HOST,
    user        : process.env.PG_USER,
    password    : process.env.DB_PW,
    database    : process.env.DB_DB,
});

const connect = () => {
    db.connect();
}

const get = () => {
    return db;
}

const close = () => {
    db.end();
}

module.exports = {
    connect,
    get,
    close
};