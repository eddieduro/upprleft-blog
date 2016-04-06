QUnit.module('JSHint - routes/shop.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/shop.js should pass jshint.\nroutes/shop.js: line 1, col 2, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/shop.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/shop.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/shop.js: line 10, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
});
