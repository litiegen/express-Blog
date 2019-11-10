var express = require('express');
var router = express.Router();
const {users} = require('../data.json')
const {chapterList} = require('../data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login');
});

router.post('/list',(req, res, next)=>{
	var username = req.body.username;
  	var password = req.body.password;
	if(username == users[0].username && password == users[0].password){
		res.render('list',{chapterList});
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		res.end('用户名密码错误');
    }
})

module.exports = router;