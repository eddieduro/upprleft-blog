QUnit.module('JSHint - helpers/eq.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'helpers/eq.js should pass jshint.\nhelpers/eq.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/eq.js: line 3, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nhelpers/eq.js: line 3, col 19, \'arrow function syntax (=>)\' is only available in ES6 (use \'esversion: 6\').\nhelpers/eq.js: line 5, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
});
