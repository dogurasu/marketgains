// database
const mysql = require('mysql');

// initialize connection
const db = mysql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : process.env.DB_PW,
    // database    : process.env.DB_DB,
});

const connect = () => {
    db.connect();
}

const get = () => {
    return db;
}

const close = () => {
    db.close();
}

module.exports = {
    connect,
    get,
    close
};