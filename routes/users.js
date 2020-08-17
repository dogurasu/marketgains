var express = require('express');
var router = express.Router();

// connect pool
let pool = require('../db');

// list all users
router.list = (req, res) => {
    pool.connect();
    pool.query('SELECT * FROM users;', vals, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            console.log(res.rows[0]);
        }
    })
    // res.render('users', {title: 'Users', users: users});
}

// load specific queried user
router.load = (req, res, next) => {
    pool.connect();
    let id = req.params.id; // get the user id passed in the request as route params

}

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try {
        // const vals = [];
        let user;
        user = await pool.query('SELECT * FROM users;');
            // .then((q_res) => {
            //     // console.log(res.rows[0].email);
            //     console.log('in users');
            //     users = q_res.rows;
            //     console.log(users);
            //     // console.log(res.rows);
            // })
            // .catch((err) => {
            //     console.log(err.stack);
            // })
        res.send(`Here are some users: ${res.json(user.rows[0])}`); // ${users[0].email}
    } catch(err) {
        console.log(err.message);
    }
});

// GET users for specific users
router.get('/:id', (req, res, next) => {
    res.render('users', {
        
    })
})

module.exports = router;
