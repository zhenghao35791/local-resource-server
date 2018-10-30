const promisify = require('util').promisify
const fs = require('fs')
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)
const Handlebars = require('handlebars')
const path = require('path')
const config = require('../config/defaultConfig')
const mime = require('./mime')
const compress = require('./compress')
// 解决中文乱码
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const tplPath = path.join(__dirname, '../template/dir.tpl')
const source = fs.readFileSync(tplPath, 'utf8') // 因为只需要读取一次，所以用同步，后面nodejs会使用文件的缓存。
// readFile读取默认是buffer，可以选择toSting或加utf8参数转成string
const template = Handlebars.compile(source)

module.exports = async function (req, res, filePath) {
    try {
        const stats = await stat(filePath)
        const contentType = mime(filePath)
        if(stats.isFile()){
            res.statusCode = 200
            res.setHeader('Content-Type', `${contentType};charset=utf-8`)
            let rs = fs.createReadStream(filePath)
            // 如果文件类型符合compress的类型，就先压缩流，后pipe
            if (filePath.match(config.compress)) {
                rs = compress(rs, req, res)
            }
            rs.pipe(res)
        } else if(stats.isDirectory()) {
            const files = await readdir(filePath)
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            const dir = path.relative(config.root, filePath)
            const data = {
                title: path.basename(filePath),
                dir: dir ? `/${dir}` : '',
                files
            }
            res.end(template(data))
        }
    } catch (err) {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end(`${filePath} is not a directory or file /n error: ${err}`)
    }
}