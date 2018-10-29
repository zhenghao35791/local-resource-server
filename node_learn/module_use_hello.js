var useHello = require('./module_hello')
console.log(useHello.getName());
useHello.setName('123');
console.log(useHello.getName());