var test = require('./');
var util = require('../lib/util');

test('util.slugify', function (t) {
  var input = 'RaD    to the Max';
  var expect = 'rad-to-the-max';
  var result = util.slugify(input);
  t.same(result, expect);
  t.end();
});

test('util.sha256', function (t) {
  var crypto = require('crypto');
  var sum = crypto.createHash('sha256')
  var expect = 'sha256$' + sum.update('awesomerad').digest('hex');
  var result = util.sha256('awesome', 'rad');
  t.same(result, expect);
  t.end();
});

test('util.randomInt', function (t) {
  var times = 10000;
  var max = 10;
  while (times--) {
    var integer = util.randomInt(max);
    if (integer >= max || integer < 0) {
      t.fail('integer should not be outside bounds');
      break;
    }
  }
  t.pass('no failures');
  t.end();
});

test('util.randomString', function (t) {
  var string = util.randomString(128);
  t.same(string.length, 128, 'should have the right length');
  t.end();
});

test('util.strongRandomString', function (t) {
  var string = util.strongRandomString(128);
  t.same(string.length, 128, 'should have the right length');
  t.end();
});

test('util.toMap', function (t) {
  var array = [{name: 'ya', value: true}, {name: 'nope', value: false}];
  var obj = util.toMap(array, 'name');
  t.same(obj.ya.value, true);
  t.same(obj.nope.value, false);
  t.end();
});
