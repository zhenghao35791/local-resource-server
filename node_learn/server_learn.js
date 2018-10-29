var http = require('http');
var url = require('url');
var util = require('util');

function start(route) {
    function _server (req,res) {
            var _url = url.parse(req.url)
            var _pathname = _url.pathname
            console.log('_pathname: ' + _pathname)
            console.log('Request for ' + _pathname + ' received!')

            route(_pathname)
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(util.inspect(url.parse(req.url, true)));
            // 解析 url 参数
            var params = url.parse(req.url, true).query;
            res.write("Name：" + params.name);
            res.write("\n");
            res.write("URL：" + params.url);
            res.end();
    }
    http.createServer(_server).listen(8892);
    console.log('Server running at http://127.0.0.1:8888/');
}

exports.start = start;
