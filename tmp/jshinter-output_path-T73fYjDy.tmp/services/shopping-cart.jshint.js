QUnit.module('JSHint - services/shopping-cart.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/shopping-cart.js should pass jshint.\nservices/shopping-cart.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/shopping-cart.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nservices/shopping-cart.js: line 5, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/shopping-cart.js: line 6, col 45, Missing semicolon.\nservices/shopping-cart.js: line 8, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nservices/shopping-cart.js: line 9, col 47, Missing semicolon.\n\n6 errors');
});
