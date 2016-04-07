QUnit.module('JSHint - models/product.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/product.js should pass jshint.\nmodels/product.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/product.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
