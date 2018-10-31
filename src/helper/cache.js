const { cache } = require('../config/defaultConfig')

function refreshRes(stats, res) {
    const {maxAge, expires, cacheControl, lastModified, etag} = cache

    if (expires) {
        res.setHeader('Expires', (new Date(Date.now() + maxAge * 1000)).toUTCString())
    }

    if (cacheControl) {
        res.setHeader('Cache-Control', `public, max-age=${maxAge}`)
    }

    if (lastModified) {
        res.setHeader('Last-Modified', stats.mtime.toUTCString())
    }

    if (etag) {
        res.setHeader('ETag', `${stats.size}-${stat.mtime}`)
    }
}

module.exports = function isFresh(stats, req, res) {
    refreshRes(stats, res)

    const lastModified = req.headers['if-modified-since']
    const etag = req.headers['if-none-match']
    // 如果没有lastModified和etag，说明是第一次请求
    if(!lastModified && !etag) {
        return false
    }
    // 如果有lastModified，但获取的lastModified和res header里面的lastModified不一样，说明修改了
    if(lastModified && lastModified !== res.getHeader('Last-Modified')) {
        return false
    }

    if(etag && etag !== res.getHeader('ETag')) {
        return false
    }

    return true
}