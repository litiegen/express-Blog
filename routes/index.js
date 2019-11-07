var express = require('express');
var router = express.Router();
const {users} = require('../data.json')
const {chapterList} = require('../data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login');
});

router.get('/list',(req,res)=>{
	if(req.query.yhm == users[0].username && req.query.mm == users[0].password){
		res.render('list',{chapterList});
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		res.end('用户名密码错误');
    }
})

module.exports = router;