var express = require('express');
var router = express.Router();

// GET home page
router.get('/', (req, res, next) => {
    res.render('blog', {
        owner: "Douglas",
    })
})

// example of many callbacks in many forms
var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

router.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from D!')
})

// GET home page for subsidiary blog
router.get('/:subowner', (req, res, next) => {
    res.render('blog', {
        params: req.params,
        owner: "Douglas",
    });
})

module.exports = router;
