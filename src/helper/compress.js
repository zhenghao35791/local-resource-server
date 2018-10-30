const { createGzip, createDeflate } = require('zlib')

module.exports = (rs, req, res) => {
    const acceptEcoding = req.headers['accept-encoding']
    if(!acceptEcoding || !acceptEcoding.match(/\b(gzip|deflate)\b/)) {
        return rs
    } else if (acceptEcoding.match(/\bgzip\b/)) {
        res.setHeader('Content-Encoding', 'gzip')
        return rs.pipe(createGzip())
    } else if (acceptEcoding.match(/\deflate\b/)) {
        res.setHeader('Content-Encoding', 'deflate')
        return rs.pipe(createDeflate())
    }
}

