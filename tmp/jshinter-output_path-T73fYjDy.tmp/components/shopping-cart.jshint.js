QUnit.module('JSHint - components/shopping-cart.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/shopping-cart.js should pass jshint.\ncomponents/shopping-cart.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/shopping-cart.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
