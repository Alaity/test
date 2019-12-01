 const http = require('http');

 const fs = require('fs');

 http.createServer().on('request', function(req, res) {
 	if(req.url === '/index') {
 		fs.readFile('../抽奖.html', function(err, data) {
 			if(err) {
 				res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 				res.end('请求资源不存在');
  			}else {
  				res.setHeader('Content-Type', 'text/html; charset=utf-8');
 				res.end(data);
  			}
 		});
 		
 	}else if(req.url === '/lib/vue.js') {
 		fs.readFile('../lib/vue.js', function(err, data) {
			if(err) {
	 			res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	 			res.end('请求资源不存在');
	  		}else {
	  			res.setHeader('Content-Type', 'application/x-javascript; charset=utf-8');
	 			res.end(data);
	  		}
	  	});
 	}else if(req.url === '/lib/vue-resource.js') {
 		fs.readFile('../lib/vue-resource.js', function(err, data) {
 			if(err) {
 				res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 				res.end('请求资源不存在');
  			}else {
  				res.setHeader('Content-Type', 'application/x-javascript; charset=utf-8');
 				res.end(data);
  			}
  		});
 	}else {
 		res.end('404 not found page');
 	}
 }).listen(3000, function() {
 	console.log('server is running...');
 });
