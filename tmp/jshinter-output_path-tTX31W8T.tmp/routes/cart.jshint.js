QUnit.module('JSHint - routes/cart.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/cart.js should pass jshint.\nroutes/cart.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/cart.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
