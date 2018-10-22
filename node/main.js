var fs = require('fs');
var txtData = fs.readFile('../input2.txt', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});

console.log(txtData);
console.log('main.js is over');
