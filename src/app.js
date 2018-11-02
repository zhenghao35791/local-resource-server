const http = require('http')
const path = require('path')
const conf = require('./config/defaultConfig')
const route = require('./helper/route')

// --------- 注释是没有使用promisify的版本 -------------
/*const server = http.createServer((req, res) => {
    // 通过req获取请求url的路径
    const url = req.url
    /!*
    * path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
    * *!/
    const filePath = path.join(conf.root, req.url)
    /!*
     * fs.Stats 对象提供了一个文件的信息。
     *!/
    fs.stat(filePath, (err, stats) => {
        // 如果报错，说明不是文件或文件夹
        if(err) {
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/plain')
            res.end(`${filePath} is not a directory or file`)
            return
        }
        // 如果是文件类型
        if(stats.isFile()){
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain')
           /!* 使用readFile也可以，也是异步的，但是效率比使用流stream差
             fs.readFile(filePath, (err, data) => {
                if(err) throw err
                res.end(data)
            })*!/
            // 通过流读取filePath的文件，然后通过管道pipe传送给res
            fs.createReadStream(filePath).pipe(res)
            // 如果是文件夹
        } else if(stats.isDirectory()) {
            fs.readdir(filePath, (err, files) => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/plain')
                // 输出文件夹下的文件列表
                res.end(files.join(', '))
            })
        }
    })
})*/

class Server {
    constructor (config) {
        // 用户输入的config和本身的conf做一个合并
        this.conf = Object.assign({}, conf, config)
    }
    start() {
        const server = http.createServer((req, res) => {
            const filePath = path.join(this.conf.root, req.url)
            route(req, res, filePath, this.conf)
        })
        server.listen(this.conf.port, this.conf.hostName, () => {
            const serverUrl = `http://${this.conf.hostName}:${this.conf.port}`
            console.log(`server start at ${serverUrl}`)
        })
    }
}

module.exports = Server

