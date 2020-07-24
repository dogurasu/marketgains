// create db
app.get('/create_db', (req, res) => {
    const query = `
        CREATE TABLE stonks (
            ticker varchar
        );
    `;
    client = db.get();
    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Table has been successfully created');
    })
    const query = `
        CREATE TABLE users (
            email varchar,
            firstname varchar,
            lastName varchar,
            age int
        );
    `;
})

const mysql = require('mysql');

// initialize connection
const db = mysql.createConnection({
    socketPath: '/var/run/mysqld/mysqld.sock',
});

// example mysql query
let query = 'CREATE DATABASE marketgains';
db_connection.query(query, (err, results, fields) => {
    if (err) {
        throw err;
    }
    console.log('Created Database.')
    res.send('Created database');
});


// Fake Users Database
let users = [
    { username: 'dogurasu', email: 'deedee@g.com' },
    { username: 'michelil', email: 'mimi@g.com' },
]