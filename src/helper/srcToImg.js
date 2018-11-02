const fs = require('fs')
const http = require('http')
const https = require('https')
const path = require('path')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)

module.exports = async(src, dir) => {
    if (/\.(jpg|png|gif)$/.test(src)) {
        await urlToImg(src, dir)
    } else {
        await base64ToImg(src,dir)
    }
}

// url => img
const urlToImg = (url, dir, callback) => {
    const mod = /^https:/.test(url) ? https: http
    const ext = path.extname(url)
    const file = path.join(dir, `${Date.now()}.${ext}`)

    mod.get(url, res => {
        res.pipe(fs.createWriteStream(file))
            .on('finish', () => {
                // callback()
                console.log('urlToImg: ' + file)
            })
    })
}

// base64 => image
const base64ToImg = async (base64Str, dir) => {
    // data:image/jpeg;base,....
    const matches = base64Str.match(/^data:(.+?);base64,(.+)$/)
    console.log('matches: ' + matches)
    try {
        const ext = matches[1].split('/')[1]
            .replace('jpeg', 'jpg')
        console.log('ext: ' + ext)

        const file = path.join(dir, `${Date.now()}.${ext}`)
        console.log('file: ' + file)

        await writeFile(file, matches[2], 'base64')
        console.log('base64ToImg: ' + file)
    } catch (err) {
        console.log(`${err}, 非法base64字符串`)
    }
}