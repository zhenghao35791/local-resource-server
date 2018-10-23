buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,6));    // 输出: abcde
console.log( buf.toString(undefined,0,7)); // 使用 'utf8' 编码, 并输出: abcde

var buffer1 = Buffer.from(('tttttt'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());


var buffer4 = Buffer.from('ABC');
var buffer5 = Buffer.from('ABCD');
var result = buffer4.compare(buffer5);

if(result < 0) {
    console.log(buffer4 + " 在 " + buffer5 + "之前");
}else if(result == 0){
    console.log(buffer4 + " 与 " + buffer5 + "相同");
}else {
    console.log(buffer4 + " 在 " + buffer5 + "之后");
}

var buf6 = Buffer.from('abcdefghijkl');
var buf7 = Buffer.from('RUNOOB');

//将 buf76 插入到 buf6 指定位置上
buf7.copy(buf6, 2);

console.log(buf6.toString());
console.log(buf7.toString());

var buffer8 = Buffer.from('runoob');
// 剪切缓冲区
var buffer9 = buffer8.slice(0,2);
console.log("buffer9 content: " + buffer9.toString());
console.log("buffer9 length: " + buffer9.length);
