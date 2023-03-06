var express = require('express');
var router = express.Router();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let result = ''

router.get(`/`, async function (req, res) {
	const url = 'https://randomuser.me/api/';
	fetch(url)
		.then(res => res.json())
		.then(json => res.send(json))
		.catch(err => console.error('error:' + err));
});

/* GET users listing. */
// router.get('/', function(req, res, next) {
  
// });

module.exports = router;
