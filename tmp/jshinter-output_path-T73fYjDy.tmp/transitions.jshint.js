QUnit.module('JSHint - transitions.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'transitions.js should pass jshint.\ntransitions.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ntransitions.js: line 16, col 3, Expected an assignment or function call and instead saw an expression.\ntransitions.js: line 18, col 2, Unnecessary semicolon.\n\n3 errors');
});
