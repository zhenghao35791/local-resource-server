const yargs = require('yargs')
const Server = require('./app')

const argv = yargs
    .usage('local-resource-server [options]')
    .option('p', {
        alias: 'port',
        describe: 'port number',
        default: 9527
    })
    .option('h', {
        alias: 'hostname',
        describe: 'hostname ip',
        default: '127.0.0.1'
    })
    .option('d', {
        alias: 'root',
        describe: 'root path',
        default: process.cwd()
    })
    .version()
    .alias('v', 'version')
    .help() // 自动生成帮助信息
    .argv

const server = new Server(argv)
server.start()