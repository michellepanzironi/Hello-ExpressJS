var express = require('express');
var router = express.Router();

function someFunction(arg) {
	return `The answer is ${arg}`
}

const result = someFunction('42')


router.get('/', function(req, res, next) {
	res.render('hello', { result: result })
})

module.exports = router;