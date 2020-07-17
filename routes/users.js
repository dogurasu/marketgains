var express = require('express');
var router = express.Router();

// Fake Users Database
let users = [
    { username: 'dogurasu', email: 'deedee@g.com' },
    { username: 'michelil', email: 'mimi@g.com' },
]

// list all users
router.list = (req, res) => {
    res.render('users', {title: 'Users', users: users});
}

// load specific queried user
router.load = (req, res, next) => {
    let id = req.params.id; // get the user id passed in the request as route params
    
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Here at Users');
});

// GET users for specific users
router.get('/:id', (req, res, next) => {
    res.render('users', {
        
    })
})

module.exports = router;
