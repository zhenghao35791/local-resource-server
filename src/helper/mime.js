const path = require('path')

const mimeTypes = {
    'css': 'text/css',
    'html': 'text/html',
    'txt': 'text/plain',
    'xml': 'text/xml',
    'js': 'text/javascript',
    'png': 'image/png',
    'svg': 'image/svg+xml',
    'jpg': 'image/jpg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'pdf': 'application/pdf',
    'json': 'application/json',
}

module.exports = (filePath) => {
    // jquery.min.js
    let ext = path.extname(filePath)
        .split('.')
        .pop()
        .toLowerCase()
    if(!ext) {
        ext = filePath
    }
    return mimeTypes[ext] || mimeTypes['txt']
}