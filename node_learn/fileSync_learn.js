// not sync
var fs = require('fs');
var txtData = fs.readFile('../input1.txt', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log('NOTSYNC: ' + data.toString());
});
console.log(txtData); // undefined
console.log('main.js is over');

console.log('===============================================');
console.log('===============================================');

// sync
var fsSync = require('fs');
var txtData2 = fsSync.readFileSync('../input1.txt');
console.log('SYNC: ' + txtData2.toString());
console.log('txtData2 is over');
