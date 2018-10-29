var express = require('express')
var app = express()
var fs = require('fs')
var util = require('util')
// 定义新增的用户结构，与users.json结构相同
var user = {
    "user4" : {
        "name" : "4444",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}
var del_id = 2;
// 删除用户
app.get('/deleteUser', (req, res) => {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + del_id];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})
// 获取用户列表
app.get('/deleteUser', (req, res) => {
    fs.readFile(__dirname + '/' + 'users.json', 'utf-8', (err, data) => {
        console.log(data)
        console.log('address: ' + util.inspect(server.address()))
        res.end(data)
        // res.end('address: ' + util.inspect(server.address()))
    })
})
// 添加用户
app.get('/addUser', (req, res) => {
    fs.readFile(__dirname + '/' + 'users.json', 'utf-8', (err, data) => {
        console.log('data1: ' + data)
        console.log('typeof data1: ' + typeof(data))
        data = JSON.parse(data)
        data['user4'] = user['user4']
        console.log('data2: ' + data.user1.name)
        console.log('typeof data2: ' + typeof(data))
        console.log('data3: ' + JSON.stringify(data))
        res.end(JSON.stringify(data))
    })
})
// 显示用户详情，创建了 RESTful API :id（用户id）， 用于读取指定用户的详细信息
// !!!注意，如果在同一个 server.js 里创建多个 RESTful API ， 并且 :id 放在前边， 那么它会拦截其他的请求
app.get('/:id', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

// 服务器
var server = app.listen(8082, () => {
    console.log('address: ' + util.inspect(server.address()))
    var host = server.address().address
    var port = server.address().port
    console.log('地址为：http://%s%s', host, port )
})