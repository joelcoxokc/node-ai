var ai = require('./dist/index').ai
var assert = require('assert')
var p = ai.includePaths();
var t = 'jspm_packages/github/aurelia/interface@master/dist/sass';

console.log('');
console.log(p);
console.log('');
console.log('     is the same as');
console.log('');
console.log(t);
console.log('');
assert.ok(p === t);
console.log('Good to go!!')
