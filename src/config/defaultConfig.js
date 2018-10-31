module.exports = {
    hostName: '127.0.0.1',
    port: '8888',
    compress: /\.(html|js|css)/,
    cache: {
        maxAge: 600,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    },
    /*
    * process.cwd() 是指的当前运行node的路径
    * 举例：如果在app.js下执行node app.js，那么process.cwd() = /Users/zhenghao/Documents/vue-mall/src
    * 如果在vue-mall目录下执行node src/app.js ，那么process.cwd() = /Users/zhenghao/Documents/vue-mall/
    * */
    root: process.cwd()  // 当前文件夹，相当于linux pwd
}