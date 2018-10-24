var server = require('./server_learn')
var router = require('./router_learn')
console.log('index: ' + router('/123'))
server.start(router)