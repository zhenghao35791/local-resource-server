var http = require('http');
var url = require('url');

function start(route) {
    function _server (req,res) {
            var _url = url.parse(req.url)
            var _pathname = _url.pathname
            console.log('_pathname: ' + _pathname)
            console.log('Request for ' + _pathname + ' received!')

            route(_pathname)
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('hello world');
            res.end();
    }
    http.createServer(_server).listen(8891);
    console.log('Server running at http://127.0.0.1:8888/');
}

exports.start = start;
