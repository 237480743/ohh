//全局配置文件，config
const express = require('express');
const static = require('express-static');
const ejs = require('ejs');
const consolidate = require('consolidate');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const multerObj = multer({
	dest: './static/upload'
});
const mysql = require('mysql');
const expressRouter = require('express-router');

var server = express();

server.listen(8083);
// 1、取请求数据
server.use(bodyParser.urlencoded());
server.use(multerObj.any()); //不做限制，上传文件
//2、获取cookie、session
server.use(cookieParser());
(function() {
	var keys = [];
	for(var i = 0; i < 10000; i++) {
		keys[i] = 'a_' + Math.random();
	}

	server.use(cookieSession({
		name: 'sess_id',
		keys: keys,
		maxAge: 20 * 60 * 1000 //20分钟
	}));
})(); //防止全局变量污染，用一个函数自调用包裹起来

//3、模版  
server.engine('html', consolidate.ejs); //告诉node你的html用哪个模版引擎
server.set('views', 'template'); //告诉把模版引擎放在了template下面
server.set('view engine', 'html'); //让他以html的形式输出

//4、route
server.use('/admin/', require('./router/admin/index.js')());
server.use('/', require('./router/web/index.js')());
//5、static   主要从static下面拿东西
server.use(static('./static/'))