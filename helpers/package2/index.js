var output = require('package1').methods.foo();
console.log('[This From In The Module] => ' + output);
exports.output = output;