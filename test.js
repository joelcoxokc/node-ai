var ai = require('./dist/index').ai
var assert = require('assert')
var p = ai.path;
var t = 'jspm_packages/github/aurelia/interface@master/sass';

console.log('=====================');
console.log('Test ai.path');
console.log('=====================');
console.log('');
console.log(p);
console.log('');
console.log('     is the same as');
console.log('');
console.log(t);
assert.ok(p === t);
console.log('********** OK ***********');
console.log('');

var paths = ['hello/world'];
var sassPaths = ai.includePaths.apply(ai, paths);
console.log('=====================');
console.log('Test ai.includePaths')
console.log('=====================');
console.log('')
console.log(sassPaths);
console.log('')
assert.ok(sassPaths[0] === ai.path);
assert.ok(sassPaths[1] === paths[0]);
console.log('********** OK ***********');
console.log('')
console.log('Good to go!!')

