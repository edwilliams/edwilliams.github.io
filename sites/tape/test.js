// https://github.com/substack/tape

var test = require('tape');

test('equivalence', function(t) {
    t.pass('equal things are great');
    t.true('i am here', 'this is truthy');
    t.equal(1, 1, 'these two numbers are equal');
    t.throws(function() {
        throw new Error('message');
    }, 'throwing an error on purpose')
    t.end();
});

// eric eliot
/* * /
import test from 'tape';

// For each unit test you write,
// answer these questions:
test('What component aspect are you testing?', function(assert) {
  var actual = 'What is the actual output?';
  var expected = 'What is the expected output?';

  assert.equal(actual, expected,
    'What should the feature do?');

  assert.end();
});
/* */