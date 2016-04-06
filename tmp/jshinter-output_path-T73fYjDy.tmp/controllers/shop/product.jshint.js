QUnit.module('JSHint - controllers/shop/product.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/shop/product.js should pass jshint.\ncontrollers/shop/product.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/shop/product.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/shop/product.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/shop/product.js: line 7, col 54, Missing semicolon.\n\n4 errors');
});
