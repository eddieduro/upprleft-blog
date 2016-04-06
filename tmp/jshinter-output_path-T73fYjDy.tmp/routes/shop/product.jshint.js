QUnit.module('JSHint - routes/shop/product.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/shop/product.js should pass jshint.\nroutes/shop/product.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/shop/product.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/shop/product.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
